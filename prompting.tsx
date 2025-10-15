"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "./components/ui/button"
import { Volume2, VolumeX, Waves, Flame } from "lucide-react"

const COLOR = "#FFFFFF"
const HIT_COLOR = "#333333"
const BACKGROUND_COLOR = "#000000"
const PADDLE_COLOR = "#FFFFFF"

// Ball colors array for cycling
const BALL_COLORS = [
  "#FF6B6B", // Red
  "#4ECDC4", // Teal
  "#45B7D1", // Blue
  "#96CEB4", // Green
  "#FFEAA7", // Yellow
  "#DDA0DD", // Plum
  "#98D8C8", // Mint
  "#F7DC6F", // Gold
  "#BB8FCE", // Light Purple
  "#85C1E9", // Light Blue
]
const LETTER_SPACING = 1
const WORD_SPACING = 3

// Sound utility functions
const createAudioContext = () => {
  if (typeof window !== "undefined") {
    return new (window.AudioContext || (window as any).webkitAudioContext)()
  }
  return null
}

const playSound = (audioContext: AudioContext | null, frequency: number, duration: number, type: OscillatorType = "sine", isMuted: boolean = false) => {
  if (!audioContext || isMuted) return

  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = frequency
  oscillator.type = type

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + duration)
}

const create8BitSong = (audioContext: AudioContext | null, isMuted: boolean = false) => {
  if (!audioContext || isMuted) return

  // 8-bit song data - a fun chiptune melody
  const melody = [
    { note: 523.25, duration: 0.5 }, // C5
    { note: 587.33, duration: 0.5 }, // D5
    { note: 659.25, duration: 0.5 }, // E5
    { note: 523.25, duration: 0.5 }, // C5
    { note: 440.00, duration: 0.5 }, // A4
    { note: 392.00, duration: 0.5 }, // G4
    { note: 440.00, duration: 0.5 }, // A4
    { note: 523.25, duration: 0.5 }, // C5
    { note: 659.25, duration: 0.5 }, // E5
    { note: 523.25, duration: 0.5 }, // C5
    { note: 440.00, duration: 0.5 }, // A4
    { note: 392.00, duration: 0.5 }, // G4
    { note: 440.00, duration: 0.5 }, // A4
    { note: 523.25, duration: 1.0 }, // C5
    { note: 0, duration: 0.5 }, // Rest
  ]

  const bassLine = [
    { note: 130.81, duration: 1.0 }, // C3
    { note: 146.83, duration: 1.0 }, // D3
    { note: 164.81, duration: 1.0 }, // E3
    { note: 130.81, duration: 1.0 }, // C3
    { note: 110.00, duration: 1.0 }, // A2
    { note: 98.00, duration: 1.0 },  // G2
    { note: 110.00, duration: 1.0 }, // A2
    { note: 130.81, duration: 1.0 }, // C3
  ]

  const playMelody = () => {
    if (isMuted) return
    
    melody.forEach((note, index) => {
      if (note.note > 0) {
        setTimeout(() => {
          const oscillator = audioContext.createOscillator()
          const gainNode = audioContext.createGain()
          
          oscillator.connect(gainNode)
          gainNode.connect(audioContext.destination)
          
          oscillator.frequency.value = note.note
          oscillator.type = 'square' // 8-bit sound
          
          gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.duration)
          
          oscillator.start(audioContext.currentTime)
          oscillator.stop(audioContext.currentTime + note.duration)
        }, index * 500) // 500ms per note
      }
    })
  }

  const playBass = () => {
    if (isMuted) return
    
    bassLine.forEach((note, index) => {
      setTimeout(() => {
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()
        
        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)
        
        oscillator.frequency.value = note.note
        oscillator.type = 'triangle' // Bass sound
        
        gainNode.gain.setValueAtTime(0.15, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + note.duration)
        
        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + note.duration)
      }, index * 1000) // 1 second per bass note
    })
  }

  // Start the song
  playMelody()
  playBass()

  // Loop the song every 8 seconds
  const songLoop = setInterval(() => {
    if (!isMuted) {
      playMelody()
      playBass()
    }
  }, 8000)

  return { songLoop }
}

const PIXEL_MAP = {
  P: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  R: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  O: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  S: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
}

interface Pixel {
  x: number
  y: number
  size: number
  hit: boolean
}

interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
  color: string
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
  targetY: number
  isVertical: boolean
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  size: number
  color: string
  waveOffset: number
}

