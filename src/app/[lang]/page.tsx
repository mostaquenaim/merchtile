import ServicesSection from '../_components/ServicesSection'
import ProcessSection from '../_components/ProcessSection'
import FabricShowcase from '../_components/FabricShowcase'
import Testimonials from '../_components/Testimonials'
import CtaSection from '../_components/CtaSection'
import HeroSection from '../_components/HeroSection'
import AboutSection from '../_components/AboutSection'
import ContactSection from '../_components/ContactSection'
import Navbar from '../_components/Navbar'
import Footer from '../_components/Footer'

type Params = Promise<{ lang: string }>

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params

  return (
    <div className="overflow-hidden bg-white">
      <Navbar lang={lang} />
      <HeroSection lang={lang} />
      <ServicesSection lang={lang} />
      <AboutSection lang={lang} />
      <FabricShowcase lang={lang} />
      <ProcessSection lang={lang} />
      <Testimonials lang={lang} />
      <ContactSection lang={lang} />
      <CtaSection lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}
