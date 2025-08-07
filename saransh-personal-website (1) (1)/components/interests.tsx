import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GuitarIcon as Golf, Zap, TrendingUp, Home, Globe, Shield } from 'lucide-react'

const interests = [
  {
    title: "Golf",
    icon: Golf,
    description: "High school champion and NCAA team member with 11 individual amateur wins",
    color: "bg-green-100 text-green-600"
  },
  {
    title: "Martial Arts",
    icon: Zap,
    description: "Amateur boxer with focus on discipline and physical fitness",
    color: "bg-red-100 text-red-600"
  },
  {
    title: "Trading & Crypto",
    icon: TrendingUp,
    description: "Active in stockbroking and cryptocurrency markets with growing portfolio",
    color: "bg-blue-100 text-blue-600"
  },
  {
    title: "Real Estate",
    icon: Home,
    description: "Interest in property development and off-plan real estate investments",
    color: "bg-purple-100 text-purple-600"
  },
  {
    title: "World Markets",
    icon: Globe,
    description: "Passionate about global financial markets and economic trends",
    color: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "Risk Assessment",
    icon: Shield,
    description: "Event-based risk assessment and financial inclusion advocacy",
    color: "bg-orange-100 text-orange-600"
  }
]

export function Interests() {
  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Hobbies & Interests</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className={`p-4 rounded-lg ${interest.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    {interest.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{interest.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Beyond Professional Success</h3>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                I'm committed to promoting financial inclusion, responsible investing, and the democratization of financial knowledge. 
                I believe that finance, when used ethically and equitably, can be a powerful tool for advancing social mobility, 
                reducing inequality, and empowering underrepresented communities. I aim to be part of that positive change.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
