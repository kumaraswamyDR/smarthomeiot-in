"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Lightbulb, Cog, ShieldCheck, Wifi } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const expertise = [
    { title: "Smart Lighting", desc: "Energy-efficient LED automation and ambient lighting control.", icon: Lightbulb },
    { title: "Security Systems", desc: "Surveillance cameras, motion sensors, and smart door locks.", icon: ShieldCheck },
    { title: "IoT Integration", desc: "Seamless integration across Alexa, Google Home, and custom apps.", icon: Wifi },
    { title: "Custom Solutions", desc: "Tailor-made automation for villas, offices, and commercial spaces.", icon: Cog },
  ];

  return (
    <main className="bg-[#05081a] text-white overflow-hidden">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="SmartHome IoT About Banner"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#05081a]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-6xl font-extrabold text-center"
        >
          About <span className="text-sky-400">SmartHome IoT India</span>
        </motion.h1>
      </section>

      {/* ---------- ABOUT CONTENT ---------- */}
      <section className="relative py-20 px-6 max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        >
          At <span className="text-sky-400 font-semibold">SmartHome IoT India</span>, we bring technology and comfort together.
          Our mission is to make your living spaces intelligent, connected, and sustainable — designed to match your lifestyle.
        </motion.p>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/20 p-8 shadow-lg backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-3 text-sky-400">Our Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To empower homes and workplaces across India with cutting-edge IoT
              automation that enhances safety, comfort, and energy efficiency.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 border border-indigo-500/20 p-8 shadow-lg backdrop-blur-lg"
          >
            <h3 className="text-2xl font-bold mb-3 text-purple-400">Our Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              To make smart living accessible, intuitive, and eco-friendly —
              shaping the future of connected homes in India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ---------- OUR EXPERTISE ---------- */}
      <section className="relative bg-[#0b1124] py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,172,255,0.05)_0%,transparent_70%)]" />
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            Our <span className="text-sky-400">Expertise</span>
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-purple-600/10 border border-sky-500/20 p-6 backdrop-blur-lg shadow-lg hover:shadow-sky-400/40 transition-all"
              >
                <div className="flex justify-center mb-3 text-sky-400">
                  <item.icon size={32} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="relative py-20 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-600 text-center">
        <div className="absolute inset-0 bg-[url('/images/stars-pattern.svg')] opacity-10" />
        <div className="relative max-w-4xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let’s Build Your Smart Home Together
          </h3>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Talk to our team and explore how SmartHome IoT India can transform
            your space into a connected, intelligent environment.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-white/30 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      
    </main>
  );
}
