import { Button } from '@/components/ui/button'
import { ArrowDown, Mail, Phone, MapPin, ArrowRight, FileText } from 'lucide-react'
import { useState } from 'react'
import { ResumeViewer } from './resume-viewer'

export function Hero() {
  const [showResume, setShowResume] = useState(false)

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            {/* Profile Image */}
            <div className="mb-12">
              <img 
                src="/images/saransh-profile.png" 
                alt="Saransh Raina - Professional Headshot"
                className="w-48 h-48 rounded-full mx-auto shadow-2xl border-4 border-white object-cover"
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
              SARANSH
              <br />
              <span className="text-blue-600">RAINA</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Finance Student & Data Science Enthusiast building the future of market intelligence
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium"
                onClick={() => setShowResume(true)}
              >
                <FileText className="w-5 h-5 mr-2" />
                View Resume
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-gray-300 px-8 py-4 text-lg font-medium hover:bg-gray-50"
                onClick={() => window.location.href = 'mailto:saranshraina@gmail.com?subject=Let\'s Connect&body=Hi Saransh,%0D%0A%0D%0AI\'d like to connect with you regarding...'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="bg-emerald-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600">Chicago, United States</p>
            </div>
            
            <div className="p-6">
              <div className="bg-amber-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">
                <button 
                  onClick={() => window.location.href = 'mailto:saranshraina@gmail.com?subject=Phone Number Request&body=Hi Saransh,%0D%0A%0D%0ACould you please share your phone number? I\'d like to discuss...%0D%0A%0D%0AThank you!'}
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Available upon request
                </button>
              </p>
            </div>
            
            <div className="p-6">
              <div className="bg-violet-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">
                <a 
                  href="mailto:saranshraina@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  saranshraina@gmail.com
                </a>
              </p>
            </div>
          </div>
          
          <div className="mt-20 text-center animate-bounce">
            <button onClick={() => {
              const aboutSection = document.querySelector('#about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              <ArrowDown className="w-6 h-6 mx-auto text-gray-400 hover:text-gray-600 cursor-pointer" />
            </button>
          </div>
        </div>
      </section>
      
      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />
    </>
  )
}
