'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const CtaSection = ({ lang }: { lang: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const router = useRouter()

  const content = {
    en: {
      title: "Ready to Build Your Brand?",
      subtitle: "Forward your order to us and we'll handle the rest",
      cta: "Get Started Now"
    },
    bn: {
      title: "আপনার ব্র্যান্ড তৈরি করতে প্রস্তুত?",
      subtitle: "আপনার অর্ডার আমাদের কাছে ফরোয়ার্ড করুন এবং আমরা বাকি কাজগুলি পরিচালনা করব",
      cta: "এখনই শুরু করুন"
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6">
            {currentContent.title}
          </h2>
          <p className="text-xl mb-8">
            {currentContent.subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push(`/${lang}/#contact`)}
            className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-full flex items-center gap-2 mx-auto transition-all duration-300"
          >
            {currentContent.cta}
              <FiArrowRight className="inline-block" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection