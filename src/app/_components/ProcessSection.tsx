'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiSend, FiCheckCircle, FiTruck, FiDollarSign } from 'react-icons/fi'

const ProcessSection = ({ lang }: { lang: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = {
    en: {
      title: "Our Simple Process",
      steps: [
        {
          title: "Send Your Order",
          description: "Forward your order details to us with your requirements"
        },
        {
          title: "We Handle Everything",
          description: "From fabric to printing to branding - we manage it all"
        },
        {
          title: "Quality Check & Delivery",
          description: "We ensure top quality and handle delivery to your customer"
        },
        {
          title: "You Get Paid",
          description: "Collect payment from your customer while we handle the rest"
        }
      ]
    },
    bn: {
      title: "আমাদের সহজ প্রক্রিয়া",
      steps: [
        {
          title: "আপনার অর্ডার পাঠান",
          description: "আপনার প্রয়োজনীয়তা সহ আপনার অর্ডার বিবরণ আমাদের কাছে ফরোয়ার্ড করুন"
        },
        {
          title: "আমরা সবকিছু পরিচালনা করি",
          description: "ফ্যাব্রিক থেকে প্রিন্টিং থেকে ব্র্যান্ডিং পর্যন্ত - আমরা সবকিছু পরিচালনা করি"
        },
        {
          title: "গুণমান পরীক্ষা এবং ডেলিভারি",
          description: "আমরা শীর্ষ গুণমান নিশ্চিত করি এবং আপনার গ্রাহকের কাছে ডেলিভারি পরিচালনা করি"
        },
        {
          title: "আপনি অর্থ পাবেন",
          description: "আপনার গ্রাহক থেকে অর্থ সংগ্রহ করুন যখন আমরা বাকি কাজগুলি পরিচালনা করি"
        }
      ]
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  const icons = [FiSend, FiCheckCircle, FiTruck, FiDollarSign]

  return (
    <section ref={ref} className="py-20 bg-dark text-[#042c24]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-accent mb-4">
            {currentContent.title}
          </h2>
          <p className="text-xl text-[#042c24]/70">
            How we make building your brand effortless
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentContent.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-primary/10 p-8 rounded-xl border border-accent/20 hover:border-accent/50 transition-all"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6 mx-auto">
                  <Icon className="text-[#042c24] text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">
                  {step.title}
                </h3>
                <p className="text-[#042c24]/80 text-center">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection