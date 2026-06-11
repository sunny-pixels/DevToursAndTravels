"use client";

import { motion } from "framer-motion";
import { PackageCard } from "@/components/shared/package-card";
import { Input } from "@/components/ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const PACKAGES = [
  { id: "p1", title: "Magical Maldives Honeymoon Escape", destination: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8", price: 1299, duration: 5, rating: 4.9, highlights: ["Overwater Villa", "Snorkeling Tour", "Romantic Dinner"] },
  { id: "p2", title: "Swiss Alps Adventure & Skiing", destination: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99", price: 899, duration: 7, rating: 4.8, highlights: ["Ski Passes", "Cabin Stay", "Mountain Hiking"] },
  { id: "p3", title: "Cultural Tour of Kyoto Temples", destination: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", price: 1599, duration: 10, rating: 5.0, highlights: ["Temple Guides", "Tea Ceremony", "Bullet Train"] },
  { id: "p4", title: "Safari Adventure in Serengeti", destination: "Tanzania", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801", price: 2199, duration: 8, rating: 4.9, highlights: ["Jeep Safari", "Luxury Lodge", "Wildlife Photography"] },
  { id: "p5", title: "Northern Lights Experience", destination: "Iceland", image: "https://images.unsplash.com/photo-1531366936337-77fb5baab436", price: 1899, duration: 6, rating: 4.7, highlights: ["Aurora Tour", "Hot Springs", "Ice Caves"] },
  { id: "p6", title: "Ancient Ruins of Machu Picchu", destination: "Peru", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377", price: 1199, duration: 7, rating: 4.8, highlights: ["Inca Trail", "Local Guides", "Cusco Tour"] },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-slate-900 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Tour Packages</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">Discover our hand-picked packages designed to give you the ultimate travel experience.</p>
        </div>
      </div>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-primary" /> Filters
                  </h3>
                  <button className="text-sm text-slate-500 hover:text-primary">Reset</button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">Destination</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input placeholder="Search destination" className="pl-9 bg-slate-50 border-slate-200" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">Price Range</label>
                    <input type="range" className="w-full accent-primary" />
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>$0</span>
                      <span>$5000+</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">Duration</label>
                    {["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"].map((dur) => (
                      <label key={dur} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                        <span className="text-sm text-slate-600">{dur}</span>
                      </label>
                    ))}
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-600"><span className="font-semibold text-slate-900">{PACKAGES.length}</span> Packages found</p>
                <select className="border border-slate-200 rounded-md text-sm px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PACKAGES.map((pkg, idx) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <PackageCard {...pkg} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
