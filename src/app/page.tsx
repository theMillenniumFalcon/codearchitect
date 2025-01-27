"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PromptCarousel } from "@/components/prompt-carousel"
import LoadingScreen from "@/components/loading-screen"
import { Query } from "@/types"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentQuery, setCurrentQuery] = useState<Query>({
    idea: "",
    depth: 1,
    focusArea: null,
    breakdown: null
  })

  const handleSubmit = () => {}

  const handlePromptSelect = (prompt: string) => {
    const newQuery = {
      idea: prompt,
      depth: 1,
      focusArea: null,
      breakdown: null
    }

    setCurrentQuery(newQuery)
    setIsLoading(true)
    setError(null)

    try {

    } catch (error) {
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Card className="p-12 blueprint-card">
            <h1 className="text-3xl font-bold mb-4 blueprint-title">CodeArchitect</h1>
            <p className="blueprint-text mb-8">Get a step-by-step technical blueprint of your ideas!</p>
            <div className="space-y-4">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-grow">
                  <Input
                    type="text"
                    value={currentQuery.idea}
                    onChange={(e) => setCurrentQuery(prev => ({ ...prev, idea: e.target.value }))}
                    placeholder="I want to build..."
                    disabled={isLoading}
                    className="w-full blueprint-input border border-2"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading || !currentQuery.idea.trim()}
                  className="blueprint-button-primary font-bold"
                >
                  Get blueprint
                </Button>
              </form>
              {!currentQuery.breakdown && !isLoading && (
                <PromptCarousel onPromptSelect={handlePromptSelect} />
              )}
            </div>
            {isLoading && <LoadingScreen />}
          </Card>
        </div>
      </div>
    </div>
  )
}
