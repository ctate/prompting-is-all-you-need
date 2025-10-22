"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

// Mock agent and model data - replace with your actual data
const AGENTS = [
  { id: "agent-1", name: "Agent 1" },
  { id: "agent-2", name: "Agent 2" },
  { id: "agent-3", name: "Agent 3" },
  { id: "multi-agent", name: "Multi-Agent" },
]

const MODELS = [
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5", name: "GPT-3.5" },
  { id: "claude-3", name: "Claude 3" },
  { id: "claude-2", name: "Claude 2" },
  { id: "llama-2", name: "Llama 2" },
]

export function AgentModelSelector() {
  const [selectedAgent, setSelectedAgent] = React.useState<string>("")
  const [selectedModels, setSelectedModels] = React.useState<string[]>([])
  const [isMultiSelectOpen, setIsMultiSelectOpen] = React.useState(false)

  const isMultiAgent = selectedAgent === "multi-agent"

  const handleModelToggle = (modelId: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelId)
        ? prev.filter((id) => id !== modelId)
        : [...prev, modelId]
    )
  }

  const handleAgentChange = (value: string) => {
    setSelectedAgent(value)
    // Reset model selection when switching modes
    if (value === "multi-agent") {
      setSelectedModels([])
    } else {
      setSelectedModels([])
    }
  }

  const handleSingleModelChange = (value: string) => {
    setSelectedModels([value])
  }

  return (
    <div className="fixed top-4 left-4 z-50 flex gap-4">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">Agent</label>
        <Select value={selectedAgent} onValueChange={handleAgentChange}>
          <SelectTrigger className="w-[180px] bg-background">
            <SelectValue placeholder="Select agent" />
          </SelectTrigger>
          <SelectContent>
            {AGENTS.map((agent) => (
              <SelectItem key={agent.id} value={agent.id}>
                {agent.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-foreground">Model</label>
        {isMultiAgent ? (
          <div className="relative">
            <button
              onClick={() => setIsMultiSelectOpen(!isMultiSelectOpen)}
              className={cn(
                "flex h-10 w-[180px] items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              )}
            >
              <span>
                {selectedModels.length > 0
                  ? `${selectedModels.length} selected`
                  : "Select models"}
              </span>
              <span className="text-xl font-bold">X</span>
            </button>

            {isMultiSelectOpen && (
              <div className="absolute top-full mt-1 w-[180px] rounded-md border bg-popover text-popover-foreground shadow-md z-50">
                <div className="p-1 max-h-96 overflow-auto">
                  {MODELS.map((model) => {
                    const isSelected = selectedModels.includes(model.id)
                    return (
                      <div
                        key={model.id}
                        onClick={() => handleModelToggle(model.id)}
                        className={cn(
                          "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                          isSelected && "bg-accent/50"
                        )}
                      >
                        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                          {isSelected && <Check className="h-4 w-4" />}
                        </span>
                        {model.name}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        ) : (
          <Select
            value={selectedModels[0] || ""}
            onValueChange={handleSingleModelChange}
            disabled={!selectedAgent}
          >
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Select model" />
            </SelectTrigger>
            <SelectContent>
              {MODELS.map((model) => (
                <SelectItem key={model.id} value={model.id}>
                  {model.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
    </div>
  )
}
