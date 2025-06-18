'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLayers, FiPrinter, FiTag, FiTruck, FiUsers } from 'react-icons/fi'

const ServicesSection = ({ lang }: { lang: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Our Comprehensive Services",
      subtitle: "Everything you need to build your fashion brand",
      services: [
        {
          title: "Fabric Sourcing",
          description: "Premium quality fabrics with various GSM options"
        },
        {
          title: "Dyeing & Printing",
          description: "Custom colors and patterns to match your brand identity"
        },
        {
          title: "Branding & Labeling",
          description: "Custom tags, labels and packaging for your products"
        },
        {
          title: "Manufacturing",
          description: "Skilled tailoring and quality production"
        },
        {
          title: "Delivery",
          description: "Nationwide delivery to your customers"
        },
        {
          title: "Consultation",
          description: "Expert advice to grow your fashion business"
        }
      ]
    },
    bn: {
      title: "আমাদের ব্যাপক সেবা",
      subtitle: "আপনার ফ্যাশন ব্র্যান্ড তৈরি করতে প্রয়োজনীয় সবকিছু",
      services: [
        {
          title: "ফ্যাব্রিক সোর্সিং",
          description: "বিভিন্ন GSM অপশন সহ প্রিমিয়াম কোয়ালিটি ফ্যাব্রিক"
        },
        {
          title: "ডাইং এবং প্রিন্টিং",
          description: "আপনার ব্র্যান্ড পরিচয় মেলাতে কাস্টম রং এবং প্যাটার্ন"
        },
        {
          title: "ব্র্যান্ডিং এবং লেবেলিং",
          description: "আপনার পণ্যের জন্য কাস্টম ট্যাগ, লেবেল এবং প্যাকেজিং"
        },
        {
          title: "উত্পাদন",
          description: "দক্ষ টেইলরিং এবং মানসম্মত উত্পাদন"
        },
        {
          title: "ডেলিভারি",
          description: "আপনার গ্রাহকদের কাছে দেশব্যাপী ডেলিভারি"
        },
        {
          title: "পরামর্শ",
          description: "আপনার ফ্যাশন ব্যবসা বৃদ্ধির জন্য বিশেষজ্ঞ পরামর্শ"
        }
      ]
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  const icons = [FiLayers, FiPrinter, FiTag, FiUsers, FiTruck, FiUsers]

  return (
    <section ref={ref} id='services' className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentContent.services.map((service, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-6">
                  <Icon className="text-primary text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-dark/70">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection