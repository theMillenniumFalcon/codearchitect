import { Query } from "@/types"

export const mockQueryHistory: Query[] = [
    {
        idea: "Build a real-time chat application with end-to-end encryption",
        depth: 3,
        focusArea: "Security & Authentication",
        breakdown: "1. User Authentication\n2. WebSocket Setup\n3. Encryption Implementation"
    },
    {
        idea: "Create a recipe recommendation system based on available ingredients",
        depth: 2,
        focusArea: "Algorithm Design",
        breakdown: "1. Ingredient Matching\n2. Recipe Database\n3. Recommendation Engine"
    },
    {
        idea: "Develop a personal finance tracker with budget forecasting",
        depth: 2,
        focusArea: "Data Visualization",
        breakdown: "1. Transaction Management\n2. Budget Categories\n3. Forecast Algorithms"
    },
    {
        idea: "Build a task management system with AI-powered prioritization",
        depth: 3,
        focusArea: "Machine Learning Integration",
        breakdown: "1. Task CRUD Operations\n2. Priority Algorithm\n3. ML Model Integration"
    },
    {
        idea: "Create a collaborative drawing app with real-time updates",
        depth: 2,
        focusArea: "Real-time Synchronization",
        breakdown: "1. Canvas Setup\n2. WebSocket Integration\n3. Drawing Tools"
    }
]

export const mockCurrentQuery: Query = {
    idea: "Build a weather app with location-based alerts and historical data analysis",
    depth: 2,
    focusArea: "API Integration & Data Analysis",
    breakdown: `1. Location Services Setup
        2. Weather API Integration
        3. Historical Data Storage
        4. Alert System Implementation
        5. Data Visualization Dashboard`
}