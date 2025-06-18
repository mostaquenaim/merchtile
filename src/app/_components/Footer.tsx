import Link from 'next/link'
import { FiFacebook, FiInstagram, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'

const Footer = ({ lang }: { lang: string }) => {
  const content = {
    en: {
      links: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
      ],
      company: 'Company',
      contact: 'Contact Us',
      address: '2nd Floor, 2-G/8, Maa House, Golden Street, Ring Road, Shyamoli, Dhaka-1207, Bangladesh',
      rights: '© 2023 Merchtile. All rights reserved.'
    },
    bn: {
      links: [
        { name: 'হোম', href: '/' },
        { name: 'সেবা', href: '#services' },
        { name: 'আমাদের সম্পর্কে', href: '#about' },
        { name: 'যোগাযোগ', href: '#contact' },
      ],
      company: 'কোম্পানি',
      contact: 'যোগাযোগ করুন',
      address: '২য় তলা, ২-জি/৮, মা হাউস, গোল্ডেন স্ট্রিট, রিং রোড, শ্যামলী, ঢাকা-১২০৭, বাংলাদেশ',
      rights: '© ২০২৩ মার্চটাইল। সর্বস্বত্ব সংরক্ষিত।'
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  return (
    <footer className="bg-dark text-[#042c24] py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-accent">MERCH</span>TILE
            </h3>
            <p className="text-[#042c24]/70 mb-6">
              Tailored Fashion for Rising Brands
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#042c24]/70 hover:text-accent transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-[#042c24]/70 hover:text-accent transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-[#042c24]/70 hover:text-accent transition-colors">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{currentContent.company}</h4>
            <ul className="space-y-3">
              {currentContent.links.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={`/${lang}${link.href}`} 
                    className="text-[#042c24]/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">{currentContent.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#042c24]/70">
                <FiPhone />
                <a href="tel:+8801797954710" className="hover:text-accent transition-colors">
                  +880 1797 954710
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#042c24]/70">
                <FiMail />
                <a href="mailto:merchtile@gmail.com" className="hover:text-accent transition-colors">
                  merchtile@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-[#042c24]/70 mt-4">
                <div className="mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="flex-shrink-0">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>{currentContent.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-[#042c24]/70 mb-4">
              {lang === 'bn' ? 'আমাদের আপডেট পেতে সাবস্ক্রাইব করুন' : 'Subscribe to get our updates'}
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder={lang === 'bn' ? 'আপনার ইমেইল' : 'Your email'} 
                className="bg-white/10 text-[#042c24] px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-accent w-full"
              />
              <button 
                type="submit" 
                className="bg-accent hover:bg-primary text-[#042c24] px-4 py-2 rounded-r-lg transition-colors"
              >
                {lang === 'bn' ? 'পাঠান' : 'Send'}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-[#042c24]/50">
          <p>{currentContent.rights}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer