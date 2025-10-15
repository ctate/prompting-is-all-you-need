import { PromptingIsAllYouNeed } from "../prompting"
import { ThemeToggle } from "@/components/theme-toggle"
import { MuteToggle } from "@/components/mute-toggle"

export default function Home() {
  return (
    <>
      <PromptingIsAllYouNeed />
      <MuteToggle />
      <ThemeToggle />
    </>
  )
}
