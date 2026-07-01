"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Star, MapPin, Clock, Check, X, Users, Calendar, Shield, Coffee, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function PackageDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  // In a real app, fetch data based on params.id
  const pkg = {
    title: "Magical Maldives Honeymoon Escape",
    destination: "Maldives",
    price: 1299,
    duration: 5,
    rating: 4.9,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2"
    ],
    overview: "Experience the ultimate romantic getaway in the Maldives. Stay in a luxurious overwater villa, enjoy private dining on the beach, and explore the vibrant coral reefs. This package is designed to provide you with unforgettable memories.",
    included: ["Airport Transfers", "Overwater Villa Stay", "All Meals", "Snorkeling Equipment", "Welcome Spa Session"],
    excluded: ["International Flights", "Personal Expenses", "Travel Insurance"],
    itinerary: [
      { day: 1, title: "Arrival in Paradise", desc: "Arrive at Malé airport and transfer via speedboat to your luxury resort." },
      { day: 2, title: "Snorkeling Adventure", desc: "Guided snorkeling tour of the house reef to see vibrant marine life." },
      { day: 3, title: "Spa & Relaxation", desc: "Enjoy a couples spa session followed by a romantic sunset cruise." },
      { day: 4, title: "Private Beach Dinner", desc: "A special candlelight dinner setup exclusively for you on the beach." },
      { day: 5, title: "Departure", desc: "Speedboat transfer back to the airport for your flight home." }
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-slate-50">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {pkg.destination}</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {pkg.duration} Days</span>
            <span className="flex items-center gap-1 text-accent font-medium">
              <Star className="w-4 h-4 fill-accent" /> {pkg.rating} ({pkg.reviews} Reviews)
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">{pkg.title}</h1>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] md:h-[500px]">
            <div className="md:col-span-2 relative rounded-2xl overflow-hidden h-full">
              <img src={pkg.images[0]} alt="Main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="hidden md:flex flex-col gap-4 h-full">
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <img src={pkg.images[1]} alt="Gallery 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <img src={pkg.images[2]} alt="Gallery 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-8">
            {/* Tabs */}
            <div className="flex overflow-x-auto border-b border-slate-200">
              {["overview", "itinerary", "included"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-4 font-medium capitalize text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab ? "text-primary border-b-2 border-primary" : "text-slate-500 hover:text-slate-900"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
              {activeTab === "overview" && (
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-4">Overview</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{pkg.overview}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-slate-100">
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-semibold text-slate-900">{pkg.duration} Days</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-semibold text-slate-900">Max 12 People</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Camera className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-semibold text-slate-900">Guided Tours</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Coffee className="w-5 h-5 text-primary" />
                      </div>
                      <p className="font-semibold text-slate-900">Meals Included</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "itinerary" && (
                <div>
                  <h3 className="text-2xl font-serif font-bold mb-6">Interactive Itinerary</h3>
                  <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-0.5 before:bg-slate-200">
                    {pkg.itinerary.map((day) => (
                      <div key={day.day} className="relative pl-12">
                        <div className="absolute left-0 top-1 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-md z-10 border-4 border-white">
                          {day.day}
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">{day.title}</h4>
                        <p className="text-slate-600">{day.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "included" && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-secondary" /> Whats Included
                    </h3>
                    <ul className="space-y-3">
                      {pkg.included.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                          <Check className="w-5 h-5 text-secondary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" /> Whats Excluded
                    </h3>
                    <ul className="space-y-3">
                      {pkg.excluded.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                          <X className="w-5 h-5 text-destructive shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="w-full lg:w-96 shrink-0">
            <Card className="sticky top-28 p-6 shadow-xl border-slate-200">
              <div className="mb-6">
                <p className="text-slate-500 text-sm mb-1">Price per person</p>
                <div className="text-3xl font-bold text-primary">${pkg.price}</div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input type="date" className="pl-9 bg-slate-50 border-slate-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Travelers</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input type="number" min={1} defaultValue={2} className="pl-9 bg-slate-50 border-slate-200" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6 pt-6 border-t border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Base Price (x2)</span>
                  <span>${pkg.price * 2}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Taxes & Fees</span>
                  <span>$150</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t border-slate-100">
                  <span>Total</span>
                  <span className="text-primary">${(pkg.price * 2) + 150}</span>
                </div>
              </div>

              <Button size="lg" className="w-full h-12 text-lg">Book Now</Button>
              <p className="text-center text-sm text-slate-500 mt-4">You wont be charged yet</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
