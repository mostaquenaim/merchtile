'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi'
import Image from 'next/image'

const Navbar = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const handleLangChange = () => {
    const newLang = lang === 'en' ? 'bn' : 'en'
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`)
    router.push(newPath)
  }

  const navLinks = [
    { name: { en: 'Home', bn: 'হোম' }, id: 'home' },
    { name: { en: 'Services', bn: 'সেবা' }, id: 'services' },
    { name: { en: 'About', bn: 'আমাদের সম্পর্কে' }, id: 'about' },
    { name: { en: 'Contact', bn: 'যোগাযোগ' }, id: 'contact' },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-dark/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#042c24]"> {/* Force white logo */}
            <Image
              src="/merchtile-Logo.png"
              alt="Merchtile Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-[#042c24]/80 hover:text-[#042c24] transition-colors ${pathname === link.id ? 'font-medium text-[#042c24]' : ''}`}
              >
                {link.name[lang as keyof typeof link.name] || link.name.en}
                {pathname === link.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 top-full mt-1 h-0.5 w-full bg-accent"
                  />
                )}
              </button>
            ))}

            <div className="relative">
              <button onClick={handleLangChange} className="flex items-center gap-1 text-[#042c24]/80 hover:text-[#042c24]">
                <FiGlobe />
                <span>{lang === 'en' ? 'EN' : 'বাংলা'}</span>
              </button>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="bg-[#042c24] hover:bg-[#031f1a] text-white font-bold py-2 px-6 rounded-full transition-all"
            >
              {lang === 'bn' ? 'শুরু করুন' : 'Get Started'}
            </button>
          </div>

          <button
            className="md:hidden text-[#042c24] focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={`#${link.id}`}
                    // onClick={() => scrollTo(link.id)}
                    className={`text-[#042c24]/80 hover:text-[#042c24] transition-colors text-left ${pathname === link.id ? 'font-medium text-[#042c24]' : ''}`}
                  >
                    {link.name[lang as keyof typeof link.name] || link.name.en}
                  </Link>
                ))}

                <div className="pt-4 border-t border-white/10">
                  <p className="text-[#042c24]/60 mb-2">Language</p>
                  <div className="flex gap-2">
                    <Link
                      href="/en"
                      className={`px-3 py-1 rounded-full ${lang === 'en' ? 'bg-accent text-[#042c24]' : 'bg-white/10 text-[#042c24]/80'}`}
                    >
                      English
                    </Link>
                    <Link
                      href="/bn"
                      className={`px-3 py-1 rounded-full ${lang === 'bn' ? 'bg-accent text-[#042c24]' : 'bg-white/10 text-[#042c24]/80'}`}
                    >
                      বাংলা
                    </Link>
                  </div>
                </div>

                <button
                  onClick={() => scrollTo('contact')}
                  className="bg-accent hover:bg-primary text-[#042c24] font-bold py-2 px-6 rounded-full text-center mt-4 transition-all"
                >
                  {lang === 'bn' ? 'শুরু করুন' : 'Get Started'}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar