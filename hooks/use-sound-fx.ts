"use client"

import { useEffect, useRef } from "react"

export function useSoundFx() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize AudioContext on mount
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    return () => {
      audioContextRef.current?.close()
    }
  }, [])

  const playWallHit = () => {
    const ctx = audioContextRef.current
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.type = "square"
    oscillator.frequency.setValueAtTime(200, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1)

    gainNode.gain.setValueAtTime(0.3, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.1)
  }

  const playPaddleHit = () => {
    const ctx = audioContextRef.current
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.type = "sine"
    oscillator.frequency.setValueAtTime(400, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.08)

    gainNode.gain.setValueAtTime(0.4, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.08)
  }

  const playPixelHit = () => {
    const ctx = audioContextRef.current
    if (!ctx) return

    const oscillator = ctx.createOscillator()
    const gainNode = ctx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(ctx.destination)

    oscillator.type = "triangle"
    oscillator.frequency.setValueAtTime(600, ctx.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05)

    gainNode.gain.setValueAtTime(0.2, ctx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05)

    oscillator.start(ctx.currentTime)
    oscillator.stop(ctx.currentTime + 0.05)
  }

  return {
    playWallHit,
    playPaddleHit,
    playPixelHit,
  }
}
