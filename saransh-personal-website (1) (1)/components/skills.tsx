import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code, TrendingUp, Shield, Users } from 'lucide-react'

const skillCategories = [
  {
    title: "Technical Skills",
    icon: Code,
    skills: ["Python", "R", "SQL", "Excel", "AI Automation", "Data Analysis", "Statistical Forecasting"]
  },
  {
    title: "Financial Expertise",
    icon: TrendingUp,
    skills: ["Financial Modeling", "Quantitative Analysis", "Trading Strategies", "Portfolio Management", "Market Analysis", "Valuations"]
  },
  {
    title: "Risk Management",
    icon: Shield,
    skills: ["Risk Management Frameworks", "Compliance Monitoring", "Credit Risk Analysis", "Market Risk", "Operational Risk", "MUREX System"]
  },
  {
    title: "Soft Skills",
    icon: Users,
    skills: ["Client Relationship Management", "Critical Thinking", "Effective Communication", "Team Collaboration", "Strategic Planning"]
  }
]

const languages = ["English", "Hindi", "Kashmiri", "Arabic", "Russian"]

export function Skills() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            const colors = ['emerald', 'amber', 'violet', 'rose']
            const color = colors[index % colors.length]
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
                <CardHeader className={`bg-${color}-50 p-4`}>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`bg-${color}-100 p-2 rounded-lg`}>
                      <IconComponent className={`w-5 h-5 text-${color}-600`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <Card className="bg-gradient-to-r from-emerald-50 to-violet-50 rounded-lg overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-emerald-50 to-violet-50 p-4">
            <CardTitle className="text-center">Languages</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-wrap justify-center gap-3">
              {languages.map((language, index) => (
                <Badge key={index} className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
                  {language}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
