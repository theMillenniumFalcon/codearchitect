"use client"

import React, { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { FrontendComponent } from "./frontend-component"
import { BackendService } from "./backend-service"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Breakdown } from "@/types"

interface PriorityLevelProps {
    priority: "p0" | "p1" | "p2";
    toggleSection: (sectionName: string) => void;
    expandedSections: string[];
    breakdown: Breakdown;
}

export const PriorityLevel: React.FC<PriorityLevelProps> = ({
    priority,
    toggleSection,
    expandedSections,
    breakdown
}) => {
    const [expandedComponents, setExpandedComponents] = useState<string[]>([])

    const toggleComponentExpansion = (componentName: string) => {
        setExpandedComponents((prev) => (
                prev.includes(componentName) ? prev.filter(name => name !== componentName) : [...prev, componentName]
            )
        )
    }

    return (
        <Card className="mt-6 blueprint-card">
            <CardHeader>
                <CardTitle className="flex items-center justify-between blueprint-text">
                    <span>Priority {priority.toUpperCase()}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleSection(priority)}
                        className="blueprint-button"
                    >
                        {expandedSections.includes(priority) ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        )}
                    </Button>
                </CardTitle>
            </CardHeader>
            {expandedSections.includes(priority) && (
                <CardContent>
                    <h4 className="blueprint-subheading mt-6 mb-2">Frontend Components:</h4>
                    {breakdown.priorities[priority]?.frontend?.components?.map((component, index) => (
                        <FrontendComponent
                            key={index}
                            component={component}
                            toggleComponentExpansion={toggleComponentExpansion}
                            expandedComponents={expandedComponents}
                        />
                    )) || (
                        <p className="blueprint-text">No frontend components for this priority level.</p>
                    )}
                    <h4 className="blueprint-subheading mt-8">Backend Services:</h4>
                    {breakdown.priorities[priority]?.backend?.services?.map((service, index) => (
                        <BackendService
                            key={index}
                            service={service}
                            toggleComponentExpansion={toggleComponentExpansion}
                            expandedComponents={expandedComponents}
                        />
                    )) || (
                        <p className="blueprint-text">No backend services for this priority level.</p>
                    )}
                </CardContent>
            )}
        </Card>
    )
}