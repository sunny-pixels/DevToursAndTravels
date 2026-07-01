"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Star, Plane, ShieldCheck, Headphones } from "lucide-react";

const SLIDES = [
  { image: "/homePage/hero/mountain.jpg", label: "Mountains", destination: "Himalayan Range, India" },
  { image: "/homePage/hero/beaches.jpg", label: "Beaches", destination: "Bali, Indonesia" },
  { image: "/homePage/hero/culture.jpg", label: "Culture", destination: "Hạ Long Bay, Vietnam" },
  { image: "/homePage/hero/adventure.jpg", label: "Adventure", destination: "Pattaya, Thailand" },
];

const CARDS = [
  { icon: Plane,       title: "200+ Packages",     desc: "Curated tours for every budget and style" },
  { icon: MapPin,      title: "100+ Destinations",  desc: "From beaches to mountains across the globe" },
  { icon: Star,        title: "4.9★ Rated",         desc: "Trusted by 5000+ happy travelers" },
  { icon: ShieldCheck, title: "100% Secure",        desc: "Safe payments & verified guides" },
  { icon: Headphones,  title: "24/7 Support",       desc: "We're with you every step of the way" },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col">

      {/* ── Background slideshow — absolutely positioned, doesn't affect flow ── */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[current].image}
              alt={SLIDES[current].destination}
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={80}
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/30 to-black/85" />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-black/20" />
      </div>

      {/* ── Slide indicators ── */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-30 flex flex-col gap-3">
        {SLIDES.map((s, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="group flex items-center gap-2">
            <span className={`text-xs font-medium transition-all duration-300 hidden xl:block
              ${i === current ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
              {s.label}
            </span>
            <span className={`block rounded-full transition-all duration-300
              ${i === current ? "w-1 h-8 bg-white" : "w-1 h-3 bg-white/40 group-hover:bg-white/70"}`} />
          </button>
        ))}
      </div>

      {/* ── Current destination tag ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`tag-${current}`}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-8 left-6 md:left-12 z-20 hidden md:flex items-center gap-2
                     bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-white text-sm font-medium">{SLIDES[current].destination}</span>
        </motion.div>
      </AnimatePresence>

      {/* ── Main content ── */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center
                      container mx-auto px-4 text-center pt-42 md:pt-36 pb-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20
                     text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-5"
        >
          <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
          Rated #1 Travel Platform in India
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-5 drop-shadow-xl"
        >
          Your Journey <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-blue-400">
            Begins Here
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-white/90 max-w-xl mb-8"
        >
          Handpicked destinations, curated adventures, and unforgettable experiences — crafted just for you.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Link
            href="/packages"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-xl
                       shadow-lg shadow-primary/30 transition-all hover:scale-105 active:scale-95"
          >
            Explore Packages
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold
                       border border-white/30 px-8 py-3 rounded-xl transition-all hover:scale-105 active:scale-95"
          >
            Talk to an Expert
          </Link>
        </motion.div>

        {/* ── Info cards — 2-col on mobile, single row on desktop ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-full grid grid-cols-1 md:grid-cols-5 gap-3"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3
                         flex flex-row md:flex-col items-center md:items-center text-left md:text-center gap-3
                         hover:bg-white/15 transition-colors cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                <card.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">{card.title}</p>
                <p className="text-white/60 text-xs leading-snug mt-1">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
