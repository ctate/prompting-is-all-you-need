# Multiplayer Implementation Guide

## What Was Added

This project has been upgraded from a single-player pong animation to a full-featured multiplayer game supporting up to 4 simultaneous players.

## Architecture

### Server-Side (`server.js`)
- Custom Node.js server using Socket.IO for WebSocket connections
- Room management system with unique 6-character room codes
- Real-time game state synchronization
- Player connection/disconnection handling
- Automatic room cleanup when empty

### Client-Side Components

1. **MultiplayerContainer** (`components/multiplayer-container.tsx`)
   - Main state management component
   - Handles Socket.IO connection
   - Manages game state transitions (lobby → room → playing)
   - Processes all WebSocket events

2. **MultiplayerLobby** (`components/multiplayer-lobby.tsx`)
   - Initial landing page for multiplayer mode
   - Create new room or join existing room
   - Clean, modern UI with shadcn/ui components

3. **GameRoom** (`components/game-room.tsx`)
   - Pre-game lobby showing connected players
   - Room code display with copy-to-clipboard
   - Player list with paddle assignments
   - Host controls for starting the game
   - In-game minimal UI showing player count

4. **MultiplayerGame** (`components/multiplayer-game.tsx`)
   - Full game implementation with multiplayer support
   - Each player controls one paddle via mouse movement
   - Host (first player) controls ball physics
   - Real-time synchronization of:
     - Paddle positions
     - Ball position and velocity
     - Pixel hit states
   - Maintains same visual style as original game

## Game Flow

1. **Menu**: Choose Single Player or Multiplayer
2. **Lobby**: Create or join a room
3. **Room**: Wait for players and start game
4. **Playing**: Control your paddle and compete!

## Socket Events

### Client → Server
- `create-room`: Create a new game room
- `join-room`: Join an existing room with code
- `start-game`: Host starts the game
- `paddle-move`: Send paddle position updates
- `ball-update`: Host sends ball physics updates
- `pixel-hit`: Notify when a pixel is hit

### Server → Client
- `player-joined`: New player joined the room
- `player-left`: Player disconnected
- `game-started`: Game has begun
- `paddle-update`: Receive other players' paddle movements
- `ball-sync`: Receive ball position from host
- `pixel-hit-sync`: Receive pixel hit events

## Key Features

- **4-Player Support**: Each player controls one of four paddles (left, right, top, bottom)
- **Host Authority**: First player controls ball physics to prevent desync
- **Real-time Sync**: All game state updates in real-time via WebSockets
- **Reconnection Handling**: Graceful disconnect/reconnect behavior
- **Room Persistence**: Rooms stay active until all players leave
- **Toast Notifications**: User-friendly feedback for all events
- **Responsive Design**: Works on all screen sizes

## Running the Game

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The game will be available at `http://localhost:3000`

## Technical Notes

- Socket.IO handles automatic reconnection and fallback transports
- Ball physics are calculated only by the host to ensure consistency
- Paddle movements are sent immediately for responsive gameplay
- Room codes are randomly generated 6-character alphanumeric strings
- Maximum 4 players per room (one per paddle)
