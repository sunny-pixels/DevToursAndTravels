"use client";

import { motion } from "framer-motion";
import { PackageCard } from "@/components/shared/package-card";
import { Input } from "@/components/ui/input";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const PACKAGES = [
  {
    id: "p1",
    title: "Magical Maldives Honeymoon Escape",
    destination: "Maldives",
    description: "Where turquoise lagoons meet private overwater luxury.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
    price: 1299,
    duration: 5,
    rating: 4.9,
    highlights: ["Overwater Villa", "Snorkeling Tour", "Romantic Dinner"],
  },
  {
    id: "p2",
    title: "Swiss Alps Adventure & Skiing",
    destination: "Switzerland",
    description: "Snow-capped peaks, alpine villages, and crisp mountain air.",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
    price: 899,
    duration: 7,
    rating: 4.8,
    highlights: ["Ski Passes", "Cabin Stay", "Mountain Hiking"],
  },
  {
    id: "p3",
    title: "Cultural Tour of Kyoto Temples",
    destination: "Japan",
    description: "Centuries-old temples, zen gardens, and quiet tea ceremonies.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 1599,
    duration: 10,
    rating: 5.0,
    highlights: ["Temple Guides", "Tea Ceremony", "Bullet Train"],
  },
  {
    id: "p4",
    title: "Safari Adventure in Serengeti",
    destination: "Tanzania",
    description: "Golden plains alive with lions, elephants, and the Great Migration.",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801",
    price: 2199,
    duration: 8,
    rating: 4.9,
    highlights: ["Jeep Safari", "Luxury Lodge", "Wildlife Photography"],
  },
  {
    id: "p5",
    title: "Northern Lights Experience",
    destination: "Iceland",
    description: "Dancing auroras over glaciers, geysers, and volcanic landscapes.",
    image: "https://images.unsplash.com/photo-1531366936337-77fb5baab436",
    price: 1899,
    duration: 6,
    rating: 4.7,
    highlights: ["Aurora Tour", "Hot Springs", "Ice Caves"],
  },
  {
    id: "p6",
    title: "Ancient Ruins of Machu Picchu",
    destination: "Peru",
    description: "A lost Incan citadel suspended high above the cloud forest.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    price: 1199,
    duration: 7,
    rating: 4.8,
    highlights: ["Inca Trail", "Local Guides", "Cusco Tour"],
  },
  {
    id: "p7",
    title: "Goa Beach & Nightlife Getaway",
    destination: "India",
    description: "Golden beaches, beach shacks, and laid-back Portuguese charm.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    price: 599,
    duration: 5,
    rating: 4.6,
    highlights: ["Beach Resort", "Water Sports", "Sunset Cruise"],
  },
  {
    id: "p8",
    title: "Royal Jaipur Heritage Tour",
    destination: "India",
    description: "Pink-hued palaces and hilltop forts steeped in Rajasthani royalty.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: 749,
    duration: 4,
    rating: 4.7,
    highlights: ["Amber Fort", "Palace Stay", "City Tour"],
  },
  {
    id: "p9",
    title: "Kerala Backwaters Houseboat Retreat",
    destination: "India",
    description: "Drift through palm-lined canals aboard a traditional houseboat.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    price: 999,
    duration: 6,
    rating: 4.8,
    highlights: ["Houseboat Stay", "Ayurvedic Spa", "Spice Plantation Tour"],
  },
  {
    id: "p10",
    title: "Taj Mahal & Golden Triangle Tour",
    destination: "India",
    description: "Witness the timeless beauty of the Taj Mahal at sunrise.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    price: 899,
    duration: 6,
    rating: 4.9,
    highlights: ["Taj Mahal Sunrise", "Agra Fort", "Local Guide"],
  },
  {
    id: "p11",
    title: "Spiritual Varanasi Ganges Tour",
    destination: "India",
    description: "Ancient ghats and centuries-old rituals along the sacred Ganges.",
    image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca",
    price: 549,
    duration: 3,
    rating: 4.6,
    highlights: ["Ganga Aarti", "Boat Ride", "Old City Walk"],
  },
  {
    id: "p12",
    title: "Ladakh Himalayan Road Trip",
    destination: "India",
    description: "High-altitude lakes and Buddhist monasteries amid stark peaks.",
    image: "https://images.unsplash.com/photo-1626621341169-7a1935ec6533",
    price: 1099,
    duration: 8,
    rating: 4.9,
    highlights: ["Pangong Lake", "Monastery Visit", "Mountain Pass Drive"],
  },
  {
    id: "p13",
    title: "Romantic Udaipur Lake Escape",
    destination: "India",
    description: "Shimmering lakes and palatial architecture in the City of Lakes.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    price: 799,
    duration: 4,
    rating: 4.8,
    highlights: ["Lake Palace View", "Boat Ride", "Heritage Hotel"],
  },
  {
    id: "p14",
    title: "Rishikesh Yoga & Adventure Retreat",
    destination: "India",
    description: "The yoga capital of the world, set against the rushing Ganges.",
    image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5",
    price: 449,
    duration: 4,
    rating: 4.7,
    highlights: ["River Rafting", "Yoga Sessions", "Ganga Aarti"],
  },
  {
    id: "p15",
    title: "Andaman Islands Beach Paradise",
    destination: "India",
    description: "Crystal-clear waters and coral reefs in India's tropical island paradise.",
    image: "https://images.unsplash.com/photo-1586500036706-41963de24d8b",
    price: 1199,
    duration: 6,
    rating: 4.7,
    highlights: ["Scuba Diving", "Island Hopping", "Beach Resort"],
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
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
