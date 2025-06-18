'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import Image from 'next/image'

const FabricShowcase = ({ lang }: { lang: string }) => {
  const [activeTab, setActiveTab] = useState('cotton')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Premium Fabric Solutions",
      subtitle: "High-quality materials for your brand",
      cotton: "100% Cotton",
      polyester: "Polyester Blend",
      wool: "Wool Blend",
      features: [
        "180+ GSM for durability",
        "Single Jersey knitting",
        "Custom dyeing options",
        "Premium finishing"
      ],
      cta: "Request Fabric Samples"
    },
    bn: {
      title: "প্রিমিয়াম ফ্যাব্রিক সমাধান",
      subtitle: "আপনার ব্র্যান্ডের জন্য উচ্চ-গুণমানের উপকরণ",
      cotton: "১০০% সুতি",
      polyester: "পলিয়েস্টার মিশ্রণ",
      wool: "উল মিশ্রণ",
      features: [
        "স্থায়িত্বের জন্য ১৮০+ GSM",
        "সিঙ্গেল জার্সি নিটিং",
        "কাস্টম ডাইং অপশন",
        "প্রিমিয়াম ফিনিশিং"
      ],
      cta: "ফ্যাব্রিক নমুনা অনুরোধ করুন"
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  const fabrics = {
    cotton: {
      image: "/images/merchtile-100-percent-cotton.jpg",
      description: currentContent.cotton
    },
    polyester: {
      image: "/images/merchtile-20-percent-polyster.jpg",
      description: "80% Cotton, 20% Polyester"
    },
  }

  return (
    <section ref={ref} className="py-20 bg-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-dark/70">
            {currentContent.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex gap-4 mb-8">
              {Object.keys(fabrics).map((fabric) => (
                <button
                  key={fabric}
                  onClick={() => setActiveTab(fabric)}
                  className={`px-6 py-3 rounded-full font-medium transition-all ${activeTab === fabric ? 'bg-primary text-[#042c24]' : 'bg-gray-100 text-dark hover:bg-gray-200'}`}
                >
                  {fabrics[fabric as keyof typeof fabrics].description}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-dark">
                {fabrics[activeTab as keyof typeof fabrics].description}
              </h3>
              <ul className="space-y-4">
                {currentContent.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-accent hover:bg-primary text-[#042c24] font-bold py-3 px-6 rounded-full transition-all">
                {currentContent.cta}
              </button>
            </motion.div>
          </div>

          <div className="md:w-1/2">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src={fabrics[activeTab as keyof typeof fabrics].image}
                alt={fabrics[activeTab as keyof typeof fabrics].description}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex items-end p-8">
                <div className="text-[#042c24]">
                  <h3 className="text-2xl font-bold">
                    {fabrics[activeTab as keyof typeof fabrics].description}
                  </h3>
                  <p className="text-[#042c24]/80">180+ GSM | Premium Quality</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FabricShowcase