import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export type Query = {
    idea: string;
    depth: number;
    focusArea: string | null;
    breakdown: string | null;
}

export type Prompt = {
    id: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    text: string;
}