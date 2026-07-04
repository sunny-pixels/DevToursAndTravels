"use client";

import { motion } from "framer-motion";
import { PackageCard } from "@/components/shared/package-card";
import { PACKAGES } from "@/lib/packages-data";

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/packagesPage/hero-img.jpg"
          alt="Travel Packages"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Tour Packages
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Discover our hand-picked packages designed to give you the ultimate
            travel experience.
          </p>
        </div>
      </div>

      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            {/* <div className="w-full lg:w-72 shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-primary" />{" "}
                    Filters
                  </h3>
                  <button className="text-sm text-slate-500 hover:text-primary">
                    Reset
                  </button>
                </div>

                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">
                      Destination
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input
                        placeholder="Search destination"
                        className="pl-9 bg-slate-50 border-slate-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">
                      Price Range
                    </label>
                    <input type="range" className="w-full accent-primary" />
                    <div className="flex justify-between text-sm text-slate-500">
                      <span>$0</span>
                      <span>$5000+</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-slate-900">
                      Duration
                    </label>
                    {["1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"].map(
                      (dur) => (
                        <label
                          key={dur}
                          className="flex items-center gap-2 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            className="rounded border-slate-300 text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-slate-600">{dur}</span>
                        </label>
                      ),
                    )}
                  </div>

                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div> */}

            {/* Packages Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                <p className="text-slate-600">
                  <span className="font-semibold text-slate-900">
                    {PACKAGES.length}
                  </span>{" "}
                  Packages found
                </p>
                {/* <select className="border border-slate-200 rounded-md text-sm px-3 py-2 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-primary/50">
                  <option>Sort by: Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Duration: Short to Long</option>
                </select> */}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
