import { ForwardRefExoticComponent, RefAttributes } from "react"
import { LucideProps } from "lucide-react"

export type Query = {
    idea: string;
    depth: number;
    focusArea: string | null;
    breakdown: Breakdown | null;
}

export type Breakdown = {
    overview: string;
    priorities: {
        p0: PriorityLevel;
        p1: PriorityLevel;
        p2: PriorityLevel;
    }
    developmentSteps: DevelopmentPhase[];
}

type DevelopmentPhase = {
    phase: string;
    tasks: string[];
    priority: string;
}

type PriorityLevel = {
    frontend: {
        components: Component[];
    }
    backend: {
        services: Service[];
        dataModel: string[];
    }
}

export type Component = {
    name: string;
    description: string;
    requirements: string[];
}

export type Service = {
    name: string;
    description: string;
    requirements: string[];
}

export type Prompt = {
    id: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    text: string;
}