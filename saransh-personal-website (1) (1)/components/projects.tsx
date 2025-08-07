import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, TrendingUp, Users, Zap, Shield, Brain, Activity } from 'lucide-react'

const projects = [
  {
    title: "MarketFlow",
    subtitle: "Discord-Based Financial Intelligence Platform",
    description: "A comprehensive Discord server dedicated to financial data monitoring and analysis. MarketFlow scans market data in real-time to provide insights and facilitate informed financial discussions within our community.",
    features: [
      "Real-time market data scanning and monitoring",
      "AI-powered market insights and trend analysis", 
      "Congress member trading tracker with dashboard",
      "Slash commands for stock ticker lookups with candlestick charts",
      "Custom alerts for significant market movements",
      "News feed for administered events, tickers, political members, companies",
      "Community-driven discussion channels",
      "AI integration to explain insights for beginners"
    ],
    technologies: ["Go", "Python", "HTML", "React", "TypeScript", "Discord APIs", "Financial APIs"],
    status: "Live",
    type: "Startup Project",
    icon: TrendingUp,
    liveUrl: "https://mf-frontend-production.up.railway.app/",
    disclaimer: "Educational purposes - not investment advice"
  },
  {
    title: "AI Chess Game",
    subtitle: "Intelligent Chess Engine with JavaFX Interface",
    description: "A sophisticated chess game built using Java and JavaFX, featuring an AI opponent with strategic gameplay algorithms and an intuitive graphical user interface.",
    features: [
      "Complete chess game implementation with all rules",
      "AI opponent with strategic decision-making algorithms",
      "Clean JavaFX graphical user interface",
      "Move validation and game state management",
      "Interactive piece movement and selection",
      "Game history and move tracking"
    ],
    technologies: ["Java", "JavaFX", "AI Algorithms", "Game Development"],
    status: "Completed",
    type: "Academic Project",
    icon: Brain,
    downloadUrl: "#", // Will be updated when zip file is provided
    hasScreenshot: true
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions combining finance, technology, and data science to democratize market intelligence
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <Card key={index} className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-600 p-4 rounded-2xl">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </CardTitle>
                        <p className="text-lg text-gray-600 font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge className={project.status === 'Live' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-blue-100 text-blue-800 border-blue-200'}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Screenshot for Chess Game */}
                  {project.hasScreenshot && (
                    <div className="bg-gray-100 rounded-xl p-8 text-center">
                      <img 
                        src="/placeholder.svg?height=400&width=600&text=AI+Chess+Game+Screenshot" 
                        alt="AI Chess Game Screenshot"
                        className="mx-auto rounded-lg shadow-lg max-w-full h-auto cursor-pointer hover:shadow-xl transition-shadow"
                        onClick={() => {
                          if (project.downloadUrl && project.downloadUrl !== '#') {
                            window.open(project.downloadUrl, '_blank');
                          }
                        }}
                      />
                      <p className="text-sm text-gray-500 mt-4">AI Chess Game Interface - Click to download</p>
                    </div>
                  )}
                  
                  {/* MarketFlow Website Preview */}
                  {project.title === "MarketFlow" && (
                    <div className="bg-gray-100 rounded-xl p-8">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-600" />
                        Live Platform Preview
                      </h4>
                      <div className="bg-white rounded-lg p-6 border-2 border-dashed border-gray-300 cursor-pointer hover:border-blue-400 transition-colors"
                           onClick={() => window.open(project.liveUrl, '_blank')}>
                        <div className="text-center">
                          <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <TrendingUp className="w-8 h-8 text-blue-600" />
                          </div>
                          <h5 className="text-lg font-bold text-gray-900 mb-2">MarketFlow Dashboard</h5>
                          <p className="text-gray-600 mb-4">Real-time financial data monitoring and AI-powered insights</p>
                          <p className="text-sm text-blue-600 underline">Click to visit live platform →</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      Key Features
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-2 text-sm font-medium">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {project.disclaimer && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Disclaimer:</strong> {project.disclaimer}. Always do your own research before making investment decisions.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.liveUrl && (
                      <Button 
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </Button>
                    )}
                    {project.downloadUrl && project.downloadUrl !== '#' && (
                      <Button 
                        className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3"
                        onClick={() => window.open(project.downloadUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Download Game
                      </Button>
                    )}
                    <Button 
                      variant="outline" 
                      className="border-gray-300 px-8 py-3 hover:bg-gray-50"
                      onClick={() => window.location.href = `mailto:saranshraina@gmail.com?subject=${project.title} Inquiry&body=Hi Saransh,%0D%0A%0D%0AI'm interested in learning more about ${project.title}...`}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Contact About Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interested in Collaboration?</h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing new projects, investment opportunities, or partnerships in fintech and data science.
              </p>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4"
                onClick={() => window.location.href = 'mailto:saranshraina@gmail.com?subject=Collaboration Opportunity&body=Hi Saransh,%0D%0A%0D%0AI\'d like to discuss...'}
              >
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
