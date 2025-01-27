"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PromptCarousel } from "@/components/prompt-carousel"
import { Query } from "@/types"

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [currentQuery, setCurrentQuery] = useState<Query>({
    idea: "",
    depth: 1,
    focusArea: null,
    breakdown: null
  })

  const handleSubmit = () => {}

  const handlePromptSelect = () => {}

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
          </Card>
        </div>
      </div>

      <footer className="w-full py-4 mt-auto">
        <p className="text-center text-xs blueprint-text opacity-50">
          <a 
            href="https://github.com/themillenniumfalcon/codearchitect" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            Source code
          </a>
        </p>
      </footer>
    </div>
  )
}
