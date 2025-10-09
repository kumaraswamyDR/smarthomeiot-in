"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-[#05081a] text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* ---------- HERO ---------- */}
      <section className="relative text-center py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)]" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10"
        >
          Contact <span className="text-sky-400">SmartHome IoT India</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto"
        >
          Get in touch with our team for product inquiries, installation support, or partnership opportunities.
        </motion.p>
      </section>

      {/* ---------- CONTACT DETAILS ---------- */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: "Our Office",
            desc: "#8, Andrahalli Main Road, Bangalore, India",
            icon: <MapPin size={30} />,
          },
          {
            title: "Call Us",
            desc: "+91 9113013653",
            icon: <Phone size={30} />,
          },
          {
            title: "Email",
            desc: "support@smarthomeiot.in",
            icon: <Mail size={30} />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 border border-sky-500/20 p-8 backdrop-blur-lg shadow-lg hover:shadow-sky-400/30 transition-all"
          >
            <div className="flex justify-center mb-4 text-sky-400">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* ---------- CONTACT FORM ---------- */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-[#0b1124] p-8 shadow-lg border border-sky-500/20 backdrop-blur-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-sky-400">Send Us a Message</h2>

          <form
            action="https://formspree.io/f/mwppzdpn" // replace with your Formspree endpoint or backend API
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-slate-300 text-sm mb-2">Your Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg bg-[#050b1a] border border-sky-500/20 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm mb-2">Your Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg bg-[#050b1a] border border-sky-500/20 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm mb-2">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full rounded-lg bg-[#050b1a] border border-sky-500/20 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 font-semibold text-black shadow-md hover:shadow-sky-500/30 transition"
              type="submit"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </section>

      {/* ---------- CTA BANNER ---------- */}
      <section className="relative py-16 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-600 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stars-pattern.svg')] opacity-10" />
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Let’s Build Your <span className="text-white/90">Smart Future</span> Together
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-white/80 max-w-2xl mx-auto mb-8"
        >
          Reach out for custom automation solutions — tailored to your home or business.
        </motion.p>
        <motion.a
          href="https://wa.me/919113013653"
          whileHover={{ scale: 1.1 }}
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-white/30 transition"
        >
          Chat on WhatsApp
        </motion.a>
      </section>

    </main>
  );
}
