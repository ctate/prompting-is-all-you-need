'use client'

import * as React from 'react'

type MuteContextType = {
  isMuted: boolean
  setIsMuted: (muted: boolean) => void
}

const MuteContext = React.createContext<MuteContextType | undefined>(undefined)

export function MuteProvider({ children }: { children: React.ReactNode }) {
  const [isMuted, setIsMuted] = React.useState(true)

  return (
    <MuteContext.Provider value={{ isMuted, setIsMuted }}>
      {children}
    </MuteContext.Provider>
  )
}

export function useMute() {
  const context = React.useContext(MuteContext)
  if (context === undefined) {
    throw new Error('useMute must be used within a MuteProvider')
  }
  return context
}
