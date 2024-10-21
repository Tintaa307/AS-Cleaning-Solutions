import AboutSection from "@/components/about/About"
import ContactSection from "@/components/contact/Contact"
import Footer from "@/components/footer/Footer"
import HeroSection from "@/components/hero/HeroSection"
import Navbar from "@/components/navbar/Navbar"
import ServicesSection from "@/components/services/Services"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
