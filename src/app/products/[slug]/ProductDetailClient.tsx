"use client";

import { Product } from "@/app/types/Product";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ProductDetailClient({ product }: { product: Product }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const heroImage =
    product.image ||
    `https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80`;

  return (
    <main className="bg-[#05081a] text-white overflow-hidden">
      {/* ---------- HERO ---------- */}
      <section ref={ref} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
          <Image
            src={heroImage}
            alt={product.title}
            fill
            className="object-cover brightness-[0.55]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-[#05081a]" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-white max-w-3xl mx-auto leading-tight drop-shadow-lg"
          >
            {product.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-6 text-slate-200 max-w-2xl mx-auto text-lg"
          >
            {product.blurb}
          </motion.p>
        </div>
      </section>

      {/* ---------- FEATURES ---------- */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Key <span className="text-sky-400">Features</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((f: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-purple-500/10 border border-sky-500/20 p-6 backdrop-blur-md text-center hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
            >
              <div className="text-lg font-semibold mb-2 text-sky-400">{f}</div>
              <p className="text-slate-400 text-sm">
                Smart automation feature enhancing performance and convenience.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative py-20 text-center bg-gradient-to-r from-sky-500 via-blue-500 to-purple-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stars-pattern.svg')] opacity-10" />
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold mb-4"
        >
          Interested in {product.title}?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Get a free consultation or request a live demo for your home or office.
        </motion.p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="/contact"
            className="rounded-full bg-white text-black font-semibold px-8 py-3 hover:bg-slate-100 transition shadow-lg"
          >
            Contact Us
          </Link>
          <a
            href="https://wa.me/919113013653?text=Hi!%20I'm%20interested%20in%20SmartHome%20IoT%20solutions"
            target="_blank"
            className="rounded-full border border-white text-white font-semibold px-8 py-3 hover:bg-white/20 transition"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
