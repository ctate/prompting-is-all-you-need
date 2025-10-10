const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const { Server } = require('socket.io')

const dev = process.env.NODE_ENV !== 'production'
const hostname = process.env.HOSTNAME || 'localhost'
const port = parseInt(process.env.PORT || '3000', 10)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

const rooms = new Map()

app.prepare().then(() => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  })

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  })

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id)

    socket.on('create-room', (callback) => {
      const roomId = Math.random().toString(36).substring(2, 8).toUpperCase()
      rooms.set(roomId, {
        players: [{ id: socket.id, paddleIndex: 0 }],
        ball: null,
        gameState: 'waiting'
      })
      socket.join(roomId)
      console.log(`Room ${roomId} created by ${socket.id}`)
      callback({ roomId, paddleIndex: 0 })
    })

    socket.on('join-room', (roomId, callback) => {
      const room = rooms.get(roomId)
      if (!room) {
        callback({ error: 'Room not found' })
        return
      }
      if (room.players.length >= 4) {
        callback({ error: 'Room is full' })
        return
      }
      
      const paddleIndex = room.players.length
      room.players.push({ id: socket.id, paddleIndex })
      socket.join(roomId)
      
      console.log(`Player ${socket.id} joined room ${roomId} as paddle ${paddleIndex}`)
      
      callback({ roomId, paddleIndex })
      
      // Notify all players in the room
      io.to(roomId).emit('player-joined', {
        players: room.players,
        gameState: room.gameState
      })
    })

    socket.on('start-game', (roomId) => {
      const room = rooms.get(roomId)
      if (room) {
        room.gameState = 'playing'
        io.to(roomId).emit('game-started')
        console.log(`Game started in room ${roomId}`)
      }
    })

    socket.on('paddle-move', ({ roomId, paddleIndex, position }) => {
      const room = rooms.get(roomId)
      if (room) {
        socket.to(roomId).emit('paddle-update', { paddleIndex, position })
      }
    })

    socket.on('ball-update', ({ roomId, ball }) => {
      const room = rooms.get(roomId)
      if (room) {
        room.ball = ball
        socket.to(roomId).emit('ball-sync', ball)
      }
    })

    socket.on('pixel-hit', ({ roomId, pixelIndex }) => {
      socket.to(roomId).emit('pixel-hit-sync', pixelIndex)
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id)
      
      // Remove player from all rooms
      rooms.forEach((room, roomId) => {
        const playerIndex = room.players.findIndex(p => p.id === socket.id)
        if (playerIndex !== -1) {
          room.players.splice(playerIndex, 1)
          
          if (room.players.length === 0) {
            rooms.delete(roomId)
            console.log(`Room ${roomId} deleted (empty)`)
          } else {
            io.to(roomId).emit('player-left', {
              players: room.players,
              disconnectedId: socket.id
            })
          }
        }
      })
    })
  })

  httpServer
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
