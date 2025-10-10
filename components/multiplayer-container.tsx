"use client"

import { useEffect, useState } from "react"
import { io, Socket } from "socket.io-client"
import { MultiplayerLobby } from "./multiplayer-lobby"
import { GameRoom } from "./game-room"
import { MultiplayerGame } from "./multiplayer-game"
import { useToast } from "@/hooks/use-toast"

interface Player {
  id: string
  paddleIndex: number
}

type GameState = 'lobby' | 'room' | 'playing'

export function MultiplayerContainer() {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [gameState, setGameState] = useState<GameState>('lobby')
  const [roomId, setRoomId] = useState<string>('')
  const [paddleIndex, setPaddleIndex] = useState<number>(0)
  const [players, setPlayers] = useState<Player[]>([])
  const [roomState, setRoomState] = useState<'waiting' | 'playing'>('waiting')
  const { toast } = useToast()

  useEffect(() => {
    const socketInstance = io(window.location.origin, {
      path: '/socket.io',
    })

    socketInstance.on('connect', () => {
      console.log('Connected to server')
    })

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from server')
      toast({
        title: "Disconnected",
        description: "Connection to server lost. Returning to lobby.",
        variant: "destructive",
      })
      handleLeaveRoom()
    })

    socketInstance.on('player-joined', ({ players: updatedPlayers, gameState: state }) => {
      setPlayers(updatedPlayers)
      setRoomState(state)
      toast({
        title: "Player joined",
        description: `${updatedPlayers.length} player(s) in room`,
      })
    })

    socketInstance.on('player-left', ({ players: updatedPlayers, disconnectedId }) => {
      setPlayers(updatedPlayers)
      toast({
        title: "Player left",
        description: `${updatedPlayers.length} player(s) remaining`,
      })
    })

    socketInstance.on('game-started', () => {
      setRoomState('playing')
      setGameState('playing')
      toast({
        title: "Game started!",
        description: "Move your mouse to control your paddle",
      })
    })

    setSocket(socketInstance)

    return () => {
      socketInstance.disconnect()
    }
  }, [])

  const handleCreateRoom = () => {
    if (!socket) return

    socket.emit('create-room', (response: { roomId: string; paddleIndex: number; error?: string }) => {
      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        })
        return
      }
      setRoomId(response.roomId)
      setPaddleIndex(response.paddleIndex)
      setPlayers([{ id: socket.id!, paddleIndex: response.paddleIndex }])
      setGameState('room')
      toast({
        title: "Room created!",
        description: `Room code: ${response.roomId}`,
      })
    })
  }

  const handleJoinRoom = (roomIdInput: string) => {
    if (!socket) return

    socket.emit('join-room', roomIdInput, (response: { roomId?: string; paddleIndex?: number; error?: string }) => {
      if (response.error) {
        toast({
          title: "Error",
          description: response.error,
          variant: "destructive",
        })
        return
      }
      if (response.roomId && response.paddleIndex !== undefined) {
        setRoomId(response.roomId)
        setPaddleIndex(response.paddleIndex)
        setGameState('room')
        toast({
          title: "Joined room!",
          description: `Room code: ${response.roomId}`,
        })
      }
    })
  }

  const handleStartGame = () => {
    if (!socket || !roomId) return
    socket.emit('start-game', roomId)
  }

  const handleLeaveRoom = () => {
    setGameState('lobby')
    setRoomId('')
    setPaddleIndex(0)
    setPlayers([])
    setRoomState('waiting')
  }

  if (!socket) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-xl">Connecting to server...</div>
      </div>
    )
  }

  return (
    <>
      {gameState === 'lobby' && (
        <MultiplayerLobby
          onCreateRoom={handleCreateRoom}
          onJoinRoom={handleJoinRoom}
        />
      )}
      {gameState === 'room' && (
        <GameRoom
          roomId={roomId}
          players={players}
          currentPlayerId={socket.id!}
          gameState={roomState}
          onStartGame={handleStartGame}
          onLeaveRoom={handleLeaveRoom}
        />
      )}
      {gameState === 'playing' && socket && (
        <MultiplayerGame
          socket={socket}
          roomId={roomId}
          paddleIndex={paddleIndex}
        />
      )}
      {gameState === 'playing' && (
        <GameRoom
          roomId={roomId}
          players={players}
          currentPlayerId={socket.id!}
          gameState={roomState}
          onStartGame={handleStartGame}
          onLeaveRoom={handleLeaveRoom}
        />
      )}
    </>
  )
}
