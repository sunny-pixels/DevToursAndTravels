"use client";

import { motion } from "framer-motion";

export default function CabPage() {
  return (
    <div className="min-h-screen">
              {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800" alt="Destinations" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
           Cab Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            Find your next adventure from our carefully curated list of the worlds most beautiful locations.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
