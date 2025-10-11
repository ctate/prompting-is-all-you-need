"use client"

import { useCallback, useRef } from "react"

type SfxName = "click" | "hover" | "success" | "error"

function createClick(ctx: AudioContext, t: number) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = "triangle"
  osc.frequency.setValueAtTime(180, t)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(0.25, t + 0.006)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.085)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(t)
  osc.stop(t + 0.1)
}

function createHover(ctx: AudioContext, t: number) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = "sine"
  osc.frequency.setValueAtTime(260, t)
  osc.frequency.exponentialRampToValueAtTime(280, t + 0.04)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(0.12, t + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.08)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(t)
  osc.stop(t + 0.1)
}

function createSuccess(ctx: AudioContext, t: number) {
  // Two-note chirp
  const o1 = ctx.createOscillator()
  const g1 = ctx.createGain()
  o1.type = "sine"
  o1.frequency.setValueAtTime(520, t)
  g1.gain.setValueAtTime(0.0001, t)
  g1.gain.exponentialRampToValueAtTime(0.18, t + 0.02)
  g1.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
  o1.connect(g1)
  g1.connect(ctx.destination)
  o1.start(t)
  o1.stop(t + 0.14)

  const o2 = ctx.createOscillator()
  const g2 = ctx.createGain()
  o2.type = "sine"
  o2.frequency.setValueAtTime(660, t + 0.12)
  g2.gain.setValueAtTime(0.0001, t + 0.12)
  g2.gain.exponentialRampToValueAtTime(0.18, t + 0.14)
  g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.26)
  o2.connect(g2)
  g2.connect(ctx.destination)
  o2.start(t + 0.12)
  o2.stop(t + 0.28)
}

function createError(ctx: AudioContext, t: number) {
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.type = "square"
  osc.frequency.setValueAtTime(160, t)
  osc.frequency.exponentialRampToValueAtTime(120, t + 0.08)
  gain.gain.setValueAtTime(0.0001, t)
  gain.gain.exponentialRampToValueAtTime(0.2, t + 0.01)
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12)
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.start(t)
  osc.stop(t + 0.14)
}

export function useSfx() {
  // SSR guard: no-op on server
  if (typeof window === "undefined") {
    return {
      play: (_name: SfxName = "click") => {},
      playClick: () => {},
      playHover: () => {},
      playSuccess: () => {},
      playError: () => {},
    }
  }

  const ctxRef = useRef<AudioContext | null>(null)

  const ensureContext = useCallback(async () => {
    if (!ctxRef.current) {
      const Ctx: typeof AudioContext = (window as any).AudioContext || (window as any).webkitAudioContext
      ctxRef.current = new Ctx()
    }
    if (ctxRef.current.state === "suspended") {
      try {
        await ctxRef.current.resume()
      } catch {}
    }
    return ctxRef.current
  }, [])

  const play = useCallback(async (name: SfxName = "click") => {
    const ctx = await ensureContext()
    const t = ctx.currentTime
    switch (name) {
      case "hover":
        createHover(ctx, t)
        break
      case "success":
        createSuccess(ctx, t)
        break
      case "error":
        createError(ctx, t)
        break
      case "click":
      default:
        createClick(ctx, t)
        break
    }
  }, [ensureContext])

  return {
    play,
    playClick: () => play("click"),
    playHover: () => play("hover"),
    playSuccess: () => play("success"),
    playError: () => play("error"),
  }
}

export type { SfxName }

