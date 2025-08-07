import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const education = [
  {
    degree: "Double Major: Data Science & Business Management",
    focus: "Mathematical Finance Concentration",
    school: "Knox College",
    location: "Galesburg, IL",
    period: "Expected 06/2026",
    type: "undergraduate"
  },
  {
    degree: "High School Diploma",
    school: "Dubai American Academy",
    location: "Dubai, UAE",
    period: "06/2022",
    type: "high-school"
  }
]

const certifications = [
  "Level 3 Neuro-Linguistic Practitioner",
  "NASM Certified Personal Trainer"
]

const achievements = [
  "Dubai American Academy High School Golf Champions (2021, 2022)",
  "Individual Amateur Golf Winner x11",
  "UAE Order Of Merit Champion x1",
  "Knox College NCAA Men's Golf Team Member"
]

export function Education() {
  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Education & Achievements</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 bg-white shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    {edu.focus && (
                      <p className="text-emerald-600 font-medium">{edu.focus}</p>
                    )}
                    <div className="flex items-center gap-2 text-gray-600">
                      <span className="font-medium">{edu.school}</span>
                      <span>• {edu.location}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <Badge variant="outline">{edu.period}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications & Achievements */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-600" />
                Certifications
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700">{cert}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-600" />
                Achievements
              </h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
