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

      <footer className="w-full py-4 mt-auto">
        <p className="text-center text-xs blueprint-text opacity-50">
          <a 
            href="https://github.com/themillenniumfalcon/codearchitect" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            Source code
          </a>
        </p>
      </footer>
    </div>
  )
}
