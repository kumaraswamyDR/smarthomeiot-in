"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { products } from "../data/products";

export default function ProductsPage() {
  return (
    <main className="bg-[#05081a] text-white min-h-screen">
      {/* Page header */}
      <section className="relative text-center py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)]" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 relative z-10"
        >
          Explore Our <span className="text-sky-400">Smart Products</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto"
        >
          Discover our latest range of smart IoT devices designed to make your
          home intelligent, efficient, and secure.
        </motion.p>
      </section>

      {/* Products grid */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className="group rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-500/10 p-[2px] hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300"
          >
            <Link
              href={`/products/${p.slug}`}
              className="block rounded-2xl bg-[#0b1124] p-6 h-full flex flex-col"
            >
              {/* Product image */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
                <Image
                  src={p.image || "https://via.placeholder.com/400x250?text=Smart+Device"}
                  alt={p.title}
                  fill
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* Title + Blurb */}
              <h2 className="text-xl font-semibold mb-2 text-white group-hover:text-sky-400 transition">
                {p.title}
              </h2>
              <p className="text-slate-400 text-sm flex-grow">{p.blurb}</p>

              {/* Button */}
              <motion.span
                whileHover={{ x: 4 }}
                className="inline-block mt-5 text-sky-400 font-semibold text-sm"
              >
                View Details →
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