export function PromptingIsAllYouNeed() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pixelsRef = useRef<Pixel[]>([])
  const ballRef = useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
  const paddlesRef = useRef<Paddle[]>([])
  const scaleRef = useRef(1)
  const audioContextRef = useRef<AudioContext | null>(null)
  const [isMuted, setIsMuted] = useState(true)
  const isMutedRef = useRef(true)
  const colorIndexRef = useRef(0)
  const colorChangeTimerRef = useRef(0)
  const particlesRef = useRef<Particle[]>([])
  const particleTimerRef = useRef(0)
  const songLoopRef = useRef<NodeJS.Timeout | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentScene, setCurrentScene] = useState<'ocean' | 'fire'>('ocean')

  // Update ref when state changes
  useEffect(() => {
    isMutedRef.current = isMuted
    // Control 8-bit song based on mute state
    if (isMuted) {
      if (songLoopRef.current) {
        clearInterval(songLoopRef.current)
        songLoopRef.current = null
      }
      setIsPlaying(false)
    } else if (!isPlaying && audioContextRef.current) {
      const song = create8BitSong(audioContextRef.current, false)
      if (song) {
        songLoopRef.current = song.songLoop
        setIsPlaying(true)
      }
    }
  }, [isMuted, isPlaying])

  // Clear particles when scene changes
  useEffect(() => {
    particlesRef.current = []
    particleTimerRef.current = 0
  }, [currentScene])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize audio context
    audioContextRef.current = createAudioContext()

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000)
      initializeGame()
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      const LARGE_PIXEL_SIZE = 8 * scale
      const SMALL_PIXEL_SIZE = 4 * scale
      const BALL_SPEED = 6 * scale

      pixelsRef.current = []
      const words = ["PROMPTING", "IS ALL YOU NEED"]

      const calculateWordWidth = (word: string, pixelSize: number) => {
        return (
          word.split("").reduce((width, letter) => {
            const letterWidth = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
            return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
          }, 0) -
          LETTER_SPACING * pixelSize
        )
      }

      const totalWidthLarge = calculateWordWidth(words[0], LARGE_PIXEL_SIZE)
      const totalWidthSmall = words[1].split(" ").reduce((width, word, index) => {
        return width + calculateWordWidth(word, SMALL_PIXEL_SIZE) + (index > 0 ? WORD_SPACING * SMALL_PIXEL_SIZE : 0)
      }, 0)
      const totalWidth = Math.max(totalWidthLarge, totalWidthSmall)
      const scaleFactor = (canvas.width * 0.8) / totalWidth

      const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor
      const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor

      const largeTextHeight = 5 * adjustedLargePixelSize
      const smallTextHeight = 5 * adjustedSmallPixelSize
      const spaceBetweenLines = 5 * adjustedLargePixelSize
      const totalTextHeight = largeTextHeight + spaceBetweenLines + smallTextHeight

      let startY = (canvas.height - totalTextHeight) / 2

      words.forEach((word, wordIndex) => {
        const pixelSize = wordIndex === 0 ? adjustedLargePixelSize : adjustedSmallPixelSize
        const totalWidth =
          wordIndex === 0
            ? calculateWordWidth(word, adjustedLargePixelSize)
            : words[1].split(" ").reduce((width, w, index) => {
                return (
                  width +
                  calculateWordWidth(w, adjustedSmallPixelSize) +
                  (index > 0 ? WORD_SPACING * adjustedSmallPixelSize : 0)
                )
              }, 0)

        let startX = (canvas.width - totalWidth) / 2

        if (wordIndex === 1) {
          word.split(" ").forEach((subWord) => {
            subWord.split("").forEach((letter) => {
              const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
              if (!pixelMap) return

              for (let i = 0; i < pixelMap.length; i++) {
                for (let j = 0; j < pixelMap[i].length; j++) {
                  if (pixelMap[i][j]) {
                    const x = startX + j * pixelSize
                    const y = startY + i * pixelSize
                    pixelsRef.current.push({ x, y, size: pixelSize, hit: false })
                  }
                }
              }
              startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
            })
            startX += WORD_SPACING * adjustedSmallPixelSize
          })
        } else {
          word.split("").forEach((letter) => {
            const pixelMap = PIXEL_MAP[letter as keyof typeof PIXEL_MAP]
            if (!pixelMap) return

            for (let i = 0; i < pixelMap.length; i++) {
              for (let j = 0; j < pixelMap[i].length; j++) {
                if (pixelMap[i][j]) {
                  const x = startX + j * pixelSize
                  const y = startY + i * pixelSize
                  pixelsRef.current.push({ x, y, size: pixelSize, hit: false })
                }
              }
            }
            startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
          })
        }
        startY += wordIndex === 0 ? largeTextHeight + spaceBetweenLines : 0
      })

      // Initialize ball position near the top right corner
      const ballStartX = canvas.width * 0.9
      const ballStartY = canvas.height * 0.1

      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: -BALL_SPEED,
        dy: BALL_SPEED,
        radius: adjustedLargePixelSize / 2,
        color: BALL_COLORS[0],
      }

      const paddleWidth = adjustedLargePixelSize
      const paddleLength = 10 * adjustedLargePixelSize

      paddlesRef.current = [
        {
          x: 0,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width - paddleWidth,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: 0,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: canvas.height - paddleWidth,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
      ]

      // Initialize particles
      particlesRef.current = []
      particleTimerRef.current = 0
    }

    const createParticle = (x: number, y: number, scene: 'ocean' | 'fire') => {
      if (scene === 'ocean') {
        const colors = ['#00BFFF', '#1E90FF', '#87CEEB', '#4682B4', '#5F9EA0', '#20B2AA', '#00CED1', '#40E0D0']
        return {
          x: x + (Math.random() - 0.5) * 30,
          y: y + Math.random() * 20,
          vx: (Math.random() - 0.5) * 1.5,
          vy: Math.random() * 2 + 0.5, // Bubbles rise upward
          life: 0,
          maxLife: 80 + Math.random() * 60,
          size: 1 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          waveOffset: Math.random() * Math.PI * 2
        }
      } else {
        const colors = ['#FF4500', '#FF6347', '#FF7F50', '#FFA500', '#FFD700', '#FF6B35', '#FF8C00']
        return {
          x: x + (Math.random() - 0.5) * 20,
          y: y + Math.random() * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: -Math.random() * 3 - 1, // Fire rises upward
          life: 0,
          maxLife: 60 + Math.random() * 40,
          size: 2 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          waveOffset: Math.random() * Math.PI * 2
        }
      }
    }

    const updateParticles = (scene: 'ocean' | 'fire') => {
      const canvas = canvasRef.current
      if (!canvas) return

      // Add new particles
      particleTimerRef.current += 1
      const spawnRate = scene === 'ocean' ? 3 : 2
      if (particleTimerRef.current >= spawnRate) {
        const numParticles = scene === 'ocean' ? 2 + Math.floor(Math.random() * 2) : 3 + Math.floor(Math.random() * 3)
        for (let i = 0; i < numParticles; i++) {
          particlesRef.current.push(createParticle(
            Math.random() * canvas.width,
            scene === 'ocean' ? canvas.height - 20 + Math.random() * 10 : canvas.height - 50 + Math.random() * 30,
            scene
          ))
        }
        particleTimerRef.current = 0
      }

      // Update existing particles
      particlesRef.current = particlesRef.current.filter(particle => {
        if (scene === 'ocean') {
          // Ocean particle behavior
          particle.waveOffset += 0.1
          particle.x += particle.vx + Math.sin(particle.waveOffset) * 0.5
          particle.y -= particle.vy // Bubbles rise upward
          particle.life += 1
          
          // Gentle floating motion
          particle.vx += (Math.random() - 0.5) * 0.1
          particle.vx *= 0.98 // Water resistance
          particle.size *= 0.995 // Very slow shrinking
          
          return particle.life < particle.maxLife && particle.size > 0.2 && particle.y > -10
        } else {
          // Fire particle behavior
          particle.x += particle.vx
          particle.y += particle.vy
          particle.life += 1
          particle.vy += 0.05 // Gravity effect
          particle.vx *= 0.99 // Air resistance
          particle.size *= 0.98 // Shrink over time
          
          return particle.life < particle.maxLife && particle.size > 0.1
        }
      })
    }

    const updateGame = () => {
      const ball = ballRef.current
      const paddles = paddlesRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      // Update particles
      updateParticles(currentScene)

      // Color change logic - change color every 2 seconds or on collision
      colorChangeTimerRef.current += 1
      if (colorChangeTimerRef.current >= 120) { // ~2 seconds at 60fps
        colorIndexRef.current = (colorIndexRef.current + 1) % BALL_COLORS.length
        ball.color = BALL_COLORS[colorIndexRef.current]
        colorChangeTimerRef.current = 0
      }

      // Wall collision detection with sound
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy
        playSound(audioContextRef.current, 220, 0.1, "triangle", isMutedRef.current) // Wall bounce sound
        // Change color on wall collision
        colorIndexRef.current = (colorIndexRef.current + 1) % BALL_COLORS.length
        ball.color = BALL_COLORS[colorIndexRef.current]
      }
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx
        playSound(audioContextRef.current, 220, 0.1, "triangle", isMutedRef.current) // Wall bounce sound
        // Change color on wall collision
        colorIndexRef.current = (colorIndexRef.current + 1) % BALL_COLORS.length
        ball.color = BALL_COLORS[colorIndexRef.current]
      }

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx
            playSound(audioContextRef.current, 330, 0.15, "square", isMutedRef.current) // Paddle hit sound
            // Change color on paddle hit
            colorIndexRef.current = (colorIndexRef.current + 1) % BALL_COLORS.length
            ball.color = BALL_COLORS[colorIndexRef.current]
          }
        } else {
          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy
            playSound(audioContextRef.current, 330, 0.15, "square", isMutedRef.current) // Paddle hit sound
            // Change color on paddle hit
            colorIndexRef.current = (colorIndexRef.current + 1) % BALL_COLORS.length
            ball.color = BALL_COLORS[colorIndexRef.current]
          }
        }
      })

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.targetY = ball.y - paddle.height / 2
          paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
          paddle.y += (paddle.targetY - paddle.y) * 0.1
        } else {
          paddle.targetY = ball.x - paddle.width / 2
          paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
          paddle.x += (paddle.targetY - paddle.x) * 0.1
        }
      })

      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true
          playSound(audioContextRef.current, 440, 0.08, "sine", isMutedRef.current) // Pixel hit sound
          const centerX = pixel.x + pixel.size / 2
          const centerY = pixel.y + pixel.size / 2
          if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
            ball.dx = -ball.dx
          } else {
            ball.dy = -ball.dy
          }
        }
      })
    }

    const drawGame = () => {
      if (!ctx) return

      // Create background gradient based on scene
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      if (currentScene === 'ocean') {
        gradient.addColorStop(0, '#001122')
        gradient.addColorStop(0.2, '#002244')
        gradient.addColorStop(0.4, '#003366')
        gradient.addColorStop(0.6, '#004488')
        gradient.addColorStop(0.8, '#0055AA')
        gradient.addColorStop(1, '#000011')
      } else {
        gradient.addColorStop(0, '#000000')
        gradient.addColorStop(0.3, '#1a0000')
        gradient.addColorStop(0.6, '#330000')
        gradient.addColorStop(0.8, '#660000')
        gradient.addColorStop(1, '#000000')
      }
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles based on scene
      particlesRef.current.forEach(particle => {
        const alpha = (1 - (particle.life / particle.maxLife)) * (currentScene === 'ocean' ? 0.7 : 1)
        ctx.save()
        ctx.globalAlpha = alpha
        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
        
        if (currentScene === 'ocean') {
          // Add a subtle glow effect for bubbles
          ctx.globalAlpha = alpha * 0.3
          ctx.fillStyle = '#FFFFFF'
          ctx.beginPath()
          ctx.arc(particle.x - particle.size * 0.3, particle.y - particle.size * 0.3, particle.size * 0.3, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.restore()
      })

      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? HIT_COLOR : COLOR
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      ctx.fillStyle = ballRef.current.color
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = PADDLE_COLOR
      paddlesRef.current.forEach((paddle) => {
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
      })
    }

    const gameLoop = () => {
      updateGame()
      drawGame()
      requestAnimationFrame(gameLoop)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    gameLoop()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      // Stop 8-bit song
      if (songLoopRef.current) {
        clearInterval(songLoopRef.current)
        songLoopRef.current = null
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full"
        aria-label="Prompting Is All You Need: Fullscreen Pong game with pixel text"
      />
      <div className="fixed top-4 right-4 z-10 flex gap-2">
        <Button
          onClick={() => setCurrentScene(currentScene === 'ocean' ? 'fire' : 'ocean')}
          className="bg-black/50 hover:bg-black/70 text-white border border-white/20"
          size="icon"
          aria-label={`Switch to ${currentScene === 'ocean' ? 'fire' : 'ocean'} scene`}
        >
          {currentScene === 'ocean' ? <Flame className="h-4 w-4" /> : <Waves className="h-4 w-4" />}
        </Button>
        <Button
          onClick={() => setIsMuted(!isMuted)}
          className="bg-black/50 hover:bg-black/70 text-white border border-white/20"
          size="icon"
          aria-label={isMuted ? "Unmute sound" : "Mute sound"}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}

export default PromptingIsAllYouNeed
