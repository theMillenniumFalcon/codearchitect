"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

interface PriorityLevelProps {
    priority: "p0" | "p1" | "p2";
    toggleSection: (sectionName: string) => void;
    expandedSections: string[];
}

export const PriorityLevel: React.FC<PriorityLevelProps> = ({ priority, toggleSection, expandedSections }) => {
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
        </Card>
    )
}