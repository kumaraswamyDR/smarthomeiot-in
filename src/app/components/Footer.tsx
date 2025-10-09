"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white bg-gradient-to-r from-brand-dark via-sky-800 to-brand-dark pt-20 pb-10 overflow-hidden">
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute -top-32 right-10 w-96 h-96 bg-brand-primary/20 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 relative z-10">
        <div>
          <h2 className="text-3xl font-bold mb-3 text-brand-accent">SmartHome IoT India</h2>
          <p className="text-sm text-slate-300">
            Empowering homes & offices across India with intelligent automation.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-1 text-slate-300 text-sm">
            <li><Link href="/products" className="hover:text-brand-accent">Products</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-accent">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-brand-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p className="text-sm text-slate-300">#8, Andrahalli Main Road, Bangalore</p>
          <p className="text-sm text-slate-300">📞 +91 9113013653</p>
          <p className="text-sm text-slate-300">📧 support@smarthomeiot.in</p>
          <div className="flex gap-4 mt-4">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full bg-white/10 hover:bg-brand-primary/30 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-white/10 pt-4 text-sm text-slate-400">
        © {new Date().getFullYear()} SmartHome IoT India — All Rights Reserved.
      </div>
    </footer>
  );
}
