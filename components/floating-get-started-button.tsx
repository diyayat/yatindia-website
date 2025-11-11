"use client"

import { ArrowRight } from "lucide-react"
import { useGetStarted } from "./get-started-context"
import { Button } from "@/components/ui/button"

export function FloatingGetStartedButton() {
  const { openModal } = useGetStarted()

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={openModal}
        size="default"
        className="bg-gradient-primary text-primary-foreground hover:shadow-glow shadow-lg rounded-full px-4 py-3 h-auto group animate-bounce-subtle transition-all duration-300"
        aria-label="Start Your Project"
      >
        <span className="font-semibold text-sm md:text-base">Start Your Project</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  )
}

