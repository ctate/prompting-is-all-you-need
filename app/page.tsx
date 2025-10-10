"use client"

import { useState } from "react"
import { PromptingIsAllYouNeed } from "../prompting"
import { MultiplayerContainer } from "../components/multiplayer-container"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Users, User } from "lucide-react"

type Mode = 'menu' | 'singleplayer' | 'multiplayer'

export default function Home() {
  const [mode, setMode] = useState<Mode>('menu')

  if (mode === 'menu') {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white">
          <CardHeader>
            <CardTitle className="text-3xl text-center font-bold">
              Prompting Is All You Need
            </CardTitle>
            <CardDescription className="text-center text-zinc-400">
              Choose your game mode
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={() => setMode('singleplayer')}
              className="w-full bg-white text-black hover:bg-zinc-200 h-16 text-lg"
            >
              <User className="w-5 h-5 mr-2" />
              Single Player
            </Button>
            <Button
              onClick={() => setMode('multiplayer')}
              className="w-full bg-white text-black hover:bg-zinc-200 h-16 text-lg"
            >
              <Users className="w-5 h-5 mr-2" />
              Multiplayer
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (mode === 'singleplayer') {
    return (
      <>
        <Button
          onClick={() => setMode('menu')}
          variant="outline"
          className="fixed top-4 left-4 z-50 bg-zinc-900/90 border-zinc-700 text-white hover:bg-zinc-800"
        >
          Back to Menu
        </Button>
        <PromptingIsAllYouNeed />
      </>
    )
  }

  return (
    <>
      <Button
        onClick={() => setMode('menu')}
        variant="outline"
        className="fixed top-4 left-4 z-50 bg-zinc-900/90 border-zinc-700 text-white hover:bg-zinc-800"
      >
        Back to Menu
      </Button>
      <MultiplayerContainer />
    </>
  )
}
