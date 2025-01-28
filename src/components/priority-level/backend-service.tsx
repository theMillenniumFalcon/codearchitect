"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Service } from "@/types"

interface BackendServiceProps {
    service: Service;
    toggleComponentExpansion: (componentName: string) => void;
    expandedComponents: string[];
}

export const BackendService: React.FC<BackendServiceProps> = ({
    service,
    toggleComponentExpansion,
    expandedComponents
}) => {
    return (
        <Card className="mt-4 blueprint-card">
            <CardHeader>
                <CardTitle className="flex items-center justify-between blueprint-text">
                    <span>{service.name}</span>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleComponentExpansion(service.name)}
                        className="blueprint-button"
                    >
                        {expandedComponents.includes(service.name) ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronRight className="h-4 w-4" />
                        )}
                    </Button>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="mb-2 blueprint-text">{service.description}</p>
                {expandedComponents.includes(service.name) && (
                    <div>
                        <h5 className="blueprint-subheading mb-2 mt-6">Requirements:</h5>
                        <ul className="list-disc pl-5 blueprint-text">
                            {service.requirements.map((req, idx) => (
                                <li key={idx}>{req}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </CardContent>
        </Card>
    )
}