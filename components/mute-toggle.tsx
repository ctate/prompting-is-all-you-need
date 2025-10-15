'use client'

import * as React from 'react'
import { Volume2, VolumeX } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useMute } from '@/components/mute-provider'

export function MuteToggle() {
  const { isMuted, setIsMuted } = useMute()
  const [mounted, setMounted] = React.useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="fixed top-4 right-16 z-50 rounded-full backdrop-blur-md bg-background/80">
        <VolumeX className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle mute</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-16 z-50 rounded-full backdrop-blur-md bg-background/80"
      onClick={() => setIsMuted(!isMuted)}
    >
      {isMuted ? (
        <VolumeX className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      ) : (
        <Volume2 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
      )}
      <span className="sr-only">Toggle mute</span>
    </Button>
  )
}
