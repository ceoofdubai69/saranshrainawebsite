import { Card, CardContent } from '@/components/ui/card'
import { Target, TrendingUp, Users, Award } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-32 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging finance and technology to create innovative solutions for market intelligence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            {/* Additional smaller profile image for about section */}
            <div className="lg:hidden mb-8 text-center">
              <img 
                src="/images/saransh-profile.png" 
                alt="Saransh Raina"
                className="w-32 h-32 rounded-full mx-auto shadow-xl border-2 border-white object-cover"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Academic Excellence</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I'm pursuing a double major in Data Science and Business Management with a specialized focus in Mathematical Finance at{' '}
                <a 
                  href="https://www.knox.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Knox College
                </a>
                . This unique combination provides me with both the quantitative rigor and strategic business acumen needed in today's data-driven financial markets.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I possess advanced computer proficiency and expertise in quantitative analysis, financial modeling, and interpreting large, complex datasets. I'm skilled in Python, R, SQL, and Excel, and have applied these tools to develop real-time trading strategies across crypto, forex, and equity markets.
              </p>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Professional Strengths</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My core strengths include analytical thinking, strategic planning, and a deep understanding of market analysis, business operations, and risk management. I'm also an effective communicator, multitasker, and team player with a strong work ethic and organizational skills.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My goal is to apply my technical background and finance experience to contribute to private equity, valuations, and wealth or asset management. I strive to deliver data-driven insights that support long-term growth, optimize portfolio performance, and guide strategic investment decisions in fast-paced, high-impact environments.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Larger profile image for desktop */}
            <div className="hidden lg:block text-center mb-8">
              <img 
                src="/images/saransh-profile.png" 
                alt="Saransh Raina - Professional Portrait"
                className="w-64 h-64 rounded-2xl mx-auto shadow-2xl border-4 border-white object-cover"
              />
              <p className="text-sm text-gray-500 mt-4 italic">Ready to make an impact in finance and technology</p>
            </div>
            
            <div className="grid gap-6">
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-emerald-100 p-3 rounded-xl">
                      <Target className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Mathematical Finance Focus</h4>
                  </div>
                  <p className="text-gray-600">Double major combining quantitative analysis with strategic business management</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-amber-100 p-3 rounded-xl">
                      <TrendingUp className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Real-Time Trading</h4>
                  </div>
                  <p className="text-gray-600">Applied Python, R, SQL expertise to crypto, forex, and equity market strategies</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-violet-100 p-3 rounded-xl">
                      <Users className="w-6 h-6 text-violet-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Strategic Vision</h4>
                  </div>
                  <p className="text-gray-600">Focused on private equity, valuations, and data-driven investment decisions</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
