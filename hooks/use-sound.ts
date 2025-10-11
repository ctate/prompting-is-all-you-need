import { useCallback, useRef } from 'react'

export function useSound() {
  const audioContextRef = useRef<AudioContext | null>(null)

  const getAudioContext = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    return audioContextRef.current
  }, [])

  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'square') => {
    const audioContext = getAudioContext()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = type

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + duration)
  }, [getAudioContext])

  // Ball hitting pixel sound
  const playHitPixel = useCallback(() => {
    playTone(800, 0.1, 'square')
  }, [playTone])

  // Ball hitting paddle sound
  const playHitPaddle = useCallback(() => {
    playTone(200, 0.15, 'square')
  }, [playTone])

  // Ball hitting wall sound
  const playHitWall = useCallback(() => {
    playTone(150, 0.1, 'sine')
  }, [playTone])

  return {
    playHitPixel,
    playHitPaddle,
    playHitWall,
  }
}
