'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiStar } from 'react-icons/fi'

const Testimonials = ({ lang }: { lang: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "What Our Clients Say",
      testimonials: [
        {
          quote: "Merchtile helped us launch our brand with high-quality fabrics and excellent service. Highly recommended!",
          name: "Rahim Fashion",
          role: "Fashion Brand Owner"
        },
        {
          quote: "Their printing quality is unmatched in Dhaka. We've been working with them for 2 years now.",
          name: "Nipun Textiles",
          role: "Textile Business"
        },
        {
          quote: "As a startup, their end-to-end solution was exactly what we needed to focus on marketing.",
          name: "Aarong Boutique",
          role: "Boutique Owner"
        }
      ]
    },
    bn: {
      title: "আমাদের ক্লায়েন্টরা কি বলেন",
      testimonials: [
        {
          quote: "মার্চটাইল আমাদের উচ্চ-গুণমানের ফ্যাব্রিক এবং চমৎকার সেবা দিয়ে আমাদের ব্র্যান্ড চালু করতে সাহায্য করেছে। অত্যন্ত সুপারিশকৃত!",
          name: "রহিম ফ্যাশন",
          role: "ফ্যাশন ব্র্যান্ড মালিক"
        },
        {
          quote: "ঢাকায় তাদের প্রিন্টিং কোয়ালিটি অদ্বিতীয়। আমরা এখন ২ বছর ধরে তাদের সাথে কাজ করছি।",
          name: "নিপুন টেক্সটাইলস",
          role: "টেক্সটাইল ব্যবসা"
        },
        {
          quote: "একটি স্টার্টআপ হিসেবে, তাদের এন্ড-টু-এন্ড সমাধানটি আমাদের বিপণনে ফোকাস করার জন্য ঠিক যা প্রয়োজন ছিল।",
          name: "আড়ং বুটিক",
          role: "বুটিক মালিক"
        }
      ]
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  return (
    <section ref={ref} className="py-20 bg-light">
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
            {lang === 'bn' ? 'আমাদের সেবার গুণমান সম্পর্কে আমাদের ক্লায়েন্টদের মতামত' : 'Our clients feedback about our service quality'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentContent.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-dark/80 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-100 pt-4">
                <h4 className="font-bold text-dark">{testimonial.name}</h4>
                <p className="text-dark/60 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials