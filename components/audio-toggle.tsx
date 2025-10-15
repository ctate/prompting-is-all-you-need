"use client"

import * as React from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AudioToggleProps {
  isMuted: boolean
  onToggle: () => void
}

export function AudioToggle({ isMuted, onToggle }: AudioToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="fixed top-4 right-20 z-50 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 transition-all duration-200"
    >
      {isMuted ? (
        <VolumeX className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Volume2 className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
      <span className="sr-only">{isMuted ? "Unmute audio" : "Mute audio"}</span>
    </Button>
  )
}