import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, ArrowRight, Linkedin, FileText } from 'lucide-react'
import { useState } from 'react'
import { ResumeViewer } from './resume-viewer'

export function Contact() {
  const [showResume, setShowResume] = useState(false)

  return (
    <>
      <section className="py-32 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Ready to discuss opportunities in finance, data science, and market intelligence? 
            Let's explore how we can create positive impact together.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="bg-gray-800 border-0 shadow-2xl cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => window.location.href = 'mailto:saranshraina@gmail.com'}>
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm hover:text-white transition-colors">
                  saranshraina@gmail.com
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-0 shadow-2xl cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => window.location.href = 'mailto:saranshraina@gmail.com?subject=Phone Number Request&body=Hi Saransh,%0D%0A%0D%0ACould you please share your phone number? I\'d like to discuss...%0D%0A%0D%0AThank you!'}>
              <CardContent className="p-8 text-center">
                <div className="bg-amber-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 text-sm hover:text-white transition-colors">
                  Available upon email request
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-0 shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="bg-violet-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-sm">Chicago, United States</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-0 shadow-2xl cursor-pointer hover:bg-gray-750 transition-colors"
                  onClick={() => window.open('https://www.linkedin.com/in/saransh-raina-81b91a207/', '_blank')}>
              <CardContent className="p-8 text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                <p className="text-gray-300 text-sm hover:text-white transition-colors">
                  Professional Network
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium"
              onClick={() => window.location.href = 'mailto:saranshraina@gmail.com?subject=Professional Inquiry&body=Hi Saransh,%0D%0A%0D%0AI would like to connect regarding...%0D%0A%0D%0APlease also share your phone number for further discussion.%0D%0A%0D%0AThank you!'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
              onClick={() => window.open('https://www.linkedin.com/in/saransh-raina-81b91a207/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
            <Button 
              size="lg" 
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 text-lg font-medium"
              onClick={() => setShowResume(true)}
            >
              <FileText className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              All links are fully functional and will open in your default applications
            </p>
          </div>
        </div>
      </section>
      
      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  )
}
