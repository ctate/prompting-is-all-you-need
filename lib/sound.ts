class SoundManager {
  private audioContext: AudioContext | null = null
  private isMuted = false

  constructor() {
    if (typeof window !== "undefined") {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
  }

  private playTone(frequency: number, duration: number, volume: number = 0.3) {
    if (!this.audioContext || this.isMuted) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = "square"

    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + duration)
  }

  playPaddleHit() {
    // Low beep for paddle hits
    this.playTone(200, 0.1, 0.2)
  }

  playWallHit() {
    // Mid beep for wall hits
    this.playTone(300, 0.08, 0.15)
  }

  playPixelHit() {
    // High beep for pixel hits
    this.playTone(800, 0.05, 0.25)
  }

  toggleMute() {
    this.isMuted = !this.isMuted
    return this.isMuted
  }

  getMuted() {
    return this.isMuted
  }
}

export const soundManager = new SoundManager()
