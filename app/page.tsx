import StarField from '@/components/StarField'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import MissionSection from '@/components/MissionSection'
import TeamSection from '@/components/TeamSection'
import ProjectsSection from '@/components/ProjectsSection'
import JoinSection from '@/components/JoinSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cosmic-dark overflow-x-hidden">
      {/* Animated Background */}
      <StarField />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <ProjectsSection />
        <JoinSection />
        <ContactSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}