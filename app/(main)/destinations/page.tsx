"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DestinationCard } from "@/components/shared/destination-card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const DESTINATIONS = [
  { id: "1", name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4", rating: 4.9, toursCount: 45 },
  { id: "2", name: "Swiss Alps", country: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99", rating: 4.8, toursCount: 32 },
  { id: "3", name: "Santorini", country: "Greece", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e", rating: 4.9, toursCount: 28 },
  { id: "4", name: "Machu Picchu", country: "Peru", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377", rating: 4.9, toursCount: 15 },
  { id: "5", name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a", rating: 4.7, toursCount: 56 },
  { id: "6", name: "Kyoto", country: "Japan", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", rating: 4.8, toursCount: 34 },
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = DESTINATIONS.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
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
            Explore Amazing Destinations
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 max-w-2xl mx-auto"
          >
            Find your next adventure from our carefully curated list of the world's most beautiful locations.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-8 shrink-0">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" /> Filters
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <Input 
                        placeholder="Search destinations..." 
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Region</label>
                    <div className="space-y-2">
                      {["Asia", "Europe", "Americas", "Africa"].map((region) => (
                        <label key={region} className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                          <span className="text-sm text-slate-600">{region}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-slate-600">Showing {filteredDestinations.length} destinations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDestinations.map((dest, idx) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <DestinationCard {...dest} />
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
