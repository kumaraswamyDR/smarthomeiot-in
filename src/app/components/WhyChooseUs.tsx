"use client";

import { motion } from "framer-motion";
import { Wrench, Smartphone, Lightbulb, Headphones, Wifi } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Technicians",
      desc: "Experienced automation specialists",
      icon: Wrench,
      gradient: "from-cyan-400 to-sky-500",
    },
    {
      title: "App & Voice Control",
      desc: "Control from anywhere",
      icon: Smartphone,
      gradient: "from-sky-500 to-indigo-500",
    },
    {
      title: "Affordable & Scalable",
      desc: "Start small and expand",
      icon: Lightbulb,
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      title: "Trusted Support",
      desc: "24/7 assistance for all products",
      icon: Headphones,
      gradient: "from-fuchsia-500 to-purple-600",
    },
  ];

  return (
    <section className="relative py-28 text-white bg-gradient-to-b from-[#05081a] via-[#0b1026] to-[#05081a] overflow-hidden bg-dots">
      {/* Center Icon */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="p-3 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 shadow-lg shadow-sky-600/40">
          <Wifi className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16"
      >
        Why Choose <span className="text-sky-400">SmartHome IoT India?</span>
      </motion.h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className={`rounded-2xl bg-gradient-to-br ${item.gradient} p-[2px] shadow-lg shadow-black/20 hover:shadow-sky-400/40 transition-all duration-300`}
          >
            <div className="rounded-2xl bg-[#0b1124] p-6 flex flex-col items-center text-center h-full">
              <div
                className={`mb-3 p-3 rounded-full bg-gradient-to-br ${item.gradient} text-white shadow-md`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-24 max-w-3xl mx-auto bg-gradient-to-r from-sky-500 via-blue-500 to-purple-600 rounded-3xl p-[1px] shadow-lg shadow-cyan-400/30"
      >
        <div className="bg-[#0b1124] rounded-3xl px-8 py-12 text-center">
          <h3 className="text-2xl font-bold mb-3 text-white">
            Ready to Upgrade Your Home?
          </h3>
          <p className="text-slate-300 mb-8 text-sm md:text-base">
            Get a personalized consultation and see how SmartHome IoT can
            transform your lifestyle.
          </p>
          <Link
            href="/contact"
            style={{color:'black'}}
            className="inline-block bg-white text-brand-black font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-white/30 transition"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
