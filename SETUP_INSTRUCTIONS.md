# Setup Instructions - Multiplayer Pong

## Overview
Your pong game now has full multiplayer support! Players can create or join rooms and play together in real-time.

## What Changed

### New Files Created
1. **server.js** - Custom Node.js server with Socket.IO
2. **components/multiplayer-container.tsx** - Main multiplayer state manager
3. **components/multiplayer-lobby.tsx** - Room creation/joining UI
4. **components/game-room.tsx** - Pre-game lobby UI
5. **components/multiplayer-game.tsx** - Multiplayer game implementation
6. **MULTIPLAYER_GUIDE.md** - Technical documentation
7. **SETUP_INSTRUCTIONS.md** - This file

### Modified Files
1. **package.json** - Updated scripts to use custom server
2. **app/page.tsx** - Added mode selection (Single/Multiplayer)
3. **app/layout.tsx** - Added Toaster for notifications
4. **README.md** - Updated with multiplayer features

### New Dependencies
- `socket.io` - Server-side WebSocket library
- `socket.io-client` - Client-side WebSocket library

## How to Run

### Development Mode
```bash
pnpm dev
```
This will start the custom Node.js server with Socket.IO support on port 3000.

### Production Mode
```bash
pnpm build
pnpm start
```

## Testing Multiplayer Locally

1. Start the development server: `pnpm dev`
2. Open `http://localhost:3000` in your browser
3. Click "Multiplayer"
4. Click "Create New Room"
5. Copy the room code
6. Open a new browser tab/window (or incognito window)
7. Navigate to `http://localhost:3000`
8. Click "Multiplayer"
9. Click "Join Room" and paste the room code
10. In the first tab, click "Start Game"
11. Move your mouse in each window to control different paddles!

## How to Play Multiplayer

### Creating a Game
1. Select "Multiplayer" from the main menu
2. Click "Create New Room"
3. Share the 6-character room code with friends
4. Wait for players to join (2-4 players recommended)
5. Click "Start Game" when ready

### Joining a Game
1. Select "Multiplayer" from the main menu
2. Enter the room code provided by your friend
3. Click "Join Room"
4. Wait for the host to start the game

### Playing
- Move your mouse to control your assigned paddle
- First player (host) gets the left paddle
- Additional players get right, top, and bottom paddles
- Try to keep the ball in play!
- Pixels change color when hit by the ball

## Architecture Overview

```
Client (Browser)
    ↓
Socket.IO Client
    ↓
WebSocket Connection
    ↓
Socket.IO Server (server.js)
    ↓
Room Management + Game State
    ↓
Broadcast to All Players
```

## Key Features

✅ Real-time multiplayer (up to 4 players)
✅ Room-based matchmaking with unique codes
✅ Host authority for ball physics (prevents desync)
✅ P2P-style paddle synchronization
✅ Automatic room cleanup
✅ Connection/disconnection handling
✅ Toast notifications for events
✅ Single-player mode still available
✅ Responsive design maintained

## Troubleshooting

### "Connecting to server..." stuck
- Make sure the server is running with `pnpm dev`
- Check that port 3000 is not in use by another application

### Room not found
- Room codes expire when all players leave
- Room codes are case-sensitive (always uppercase)
- Make sure you're entering the exact 6-character code

### Paddle not responding
- Make sure the game has started (host must click "Start Game")
- Move your mouse within the browser window
- Check browser console for any errors

### Players can't connect
- If testing locally, all players must be on `http://localhost:3000`
- For remote play, the server must be deployed and accessible via public URL
- Check firewall settings if deploying to a server

## Deployment Notes

When deploying to production:
1. The custom server (server.js) must be used
2. WebSocket connections require proper proxy configuration
3. Ensure the hosting platform supports WebSockets
4. Environment variables may be needed for production URLs

## Next Steps (Optional Enhancements)

- Add scoring system
- Add game timer
- Add sound effects
- Add chat functionality
- Add different difficulty levels
- Add tournament mode
- Add AI opponents for fewer than 4 players
- Add customizable colors/themes
- Add mobile touch controls
- Add replay functionality

Enjoy your new multiplayer pong game! 🎮🏓
