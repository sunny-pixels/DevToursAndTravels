"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, Users, DollarSign, Shield, ThumbsUp, CreditCard, Headphones, Star } from "lucide-react";
import { DestinationCard } from "@/components/shared/destination-card";
import { PackageCard } from "@/components/shared/package-card";

// Placeholder Data
const POPULAR_DESTINATIONS = [
  { id: "1", name: "Bali", country: "Indonesia", image: "/bali.jpg", rating: 4.9, toursCount: 45 },
  { id: "2", name: "Pattaya", country: "Thailand", image: "/pattaya.jpg", rating: 4.8, toursCount: 32 },
  { id: "3", name: "Vietnam", country: "Vietnam", image: "/vietnam.jpg", rating: 4.9, toursCount: 28 },
];

const FEATURED_PACKAGES = [
  {
    id: "p1",
    title: "Magical Maldives Honeymoon Escape",
    destination: "Maldives",
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
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    price: 1599,
    duration: 10,
    rating: 5.0,
    highlights: ["Temple Guides", "Tea Ceremony", "Bullet Train"],
  },
];

const EXPERIENCES = [
  { name: "Adventure", image: "https://images.unsplash.com/photo-1533692328991-08159ff19fca" },
  { name: "Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
  { name: "Wildlife", image: "https://images.unsplash.com/photo-1516426122078-c23e76319801" },
  { name: "Honeymoon", image: "https://images.unsplash.com/photo-1583204968565-d621b18d2d6c" },
];

const TESTIMONIALS = [
  { name: "Sarah Johnson", location: "New York, USA", text: "VoyageX made our honeymoon absolutely perfect. Every detail was taken care of seamlessly.", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330" },
  { name: "Michael Chen", location: "Toronto, Canada", text: "The best travel platform I've ever used. The curated experiences are genuinely unique and premium.", rating: 5, image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" },
  { name: "Emma Williams", location: "London, UK", text: "Exceptional service and support throughout our entire 2-week European adventure.", rating: 4.9, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg"
          >
            Your Journey <br /> Begins Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 drop-shadow"
          >
            Discover handpicked destinations, curated adventures, and unforgettable travel experiences around the world.
          </motion.p>

          {/* Search Card */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-4 md:p-6 rounded-2xl shadow-2xl max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="flex-1 w-full space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Destination
              </label>
              <Input placeholder="Where to?" className="h-12 border-slate-200" />
            </div>
            <div className="flex-1 w-full space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" /> Date
              </label>
              <Input type="date" className="h-12 border-slate-200" />
            </div>
            <div className="flex-1 w-full space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" /> Travelers
              </label>
              <Input type="number" placeholder="2 Guests" className="h-12 border-slate-200" min={1} />
            </div>
            <div className="flex-1 w-full space-y-2">
              <label className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-primary" /> Budget
              </label>
              <Input type="number" placeholder="$1000" className="h-12 border-slate-200" />
            </div>
            <Button size="lg" className="w-full md:w-auto h-12 px-8">
              <Search className="w-4 h-4 mr-2" /> Explore
            </Button>
          </motion.div> */}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { label: "Travelers", value: "5000+" },
              { label: "Destinations", value: "100+" },
              { label: "Tour Packages", value: "200+" },
              { label: "Average Rating", value: "4.9" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Popular Destinations</h2>
            <p className="text-slate-600">Explore our most booked destinations worldwide, featuring premium accommodations and exclusive experiences.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POPULAR_DESTINATIONS.map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <DestinationCard {...dest} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Featured Packages</h2>
              <p className="text-slate-600">Carefully curated luxury travel packages designed to provide you with the ultimate vacation experience.</p>
            </div>
            <Link href="/packages" className="mt-4 md:mt-0 text-primary font-semibold hover:underline">
              View All Packages
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PACKAGES.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <PackageCard {...pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose VoyageX</h2>
            <p className="text-slate-400">We pride ourselves on delivering premium travel experiences with exceptional service and peace of mind.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Verified Guides", desc: "Expert local guides vetted for quality and knowledge." },
              { icon: CreditCard, title: "Secure Payments", desc: "100% secure payment gateways with fraud protection." },
              { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance anywhere in the world." },
              { icon: ThumbsUp, title: "Best Prices", desc: "Price match guarantee on all luxury packages." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center">Travel Experiences</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img src={exp.image} alt={exp.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-bold tracking-wider">{exp.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-16 text-center">What Our Travelers Say</h2>
          <div className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 snap-x">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm min-w-[300px] md:min-w-[400px] snap-center flex-shrink-0"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'fill-accent' : ''}`} />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 text-lg">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96" alt="Newsletter" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get Travel Updates</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">Subscribe to our newsletter for exclusive deals, latest travel trends, and early access to new packages.</p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <Input type="email" placeholder="Your email address" className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus-visible:ring-white" />
              <Button size="lg" variant="secondary" className="h-12 px-8">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
