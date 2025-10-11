import { useRef, useCallback, useEffect } from "react"

export type SoundType = "paddle" | "pixel" | "wall"

export function useAudio() {
  const audioContextRef = useRef<AudioContext | null>(null)

  useEffect(() => {
    // Initialize AudioContext on mount
    if (typeof window !== "undefined") {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }

    return () => {
      // Clean up AudioContext on unmount
      if (audioContextRef.current) {
        audioContextRef.current.close()
      }
    }
  }, [])

  const playSound = useCallback((type: SoundType) => {
    const audioContext = audioContextRef.current
    if (!audioContext) return

    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Different sounds for different collision types
    switch (type) {
      case "paddle":
        // Lower pitched, longer sound for paddle hits
        oscillator.frequency.value = 220 // A3
        oscillator.type = "square"
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.15)
        break

      case "pixel":
        // Higher pitched, shorter sound for pixel hits
        oscillator.frequency.value = 440 // A4
        oscillator.type = "sine"
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.08)
        break

      case "wall":
        // Mid pitched, medium sound for wall bounces
        oscillator.frequency.value = 330 // E4
        oscillator.type = "triangle"
        gainNode.gain.setValueAtTime(0.12, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.1)
        break
    }
  }, [])

  return { playSound }
}
