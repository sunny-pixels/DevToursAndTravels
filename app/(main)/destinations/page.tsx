"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DestinationCard } from "@/components/shared/destination-card";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

const DESTINATIONS = [
  { id: "1", name: "Rajasthan", country: "India", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41", rating: 4.8, toursCount: 47 },
  { id: "2", name: "Maldives", country: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8", rating: 4.9, toursCount: 26 },
  { id: "3", name: "Uttarakhand", country: "India", image: "https://images.unsplash.com/photo-1626621341169-7a1935ec6533", rating: 4.7, toursCount: 39 },
  { id: "4", name: "Thailand", country: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a", rating: 4.8, toursCount: 58 },
  { id: "5", name: "Uttar Pradesh", country: "India", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523", rating: 4.9, toursCount: 52 },
  { id: "6", name: "Singapore", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd", rating: 4.8, toursCount: 44 },
  { id: "7", name: "Lonavala-Matheran", country: "India", image: "https://images.unsplash.com/photo-1580289142438-5b8f00a89b3b", rating: 4.6, toursCount: 31 },
  { id: "8", name: "Dubai", country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c", rating: 4.9, toursCount: 61 },
  { id: "9", name: "Goa", country: "India", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2", rating: 4.7, toursCount: 62 },
  { id: "10", name: "Lakshadweep", country: "India", image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b", rating: 4.8, toursCount: 18 },
  { id: "11", name: "Ladakh", country: "India", image: "https://images.unsplash.com/photo-1533130061792-64b345e4a833", rating: 4.9, toursCount: 22 },
  { id: "12", name: "Vietnam", country: "Vietnam", image: "https://images.unsplash.com/photo-1528127269322-539801943592", rating: 4.7, toursCount: 35 },
  { id: "13", name: "Darjeeling", country: "India", image: "https://images.unsplash.com/photo-1544634076-a90160ddf22e", rating: 4.6, toursCount: 25 },
  { id: "14", name: "Russia", country: "Russia", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d", rating: 4.7, toursCount: 19 },
  { id: "15", name: "Kerala", country: "India", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944", rating: 4.9, toursCount: 38 },
];

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = DESTINATIONS.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[100vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src="/destinationPage/hero-img.jpg" alt="Destinations" className="w-full h-full object-cover" />
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
            Find your next adventure from our carefully curated list of the worlds most beautiful locations.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            {/* <div className="w-full md:w-64 space-y-8 shrink-0">
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
            </div> */}

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
