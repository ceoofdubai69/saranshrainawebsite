'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { X, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null

  const handleDownload = () => {
    // Create a downloadable version
    window.location.href = 'mailto:saranshraina@gmail.com?subject=Resume Request&body=Hi Saransh,%0D%0A%0D%0ACould you please send me a PDF copy of your resume?%0D%0A%0D%0AThank you!'
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Saransh Raina - Resume</h2>
          <div className="flex gap-2">
            <Button onClick={handleDownload} className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="w-4 h-4 mr-2" />
              Request PDF
            </Button>
            <Button variant="outline" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="text-center border-b pb-8">
            <img 
              src="/images/saransh-profile.png" 
              alt="Saransh Raina"
              className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">SARANSH RAINA</h1>
            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Chicago, United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Available upon request</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:saranshraina@gmail.com" className="text-blue-600 hover:underline">
                  saranshraina@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Personal Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Personal Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Highly motivated and fast-learning finance student with hands-on experience in the financial industry, 
                including internships at Deloitte, Bank Muscat, Habib Bank, Meteora Developments, Fox Media Group, and Century Financial. 
                I bring a strong foundation in data science and business management, with a focus on mathematical finance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                I possess advanced computer proficiency and expertise in quantitative analysis, financial modeling, and interpreting 
                large, complex datasets. I'm skilled in Python, R, SQL, and Excel, and have applied these tools to real-time trading 
                strategies across crypto, forex, and equity markets.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My goal is to apply my technical background and finance experience to contribute to private equity, valuations, 
                and wealth or asset management. I strive to deliver data-driven insights that support long-term growth, optimize 
                portfolio performance, and guide strategic investment decisions in fast-paced, high-impact environments.
              </p>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'SQL', 'Excel', 'AI Automation', 'Data Analysis', 'Statistical Forecasting'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Financial Modeling', 'Risk Management', 'Client Relations', 'Critical Thinking', 'Communication'].map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Habib Bank */}
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Summer Intern</h4>
                    <p className="text-blue-600 font-medium">Habib Bank A.G. Zurich, Dubai, UAE</p>
                  </div>
                  <Badge variant="outline">07/2025-09/2025</Badge>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Shadowed across various departments including Priority Banking, Investments, and Credit Risk</li>
                  <li>• Managed high-net-worth client accounts and assisted with investments up to 2.5M AED</li>
                  <li>• Created comprehensive UAE economy analysis using Python</li>
                </ul>
              </div>

              {/* Century Financial */}
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Stockbroking Intern</h4>
                    <p className="text-green-600 font-medium">Century Financial, Dubai, UAE</p>
                  </div>
                  <Badge variant="outline">12/2024-01/2025</Badge>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Created executive summaries for investment-seeking companies</li>
                  <li>• Updated stockbroking guides for company publication</li>
                  <li>• Independently traded stocks and grew crypto portfolio</li>
                </ul>
              </div>

              {/* Bank Muscat */}
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Risk Management Intern</h4>
                    <p className="text-purple-600 font-medium">Bank Muscat, Oman</p>
                  </div>
                  <Badge variant="outline">07/2024-08/2024</Badge>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Gained experience in market and liquidity risks (FX, commodities, interest rates)</li>
                  <li>• Worked with MUREX trade system and regulatory compliance</li>
                  <li>• Focused on operational risk management and anti-fraud policies</li>
                </ul>
              </div>

              {/* Deloitte */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-gray-900">Audit Intern</h4>
                    <p className="text-red-600 font-medium">Deloitte, Dubai, UAE</p>
                  </div>
                  <Badge variant="outline">07/2023-09/2023</Badge>
                </div>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Worked with audit systems including JET and Oracle EBS</li>
                  <li>• Analyzed cybersecurity risks and vulnerabilities</li>
                  <li>• Developed understanding of audit methodology and tools</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-900">Bachelor of Science: Data Science and Business Management</h4>
                <p className="text-blue-600 font-medium">Knox College, Galesburg, IL</p>
                <p className="text-gray-600">Expected: June 2026</p>
                <p className="text-emerald-600 font-medium">Focus: Mathematical Finance</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">High School Diploma</h4>
                <p className="text-blue-600 font-medium">Dubai American Academy, Dubai, UAE</p>
                <p className="text-gray-600">Graduated: June 2022</p>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Kashmiri', 'Arabic', 'Russian'].map((language) => (
                  <Badge key={language} className="bg-emerald-100 text-emerald-800">{language}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Hobbies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Hobbies & Interests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sports & Activities</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Golf (High School Champion 2021, 2022)</li>
                    <li>• Individual Amateur Golf Winner x11</li>
                    <li>• UAE Order Of Merit Champion</li>
                    <li>• Knox College NCAA Men's Golf Team</li>
                    <li>• Amateur Boxing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Professional Interests</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Stockbroking and Cryptocurrency</li>
                    <li>• Real Estate Investment</li>
                    <li>• World Markets Analysis</li>
                    <li>• Event-based Risk Assessment</li>
                    <li>• Financial Inclusion Advocacy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
