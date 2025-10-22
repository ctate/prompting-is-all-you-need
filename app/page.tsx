import { PromptingIsAllYouNeed } from "../prompting"
import { ThemeToggle } from "@/components/theme-toggle"
import { MuteToggle } from "@/components/mute-toggle"
import { AgentModelSelector } from "@/components/agent-model-selector"

export default function Home() {
  return (
    <>
      <PromptingIsAllYouNeed />
      <AgentModelSelector />
      <MuteToggle />
      <ThemeToggle />
    </>
  )
}
