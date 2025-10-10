"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"

interface MultiplayerLobbyProps {
  onCreateRoom: () => void
  onJoinRoom: (roomId: string) => void
}

export function MultiplayerLobby({ onCreateRoom, onJoinRoom }: MultiplayerLobbyProps) {
  const [roomId, setRoomId] = useState("")

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      onJoinRoom(roomId.toUpperCase())
    }
  }

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Multiplayer Pong</CardTitle>
          <CardDescription className="text-center text-zinc-400">
            Create or join a game room
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button
              onClick={onCreateRoom}
              className="w-full bg-white text-black hover:bg-zinc-200"
              size="lg"
            >
              Create New Room
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-zinc-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-zinc-900 px-2 text-zinc-400">Or</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="roomId" className="text-sm text-zinc-300">
                Room ID
              </Label>
              <Input
                id="roomId"
                placeholder="Enter room code"
                value={roomId}
                onChange={(e) => setRoomId(e.target.value.toUpperCase())}
                onKeyPress={(e) => e.key === 'Enter' && handleJoinRoom()}
                className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 uppercase"
                maxLength={6}
              />
            </div>
            <Button
              onClick={handleJoinRoom}
              variant="outline"
              className="w-full border-zinc-700 hover:bg-zinc-800"
              size="lg"
              disabled={!roomId.trim()}
            >
              Join Room
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
