"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Wifi, Lightbulb, Smartphone } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={ref}
      className="relative h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
          alt="Smart Home Setup"
          fill
          className="object-cover opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-transparent" />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 text-sky-400 opacity-40"
      >
        <Wifi size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 right-16 text-purple-400 opacity-40"
      >
        <Lightbulb size={40} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-16 text-cyan-400 opacity-40"
      >
        <Smartphone size={40} />
      </motion.div>

      {/* Hero Text */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto"
        >
          Transform Your Home into a{" "}
          <motion.span
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400 bg-[length:200%_200%] text-transparent bg-clip-text"
          >
            Smart Living Space
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-6 text-lg text-slate-200 max-w-2xl mx-auto"
        >
          Smart lighting, security, and energy-efficient automation for modern homes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="mt-8 flex justify-center gap-4 flex-wrap"
        >
          <Link
            href="/products"
            className="rounded-full bg-sky-500 text-white font-semibold px-6 py-3 hover:bg-sky-600 transition shadow-lg hover:shadow-sky-400/50"
          >
            Explore Products
          </Link>
          <a
            href="https://wa.me/919113013653"
            target="_blank"
            className="rounded-full border border-white text-white font-medium px-6 py-3 hover:bg-white/20 transition"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
