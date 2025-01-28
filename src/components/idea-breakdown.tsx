"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Breakdown } from "@/types"

interface IdeaBreakdownProps {
    breakdown: Breakdown;
}

export const IdeaBreakdown: React.FC<IdeaBreakdownProps> = ({ breakdown }) => {
    const [expandedSections, setExpandedSections] = useState<string[]>(["overview", "p0"])

    const toggleSection = (sectionName: string) => {
        setExpandedSections((prev) => (
                prev.includes(sectionName) ? prev.filter(name => name !== sectionName) : [...prev, sectionName]
            )
        )
    }

    return (
        <div className="space-y-6">
            <Card className="blueprint-card">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between blueprint-text">
                        <span>Overview</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSection("overview")}
                            className="blueprint-button"
                        >
                            {expandedSections.includes("overview") ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                </CardHeader>
                {expandedSections.includes("overview") && (
                    <CardContent>
                        <p className="blueprint-text pr-8">{breakdown.overview}</p>
                    </CardContent>
                )}
            </Card>

            <Card className="blueprint-card">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between blueprint-text">
                        <span>Development Steps</span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSection("developmentSteps")}
                            className="blueprint-button"
                        >
                            {expandedSections.includes("developmentSteps") ? (
                                <ChevronDown className="h-4 w-4" />
                            ) : (
                                <ChevronRight className="h-4 w-4" />
                            )}
                        </Button>
                    </CardTitle>
                </CardHeader>
                {expandedSections.includes('developmentSteps') && (
                    <CardContent>
                        {breakdown.developmentSteps.map((phase, index) => (
                            <div key={index} className="mb-4 mt-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <h4 className="blueprint-subheading">{phase.phase}</h4>
                                    <Badge className="mx-1 blueprint-text bg-blue-200/10">{phase.priority}</Badge>
                                </div>
                                <ul className="list-disc pl-5 blueprint-text">
                                    {phase.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex}>{task}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </CardContent>
                )}
            </Card>
        </div>
    )
}