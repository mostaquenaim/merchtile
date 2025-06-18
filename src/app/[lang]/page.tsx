import ServicesSection from '../_components/ServicesSection'
import ProcessSection from '../_components/ProcessSection'
import FabricShowcase from '../_components/FabricShowcase'
import Testimonials from '../_components/Testimonials'
import CtaSection from '../_components/CtaSection'
import HeroSection from '../_components/HeroSection'
import AboutSection from '../_components/AboutSection'
import ContactSection from '../_components/ContactSection'
import { useEffect } from 'react'

interface PageProps {
  params: { lang: string }
}

export default async function Home({ params }: PageProps) {
  // useEffect(() => {
  //   const handleParams = async () => {
  //     const { lang } = await params || 'en'
  //   }
  //   handleParams()
  // }, [])
  const lang = params.lang || 'en' // Access after function begins

  return (
    <main className="overflow-hidden bg-white">
      <HeroSection lang={lang} />
      <ServicesSection lang={lang} />
      <AboutSection lang={lang} />
      <FabricShowcase lang={lang} />
      <ProcessSection lang={lang} />
      <Testimonials lang={lang} />
      <ContactSection lang={lang} />
      <CtaSection lang={lang} />
    </main>
  )
}
