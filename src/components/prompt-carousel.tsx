"use client"

import React, { useState, useEffect, useRef } from "react"
import { topRowPrompts, bottomRowPrompts } from "@/constants"
import { Button } from "./ui/button"

interface PromptCarouselProps {
    onPromptSelect: (prompt: string) => void
}

export const PromptCarousel: React.FC<PromptCarouselProps> = ({ onPromptSelect }) => {
    const topRowRef = useRef<HTMLDivElement>(null)
    const bottomRowRef = useRef<HTMLDivElement>(null)
    const [topRowOffset, setTopRowOffset] = useState(0)
    const [bottomRowOffset, setBottomRowOffset] = useState(0)
    const [isTopRowPaused, setIsTopRowPaused] = useState(false)
    const [isBottomRowPaused, setIsBottomRowPaused] = useState(false)

    useEffect(() => {
        let animationFrameId: number
        let lastTimestamp = 0
    
        const animate = (timestamp: number) => {
            if (lastTimestamp === 0) {
                lastTimestamp = timestamp
            }
    
            const deltaTime = timestamp - lastTimestamp
            lastTimestamp = timestamp
    
            if (!isTopRowPaused && topRowRef.current) {
                setTopRowOffset((prevOffset) => {
                    const newOffset = (prevOffset + 0.02 * deltaTime) % (topRowRef.current!.scrollWidth / 2)
                    return newOffset
                })
            }
            if (!isBottomRowPaused && bottomRowRef.current) {
                setBottomRowOffset((prevOffset) => {
                    const newOffset = (prevOffset - 0.02 * deltaTime + bottomRowRef.current!.scrollWidth / 2) % (bottomRowRef.current!.scrollWidth / 2)
                    return newOffset
                })
            }
    
            animationFrameId = requestAnimationFrame(animate)
        }
    
        animationFrameId = requestAnimationFrame(animate)
    
        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [isTopRowPaused, isBottomRowPaused])

    const handlePromptClick = (prompt: string) => {
        onPromptSelect(prompt)
    }

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
                <div className="relative overflow-hidden">
                    <div 
                        ref={bottomRowRef}
                        className="flex gap-4 whitespace-nowrap"
                        style={{ transform: `translateX(-${bottomRowOffset}px)` }}
                        onMouseEnter={() => setIsBottomRowPaused(true)}
                        onMouseLeave={() => setIsBottomRowPaused(false)}
                    >
                        {[...bottomRowPrompts, ...bottomRowPrompts].map((prompt, index) => {
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
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#1e3a8a] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#1e3a8a] to-transparent pointer-events-none" />
        </div>
    )
}