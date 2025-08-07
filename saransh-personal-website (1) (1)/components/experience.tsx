import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Building, Calendar, ExternalLink } from 'lucide-react'

const experiences = [
  {
    title: "Summer Intern",
    company: "Habib Bank A.G. Zurich",
    location: "Dubai, UAE",
    period: "07/2025-09/2025",
    description: "Comprehensive banking internship across multiple departments with focus on priority banking, investments, and relationship management",
    companyUrl: "https://www.habibbank.com/",
    highlights: [
      "Shadowed across various bank departments including Priority Banking, Investments, and Credit Risk/Relationship Management",
      "Managed high-net-worth client accounts for 2 weeks, including approving/rejecting applications and assisting with investments, online banking, and currency exchange",
      "Participated in client meetings and trained directly under experienced relationship managers",
      "Shadowed traders in the Investments Department and assisted with execution of large market orders ranging from 200k to 2.5M AED",
      "Conducted client background checks and business due diligence processes",
      "Created comprehensive UAE economy analysis presentation using Python, covering 10-year fiscal/non-fiscal accounts, oil/non-oil data, M2 data, remittance data, balance of payments, and domestic vs foreign assets relationships"
    ]
  },
  {
    title: "Stockbroking Intern",
    company: "Century Financial",
    location: "Dubai, UAE",
    period: "12/2024-01/2025",
    description: "Investment analysis and trading operations",
    companyUrl: "https://www.centuryfinancial.com/",
    highlights: [
      "Created executive summaries for companies seeking investments",
      "Updated stockbroking and trading guides for company publication",
      "Independently traded stocks including Rigetti, Palantir, and Tesla",
      "Grew crypto portfolio with investments in XRP, Polygon, ETH, and HBAR"
    ]
  },
  {
    title: "Risk Management Intern",
    company: "Bank Muscat",
    location: "Oman",
    period: "07/2024-08/2024",
    description: "Comprehensive risk management across multiple domains",
    companyUrl: "https://www.bankmuscat.com/",
    highlights: [
      "Gained hands-on experience in market and liquidity risks (FX, commodities, interest rates)",
      "Analyzed credit risk for retail and corporate clients",
      "Worked with MUREX trade system and regulatory compliance",
      "Focused on operational risk management, RCSA, KRIs, and anti-fraud policies",
      "Learned data governance and cybersecurity risk management"
    ]
  },
  {
    title: "Audit Intern",
    company: "Deloitte",
    location: "Dubai, UAE",
    period: "07/2023-09/2023",
    description: "Audit methodology and financial analysis",
    companyUrl: "https://www2.deloitte.com/",
    highlights: [
      "Shadowed across Priority Banking department managing high-net-worth clients",
      "Assisted with client investments ranging from 200k to 2.5M AED",
      "Created UAE economy analysis presentation using Python",
      "Analyzed fiscal accounts, oil/non-oil data, M2 data, and balance of payments",
      "Worked with audit systems including JET and Oracle EBS"
    ]
  },
  {
    title: "Off Plan Real Estate Sales Intern",
    company: "Meteora Developers",
    location: "Dubai, UAE",
    period: "06/2023-07/2023",
    description: "Real estate sales and client management",
    highlights: [
      "Supported sales team with administrative assistance",
      "Debriefed investors and potential buyers",
      "Managed customer expectations and sales processes"
    ]
  }
]

export function Experience() {
  return (
    <section className="py-32 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Professional Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow p-6 rounded-lg bg-white">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-600 mt-2">
                      <Building className="w-4 h-4" />
                      {exp.companyUrl ? (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:text-blue-800 underline flex items-center gap-1"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="font-medium">{exp.company}</span>
                      )}
                      <span>• {exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                {exp.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
