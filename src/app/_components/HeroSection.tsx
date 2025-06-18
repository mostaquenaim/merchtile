'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D } from '@react-three/drei'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const HeroSection = ({ lang }: { lang: string }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [isMounted, setIsMounted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const content = {
        en: {
            title: "Tailored Fashion for Rising Brands",
            subtitle: "B2B service helping brands with fabric, printing & branding",
            cta: "Start Your Brand",
            description: "We handle everything from fabric to delivery so you can focus on growing your brand"
        },
        bn: {
            title: "উদীয়মান ব্র্যান্ডের জন্য উপযোগী ফ্যাশন",
            subtitle: "ফেব্রিক, প্রিন্টিং এবং ব্র্যান্ডিং সহ ব্র্যান্ডগুলিকে সহায়তা করে B2B পরিষেবা",
            cta: "আপনার ব্র্যান্ড শুরু করুন",
            description: "আমরা ফ্যাব্রিক থেকে ডেলিভারি পর্যন্ত সবকিছু পরিচালনা করি যাতে আপনি আপনার ব্র্যান্ড বাড়ানোর দিকে মনোনিবেশ করতে পারেন"
        }
    }

    const handleScrollDown = () => {
        const element = document.getElementById("services");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const currentContent = content[lang as keyof typeof content] || content.en

    return (
        <section
            ref={ref}
            id="home"
            className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary to-dark overflow-hidden"
        >
            <section className="relative h-screen bg-[#042c24]"> {/* Dark green bg */}
                <div className="absolute inset-0 bg-[#042c24]/90 z-10" /> {/* Optional overlay */}
            </section>

            <div className="absolute inset-0 z-0">
                <Canvas>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />
                    <Text3D
                        font="/fonts/helvetiker_regular.typeface.json"
                        size={1}
                        height={0.2}
                        curveSegments={12}
                        bevelEnabled
                        bevelThickness={0.02}
                        bevelSize={0.02}
                        bevelOffset={0}
                        bevelSegments={5}
                        position={[0, 0, -5]}
                    >
                        MERCHTILE
                        {/* <meshStandardMaterial color="#f72585" /> */}
                    </Text3D>
                    <OrbitControls enableZoom={false} autoRotate />
                </Canvas>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl text-center"
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#042e24]">
                        {currentContent.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-black/80">
                        {currentContent.subtitle}
                    </p>
                    <p className="text-lg mb-12 text-black/60">
                        {currentContent.description}
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => router.push(`/${lang}/#contact`)}
                        className="bg-secondary hover:bg-accent font-bold py-4 px-8 rounded-full flex items-center gap-2 mx-auto transition-all duration-300"
                    >
                        {currentContent.cta}
                        <FiArrowRight className="inline-block" />
                    </motion.button>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
            >
                <button className='cursor-pointer' onClick={handleScrollDown}>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="text-[#042c24] h-8 w-8 animate-bounce"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </motion.div>
        </section>
    )
}

export default HeroSection