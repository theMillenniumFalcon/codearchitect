import { Query } from "@/types"

export const mockQueryHistory: Query[] = [
    {
        idea: "Build a real-time chat application with end-to-end encryption",
        depth: 1,
        focusArea: "Security & Real-time Communication",
        breakdown: {
            overview: "A secure messaging platform with real-time capabilities and end-to-end encryption",
            priorities: {
                p0: {
                    frontend: {
                        components: [
                            {
                                name: "ChatInterface",
                                description: "Main chat UI with message history and input",
                                requirements: ["Real-time message updates", "Message encryption/decryption", "Typing indicators"]
                            },
                            {
                                name: "UserAuth",
                                description: "Authentication and user management interface",
                                requirements: ["Login/signup forms", "Profile management", "Session handling"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "MessageService",
                                description: "Handles message encryption and delivery",
                                requirements: ["E2E encryption", "Message persistence", "Real-time delivery"]
                            }
                        ],
                        dataModel: ["User", "Message", "Channel"]
                    }
                },
                p1: {
                    frontend: {
                        components: [
                            {
                                name: "ChannelList",
                                description: "Navigation for different chat channels",
                                requirements: ["Channel creation", "Channel switching", "Unread indicators"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "PresenceService",
                                description: "Manages user online status",
                                requirements: ["Online status tracking", "Last seen updates"]
                            }
                        ],
                        dataModel: ["UserStatus", "ChannelMember"]
                    }
                },
                p2: {
                    frontend: {
                        components: [
                            {
                                name: "MediaSharing",
                                description: "Interface for sharing media files",
                                requirements: ["File upload", "Image preview", "Download management"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "MediaService",
                                description: "Handles media file processing and storage",
                                requirements: ["File encryption", "Thumbnail generation", "Storage management"]
                            }
                        ],
                        dataModel: ["MediaFile", "FileMetadata"]
                    }
                }
            },
            developmentSteps: [
                {
                    phase: "Setup & Authentication",
                    tasks: [
                        "Set up project infrastructure",
                        "Implement user authentication",
                        "Create basic database schema"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Core Messaging",
                    tasks: [
                        "Implement E2E encryption",
                        "Build real-time message delivery",
                        "Create basic chat UI"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Channel Management",
                    tasks: [
                        "Implement channel creation/joining",
                        "Build channel list UI",
                        "Add user presence features"
                    ],
                    priority: "P1"
                }
            ]
        }
    },
    {
        idea: "Create a personal finance tracker with budget categories",
        depth: 1,
        focusArea: "Financial Management",
        breakdown: {
            overview: "A personal finance application for tracking expenses and managing budgets",
            priorities: {
                p0: {
                    frontend: {
                        components: [
                            {
                                name: "TransactionLog",
                                description: "Main transaction list with filtering",
                                requirements: ["Transaction entry", "Category tagging", "Date filtering"]
                            },
                            {
                                name: "BudgetOverview",
                                description: "Budget summary and category breakdown",
                                requirements: ["Category spending", "Budget progress bars", "Monthly overview"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "TransactionService",
                                description: "Manages transaction processing and categorization",
                                requirements: ["Transaction CRUD", "Category management", "Budget calculations"]
                            }
                        ],
                        dataModel: ["Transaction", "Category", "Budget"]
                    }
                },
                p1: {
                    frontend: {
                        components: [
                            {
                                name: "Analytics",
                                description: "Spending analysis and visualizations",
                                requirements: ["Spending trends", "Category breakdown charts", "Budget forecasting"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "AnalyticsService",
                                description: "Processes financial data for insights",
                                requirements: ["Trend analysis", "Category summaries", "Budget projections"]
                            }
                        ],
                        dataModel: ["AnalyticsSummary", "TrendData"]
                    }
                },
                p2: {
                    frontend: {
                        components: [
                            {
                                name: "ExportManager",
                                description: "Data export and reporting interface",
                                requirements: ["CSV export", "PDF reports", "Data backup"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "ReportingService",
                                description: "Generates financial reports and exports",
                                requirements: ["Report generation", "Data formatting", "File creation"]
                            }
                        ],
                        dataModel: ["Report", "ExportJob"]
                    }
                }
            },
            developmentSteps: [
                {
                    phase: "Core Features",
                    tasks: [
                        "Set up transaction management",
                        "Implement category system",
                        "Create basic UI"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Analytics",
                    tasks: [
                        "Implement data analysis",
                        "Create visualization components",
                        "Add trend tracking"
                    ],
                    priority: "P1"
                },
                {
                    phase: "Reporting",
                    tasks: [
                        "Add export functionality",
                        "Create report templates",
                        "Implement backup system"
                    ],
                    priority: "P2"
                }
            ]
        }
    },
    {
        idea: "Develop a task management system with time tracking",
        depth: 1,
        focusArea: "Productivity Tools",
        breakdown: {
            overview: "A comprehensive task management system with built-in time tracking and project organization",
            priorities: {
                p0: {
                    frontend: {
                        components: [
                            {
                                name: "TaskBoard",
                                description: "Kanban-style board for task management",
                                requirements: ["Drag-and-drop interface", "Task cards", "Column customization"]
                            },
                            {
                                name: "TimeTracker",
                                description: "Timer and time logging interface",
                                requirements: ["Start/stop timer", "Manual time entry", "Task duration tracking"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "TaskService",
                                description: "Manages task lifecycle and organization",
                                requirements: ["Task CRUD", "Status management", "Assignment handling"]
                            },
                            {
                                name: "TimeService",
                                description: "Handles time tracking and calculations",
                                requirements: ["Time entry validation", "Duration calculations", "Timer management"]
                            }
                        ],
                        dataModel: ["Task", "TimeEntry", "Project"]
                    }
                },
                p1: {
                    frontend: {
                        components: [
                            {
                                name: "ProjectDashboard",
                                description: "Project overview and metrics",
                                requirements: ["Project progress", "Time summaries", "Team workload"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "ProjectMetricsService",
                                description: "Calculates project statistics and progress",
                                requirements: ["Progress tracking", "Time aggregation", "Performance metrics"]
                            }
                        ],
                        dataModel: ["ProjectMetrics", "TeamMember"]
                    }
                },
                p2: {
                    frontend: {
                        components: [
                            {
                                name: "ReportGenerator",
                                description: "Time and progress reporting interface",
                                requirements: ["Custom report builder", "Export options", "Data visualization"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "ReportingService",
                                description: "Generates time and progress reports",
                                requirements: ["Data aggregation", "Report templates", "Export handling"]
                            }
                        ],
                        dataModel: ["Report", "ReportTemplate"]
                    }
                }
            },
            developmentSteps: [
                {
                    phase: "Task Management",
                    tasks: [
                        "Implement task CRUD operations",
                        "Create Kanban board interface",
                        "Set up project structure"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Time Tracking",
                    tasks: [
                        "Build timer functionality",
                        "Implement time logging",
                        "Create time reports"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Analytics",
                    tasks: [
                        "Implement project metrics",
                        "Create dashboard views",
                        "Add export functionality"
                    ],
                    priority: "P1"
                }
            ]
        }
    },
    {
        idea: "Build an AI-powered recipe recommendation engine",
        depth: 1,
        focusArea: "Machine Learning & Food Tech",
        breakdown: {
            overview: "A smart recipe platform that learns user preferences and dietary requirements to suggest personalized meals",
            priorities: {
                p0: {
                    frontend: {
                        components: [
                            {
                                name: "RecipeExplorer",
                                description: "Main recipe browsing and search interface",
                                requirements: ["Recipe cards", "Search filters", "Dietary preferences"]
                            },
                            {
                                name: "PreferenceManager",
                                description: "User preference and dietary restriction setup",
                                requirements: ["Preference form", "Dietary restrictions", "Allergy settings"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "RecommendationService",
                                description: "AI-powered recipe recommendation engine",
                                requirements: ["Preference matching", "Similarity scoring", "Learning algorithm"]
                            },
                            {
                                name: "RecipeService",
                                description: "Recipe data management and processing",
                                requirements: ["Recipe CRUD", "Ingredient parsing", "Nutrition calculation"]
                            }
                        ],
                        dataModel: ["Recipe", "Ingredient", "UserPreference"]
                    }
                },
                p1: {
                    frontend: {
                        components: [
                            {
                                name: "MealPlanner",
                                description: "Weekly meal planning interface",
                                requirements: ["Calendar view", "Nutritional balance", "Shopping list"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "PlanningService",
                                description: "Manages meal plans and shopping lists",
                                requirements: ["Plan generation", "Nutrition balance", "Ingredient aggregation"]
                            }
                        ],
                        dataModel: ["MealPlan", "ShoppingList"]
                    }
                },
                p2: {
                    frontend: {
                        components: [
                            {
                                name: "CookingMode",
                                description: "Step-by-step cooking interface",
                                requirements: ["Voice control", "Timer integration", "Progress tracking"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "CookingAssistantService",
                                description: "Manages cooking instructions and timing",
                                requirements: ["Step sequencing", "Time management", "Voice processing"]
                            }
                        ],
                        dataModel: ["CookingSession", "RecipeStep"]
                    }
                }
            },
            developmentSteps: [
                {
                    phase: "Core Recipe Platform",
                    tasks: [
                        "Build recipe database",
                        "Implement search functionality",
                        "Create preference system"
                    ],
                    priority: "P0"
                },
                {
                    phase: "AI Implementation",
                    tasks: [
                        "Develop recommendation algorithm",
                        "Train initial model",
                        "Implement feedback loop"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Meal Planning",
                    tasks: [
                        "Create planning interface",
                        "Implement shopping lists",
                        "Add nutrition tracking"
                    ],
                    priority: "P1"
                }
            ]
        }
    },
    {
        idea: "Create a collaborative music production platform",
        depth: 1,
        focusArea: "Audio Processing & Collaboration",
        breakdown: {
            overview: "A web-based music production platform enabling real-time collaboration between musicians and producers",
            priorities: {
                p0: {
                    frontend: {
                        components: [
                            {
                                name: "TrackEditor",
                                description: "Multi-track audio editing interface",
                                requirements: ["Waveform display", "Track controls", "Timeline navigation"]
                            },
                            {
                                name: "MixerPanel",
                                description: "Audio mixing and effects interface",
                                requirements: ["Volume controls", "Effect chains", "Pan controls"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "AudioProcessingService",
                                description: "Handles audio processing and effects",
                                requirements: ["Audio processing", "Effect processing", "Format conversion"]
                            },
                            {
                                name: "CollaborationService",
                                description: "Manages real-time collaboration",
                                requirements: ["Session management", "Change synchronization", "Conflict resolution"]
                            }
                        ],
                        dataModel: ["Project", "AudioTrack", "Effect"]
                    }
                },
                p1: {
                    frontend: {
                        components: [
                            {
                                name: "CollaborationHub",
                                description: "Project sharing and collaboration interface",
                                requirements: ["User invites", "Role management", "Activity feed"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "ProjectSyncService",
                                description: "Handles project synchronization",
                                requirements: ["Version control", "Merge handling", "Backup management"]
                            }
                        ],
                        dataModel: ["Collaboration", "Version", "Comment"]
                    }
                },
                p2: {
                    frontend: {
                        components: [
                            {
                                name: "VirtualInstruments",
                                description: "Software instrument interface",
                                requirements: ["Instrument UI", "MIDI support", "Sound preview"]
                            }
                        ]
                    },
                    backend: {
                        services: [
                            {
                                name: "InstrumentService",
                                description: "Manages virtual instruments and MIDI",
                                requirements: ["MIDI processing", "Sound synthesis", "Instrument library"]
                            }
                        ],
                        dataModel: ["Instrument", "MIDITrack"]
                    }
                }
            },
            developmentSteps: [
                {
                    phase: "Audio Engine",
                    tasks: [
                        "Implement audio processing",
                        "Create track editor",
                        "Build mixing interface"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Collaboration",
                    tasks: [
                        "Set up real-time sync",
                        "Implement version control",
                        "Create collaboration UI"
                    ],
                    priority: "P0"
                },
                {
                    phase: "Virtual Instruments",
                    tasks: [
                        "Implement MIDI support",
                        "Create instrument interfaces",
                        "Add sound synthesis"
                    ],
                    priority: "P2"
                }
            ]
        }
    }
]

export const mockCurrentQuery: Query = {
    idea: "Create a smart home automation dashboard with IoT device integration",
    depth: 1,
    focusArea: "IoT & Home Automation",
    breakdown: {
        overview: "A centralized dashboard for monitoring and controlling smart home devices with automation rules and energy optimization",
        priorities: {
            p0: {
                frontend: {
                    components: [
                        {
                            name: "DeviceDashboard",
                            description: "Main control interface for all connected devices",
                            requirements: ["Device status cards", "Quick controls", "Room-based grouping"]
                        },
                        {
                            name: "AutomationBuilder",
                            description: "Visual interface for creating automation rules",
                            requirements: ["Rule builder", "Condition editor", "Schedule management"]
                        }
                    ]
                },
                backend: {
                    services: [
                    {
                        name: "DeviceService",
                        description: "Manages device connections and state",
                        requirements: ["Device discovery", "State management", "Command routing"]
                    },
                    {
                        name: "AutomationService",
                        description: "Handles automation rule execution",
                        requirements: ["Rule processing", "Event handling", "Schedule execution"]
                    }
                ],
                    dataModel: ["Device", "Room", "AutomationRule"]
                }
            },
            p1: {
                frontend: {
                    components: [
                        {
                            name: "EnergyMonitor",
                            description: "Energy usage visualization and optimization",
                            requirements: ["Usage graphs", "Cost calculator", "Efficiency recommendations"]
                        }
                    ]
                },
                backend: {
                    services: [
                        {
                            name: "AnalyticsService",
                            description: "Processes device usage and energy data",
                            requirements: ["Data aggregation", "Pattern recognition", "Optimization suggestions"]
                        }
                    ],
                    dataModel: ["EnergyUsage", "UsagePattern"]
                }
            },
            p2: {
                frontend: {
                    components: [
                        {
                            name: "SceneManager",
                            description: "Custom scene creation and management",
                            requirements: ["Scene editor", "Trigger settings", "Device coordination"]
                        }
                    ]
                },
                backend: {
                    services: [
                        {
                            name: "SceneService",
                            description: "Manages complex device scenes",
                            requirements: ["Scene coordination", "Multi-device control", "Transition handling"]
                        }
                    ],
                    dataModel: ["Scene", "SceneAction"]
                }
            }
        },
        developmentSteps: [
            {
                phase: "Core Infrastructure",
                tasks: [
                    "Set up device communication protocols",
                    "Create device management system",
                    "Build basic dashboard UI"
                ],
                priority: "P0"
            },
            {
                phase: "Automation System",
                tasks: [
                    "Implement rule engine",
                    "Create automation builder interface",
                    "Set up event processing"
                ],
                priority: "P0"
            },
            {
                phase: "Energy Management",
                tasks: [
                    "Implement energy monitoring",
                    "Create analytics dashboard",
                    "Add optimization features"
                ],
                priority: "P1"
            }
        ]
    }
}