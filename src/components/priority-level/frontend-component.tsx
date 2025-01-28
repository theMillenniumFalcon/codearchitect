"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Component } from "@/types"

interface FrontendComponentProps {
    component: Component;
    toggleComponentExpansion: (componentName: string) => void;
    expandedComponents: string[];
}

export const FrontendComponent: React.FC<FrontendComponentProps> = ({
    component,
    toggleComponentExpansion,
    expandedComponents
}) => {
    return (
        <Card className="mt-4 blueprint-card">
            <CardHeader>
                <CardTitle className="flex items-center justify-between blueprint-text">
                    <span>{component.name}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleComponentExpansion(component.name)}
                        className="blueprint-button"
                    >
                        {expandedComponents.includes(component.name) ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        )}
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-2 blueprint-text">{component.description}</p>
                {expandedComponents.includes(component.name) && (
                    <div>
                        <h5 className="blueprint-subheading mb-2 mt-6">Requirements:</h5>
                        <ul className="list-disc pl-5 blueprint-text">
                            {component.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}