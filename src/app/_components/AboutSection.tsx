'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUsers, FiAward, FiGlobe } from 'react-icons/fi'

const AboutSection = ({ lang }: { lang: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "About Merchtile",
      subtitle: "Your Partner in Fashion Brand Development",
      description: "We specialize in helping emerging fashion brands with end-to-end solutions from fabric sourcing to final delivery. Our team of experts ensures quality at every step.",
      stats: [
        { value: "100+", label: "Brands Helped", icon: FiUsers },
        { value: "5+", label: "Years Experience", icon: FiAward },
        { value: "Nationwide", label: "Delivery", icon: FiGlobe }
      ]
    },
    bn: {
      title: "মার্চটাইল সম্পর্কে",
      subtitle: "ফ্যাশন ব্র্যান্ড উন্নয়নে আপনার অংশীদার",
      description: "আমরা উদীয়মান ফ্যাশন ব্র্যান্ডগুলিকে ফ্যাব্রিক সোর্সিং থেকে চূড়ান্ত ডেলিভারি পর্যন্ত এন্ড-টু-এন্ড সমাধান দিয়ে সহায়তা করতে বিশেষজ্ঞ। আমাদের বিশেষজ্ঞদের দল প্রতিটি ধাপে গুণমান নিশ্চিত করে।",
      stats: [
        { value: "১০০+", label: "ব্র্যান্ডকে সাহায্য করা হয়েছে", icon: FiUsers },
        { value: "৫+", label: "বছরের অভিজ্ঞতা", icon: FiAward },
        { value: "সারা দেশে", label: "ডেলিভারি", icon: FiGlobe }
      ]
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  return (
    <section ref={ref} id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-dark/70">
            {currentContent.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <p className="text-lg text-dark/80 mb-8">
              {currentContent.description}
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {currentContent.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-light p-4 rounded-lg text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <Icon className="text-primary text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-dark/70 text-sm">
                      {stat.label}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/merchtile-garments-image.png" 
                alt="Merchtile team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection