import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Card className="p-12 blueprint-card">
            <h1 className="text-3xl font-bold mb-4 blueprint-title">CodeArchitect</h1>
            <p className="blueprint-text mb-8">Get a step-by-step technical blueprint of your ideas!</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
