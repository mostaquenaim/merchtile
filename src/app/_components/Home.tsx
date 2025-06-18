'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Link from 'next/link';

export default function HomeComp() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pb-20 pt-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <mesh rotation={[45, 0, 45]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color={hovered ? '#FF6B6B' : '#5E60CE'} />
            </mesh>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold sm:text-5xl text-gray-900"
          >
            Tailored Fashion for Rising Brands
          </motion.h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help brands with fabric, printing, branding, and more. Start your own brand with us effortlessly.
          </p>
          <Link href="#contact" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-[#042c24] font-semibold py-3 px-6 rounded-lg transition-all shadow-lg">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our B2B Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Fabric Sourcing', 'Printing & Dyeing', 'Branding & Packaging'].map((service, idx) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">Professional-grade support for your growing brand. Let us do the hard work while you scale up.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Info Section */}
      <section className="bg-white py-16 px-4" id="fabric">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Fabric Specification</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>GSM: 180+</li>
            <li>Material: 100% Cotton</li>
            <li>Fabric Type: Dyed, Single Jersey</li>
          </ul>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Just collect your customer order and forward it to us. Get the advance from the customer, and we will handle everything else: Fabric, Design, Printing, Branding, Delivery, Office, and Employee handling.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-[#042c24] py-16 px-4" id="contact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-4">Want to know more or discuss your brand idea? Call or visit us today!</p>
          <p>📞 +880 1797-954710</p>
          <p>📧 merchtile@gmail.com</p>
          <p>🏢 2nd Floor, 2-G/8, Maa House, Golden Street, Ring Rd, Dhaka 1207</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Merchtile. All rights reserved.</p>
      </footer>
    </div>
  );
}
