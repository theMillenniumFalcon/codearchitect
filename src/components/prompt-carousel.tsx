"use client"

import React, { useState, useRef } from "react"
import { topRowPrompts } from "@/constants"
import { Button } from "./ui/button"

interface PromptCarouselProps {
    onPromptSelect: (prompt: string) => void
}

export const PromptCarousel: React.FC<PromptCarouselProps> = ({}) => {
    const topRowRef = useRef<HTMLDivElement>(null)
    const [topRowOffset, setTopRowOffset] = useState(0)
    const [isTopRowPaused, setIsTopRowPaused] = useState(false)

    const handlePromptClick = (prompt: string) => {}

    return (
        <div className="relative w-full overflow-hidden py-4 mb-6 rounded-md">
            <div className="flex flex-col gap-4">
                <div className="relative overflow-hidden">
                    <div 
                        ref={topRowRef} 
                        className="flex gap-4 whitespace-nowrap"
                        style={{ transform: `translateX(-${topRowOffset}px)` }}
                        onMouseEnter={() => setIsTopRowPaused(true)}
                        onMouseLeave={() => setIsTopRowPaused(false)}
                    >
                        {[...topRowPrompts, ...topRowPrompts].map((prompt, index) => {
                            const Icon = prompt.icon
                            return (
                                <Button
                                    key={`${prompt.id}-${index}`}
                                    variant="outline"
                                    className="flex items-center gap-2 whitespace-nowrap blueprint-button"
                                    onClick={() => handlePromptClick(prompt.text)}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span className="blueprint-text">{prompt.text}</span>
                                </Button>
                            )
                        })}
                    </div>
                </div>
                
            </div>
        </div>
    )
}