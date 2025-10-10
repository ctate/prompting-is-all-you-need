"use client"

import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Users, Copy, Check } from "lucide-react"
import { useState } from "react"

interface Player {
  id: string
  paddleIndex: number
}

interface GameRoomProps {
  roomId: string
  players: Player[]
  currentPlayerId: string
  gameState: 'waiting' | 'playing'
  onStartGame: () => void
  onLeaveRoom: () => void
}

const PADDLE_NAMES = ['Left Paddle', 'Right Paddle', 'Top Paddle', 'Bottom Paddle']

export function GameRoom({ roomId, players, currentPlayerId, gameState, onStartGame, onLeaveRoom }: GameRoomProps) {
  const [copied, setCopied] = useState(false)

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const isHost = players[0]?.id === currentPlayerId

  if (gameState === 'playing') {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Card className="bg-zinc-900/90 border-zinc-800 text-white backdrop-blur-sm">
          <CardContent className="p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4" />
              <span>{players.length}/4 Players</span>
            </div>
            <Button
              onClick={onLeaveRoom}
              variant="destructive"
              size="sm"
              className="w-full"
            >
              Leave Game
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Game Room</CardTitle>
          <CardDescription className="text-center text-zinc-400">
            Share the room code with your friends
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-2">
            <div className="text-4xl font-bold tracking-wider bg-zinc-800 px-6 py-3 rounded-lg">
              {roomId}
            </div>
            <Button
              onClick={copyRoomId}
              variant="outline"
              size="icon"
              className="border-zinc-700 hover:bg-zinc-800"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Users className="w-4 h-4" />
              <span>Players ({players.length}/4)</span>
            </div>
            <div className="space-y-2">
              {players.map((player, index) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between p-3 bg-zinc-800 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm">
                      {player.id === currentPlayerId ? 'You' : `Player ${index + 1}`}
                    </span>
                  </div>
                  <Badge variant="secondary" className="bg-zinc-700 text-zinc-200">
                    {PADDLE_NAMES[player.paddleIndex]}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {isHost && (
            <Button
              onClick={onStartGame}
              className="w-full bg-white text-black hover:bg-zinc-200"
              size="lg"
              disabled={players.length < 2}
            >
              {players.length < 2 ? 'Waiting for players...' : 'Start Game'}
            </Button>
          )}

          {!isHost && (
            <div className="text-center text-sm text-zinc-400">
              Waiting for host to start the game...
            </div>
          )}

          <Button
            onClick={onLeaveRoom}
            variant="outline"
            className="w-full border-zinc-700 hover:bg-zinc-800"
          >
            Leave Room
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
