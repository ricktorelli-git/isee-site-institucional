import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { FounderSection } from "@/components/founder-section"
import { TechSection } from "@/components/tech-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" role="main">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <FounderSection />
        <TechSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
