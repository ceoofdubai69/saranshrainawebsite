import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Education } from '@/components/education'
import { Interests } from '@/components/interests'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Contact />
    </main>
  )
}
