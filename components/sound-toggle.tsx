"use client"

import * as React from "react"
import { Volume2, VolumeX } from "lucide-react"

import { Button } from "@/components/ui/button"

interface SoundToggleProps {
  isMuted: boolean
  onToggle: () => void
}

export function SoundToggle({ isMuted, onToggle }: SoundToggleProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onToggle}
      className="fixed top-4 right-20 z-50 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 dark:bg-black/10 dark:border-white/20 dark:hover:bg-black/20"
    >
      {isMuted ? (
        <VolumeX className="h-[1.2rem] w-[1.2rem] text-white dark:text-white" />
      ) : (
        <Volume2 className="h-[1.2rem] w-[1.2rem] text-white dark:text-white" />
      )}
      <span className="sr-only">Toggle sound</span>
    </Button>
  )
}
