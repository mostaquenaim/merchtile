'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { useForm } from 'react-hook-form'

const ContactSection = ({ lang }: { lang: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
    // Add your form submission logic here
  }

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "Get in touch to start your brand journey",
      form: {
        name: "Your Name",
        email: "Email Address",
        phone: "Phone Number",
        message: "Your Message",
        submit: "Send Message",
        errors: {
          required: "This field is required",
          email: "Please enter a valid email"
        }
      },
      info: {
        title: "Contact Information",
        address: "2nd Floor, 2-G/8, Maa House, Golden Street, Ring Road, Shyamoli, Dhaka-1207, Bangladesh",
        phone: "+880 1797 954710",
        email: "merchtile@gmail.com"
      }
    },
    bn: {
      title: "যোগাযোগ করুন",
      subtitle: "আপনার ব্র্যান্ড যাত্রা শুরু করতে যোগাযোগ করুন",
      form: {
        name: "আপনার নাম",
        email: "ইমেইল ঠিকানা",
        phone: "ফোন নম্বর",
        message: "আপনার বার্তা",
        submit: "বার্তা পাঠান",
        errors: {
          required: "এই ফিল্ডটি প্রয়োজন",
          email: "একটি বৈধ ইমেইল লিখুন"
        }
      },
      info: {
        title: "যোগাযোগের তথ্য",
        address: "২য় তলা, ২-জি/৮, মা হাউস, গোল্ডেন স্ট্রিট, রিং রোড, শ্যামলী, ঢাকা-১২০৭, বাংলাদেশ",
        phone: "+৮৮০ ১৭৯৭ ৯৫৪৭১০",
        email: "merchtile@gmail.com"
      }
    }
  }

  const currentContent = content[lang as keyof typeof content] || content.en

  return (
    <section ref={ref} id="contact" className="py-20 bg-light">
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

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-dark mb-2">
                  {currentContent.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: currentContent.form.errors.required })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message as string}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-dark mb-2">
                  {currentContent.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: currentContent.form.errors.required,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: currentContent.form.errors.email
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-dark mb-2">
                  {currentContent.form.phone}
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-dark mb-2">
                  {currentContent.form.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  {...register('message')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary hover:bg-accent text-[#042c24] font-bold py-3 px-6 rounded-full transition-colors"
              >
                {currentContent.form.submit}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg h-full">
              <h3 className="text-2xl font-bold text-dark mb-6">
                {currentContent.info.title}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <FiMapPin className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-dark mb-1">
                      {lang === 'bn' ? 'ঠিকানা' : 'Address'}
                    </h4>
                    <p className="text-dark/70">
                      {currentContent.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FiPhone className="text-primary text-xl" />
                  <div>
                    <h4 className="font-bold text-dark mb-1">
                      {lang === 'bn' ? 'ফোন' : 'Phone'}
                    </h4>
                    <p className="text-dark/70">
                      {currentContent.info.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FiMail className="text-primary text-xl" />
                  <div>
                    <h4 className="font-bold text-dark mb-1">
                      {lang === 'bn' ? 'ইমেইল' : 'Email'}
                    </h4>
                    <p className="text-dark/70">
                      {currentContent.info.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.897918203029!2d90.3678743154315!3d23.7509578845892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4e2c6d5f9d%3A0x2e7b5f4a3a5d6b1f!2sShyamoli%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection