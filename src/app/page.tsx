"use client"

import React, { useState } from "react"
import { PromptCarousel } from "@/components/prompt-carousel"
import { LoadingScreen } from "@/components/loading-screen"
import { QueryHistory } from "@/components/query-history"
import { IdeaBreakdown } from "@/components/idea-breakdown"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
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
  const [queryHistory, setQueryHistory] = useState<Query[]>([])

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) {
      e.preventDefault()
    }
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(currentQuery)
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to process the idea")
      }
      
      if (!data || typeof data !== "object" || !data.overview) {
        throw new Error("Invalid response from server")
      }
      
      const newQueryState = {
        ...currentQuery,
        breakdown: data
      }
      setCurrentQuery(newQueryState)
      setQueryHistory(prev => [...prev, newQueryState])
    } catch (error) {
      console.error("Error:", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handlePromptSelect = async (prompt: string) => {
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
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newQuery)
      })
      
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to process the idea")
      }

      if (!data || typeof data !== "object" || !data.overview) {
        throw new Error("Invalid response from server")
      }

      const newQueryState = {
        ...newQuery,
        breakdown: data
      }

      setCurrentQuery(newQueryState)
      setQueryHistory(prev => [...prev, newQueryState])
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleNavigateToQuery = (index: number) => {
    setCurrentQuery(queryHistory[index])
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

            {error && (
              <Alert variant="destructive" className="mt-4 border border-2 border-blue-200 bg-blue-50/50 text-blue-900">
                <AlertDescription className="font-medium">⚠️ {error}</AlertDescription>
              </Alert>
            )}

            {currentQuery.breakdown && (
              <div className="mt-8">
                <QueryHistory
                  history={queryHistory.map(query => ({ idea: query.idea, focusArea: query.focusArea }))}
                  currentIndex={queryHistory.length - 1}
                  onSelect={handleNavigateToQuery}
                />
                <IdeaBreakdown
                  breakdown={currentQuery.breakdown}
                />
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}
