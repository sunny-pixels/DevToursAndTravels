"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star, MapPin, Clock, Check, X, Users, Shield,
  Coffee, Camera, Phone, MessageCircle, Sparkles,
  Sun, Utensils, ChevronRight, CalendarDays, Images,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getPackageById } from "@/lib/packages-data";

// ─── Package data ───────────────────────────────────────────────────────────
const TABS = [
  { id: "overview", label: "Overview" },
  { id: "itinerary", label: "Itinerary" },
  { id: "included", label: "Included / Excluded" },
];

// ─── Component ──────────────────────────────────────────────────────────────
export default function PackageDetailsPage() {
  const params = useParams();
  const [activeTab, setActiveTab] = useState("overview");

  const pkg = getPackageById(params.id as string);

  if (!pkg) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-900">Package not found</h1>
        <p className="text-slate-500">The package you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/packages">
          <Button>← Back to Packages</Button>
        </Link>
      </div>
    );
  }

  const QUICK_STATS = [
    { icon: Clock,   label: "Duration",   value: `${pkg.duration} Days / ${pkg.duration - 1} Nights` },
    { icon: Users,   label: "Group Size", value: pkg.groupSize },
    { icon: Coffee,  label: "Meals",      value: "All Meals Included" },
    { icon: Camera,  label: "Tours",      value: "Guided Tours" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero band ── */}
      <div className="bg-white border-b border-slate-100 pt-24 pb-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-4">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/packages" className="hover:text-primary transition-colors">Packages</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-600 truncate max-w-[200px]">{pkg.title}</span>
          </nav>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary" /> {pkg.destination}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4 text-primary" /> {pkg.duration} Days / {pkg.duration - 1} Nights
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-amber-500">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              {pkg.rating}
              <span className="text-slate-400 font-normal">({pkg.reviews} Reviews)</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
            {pkg.title}
          </h1>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[280px] sm:h-[380px] md:h-[520px] rounded-3xl overflow-hidden relative group">
          {/* Main image */}
          <div className="md:col-span-2 relative overflow-hidden">
            <Image
              src={pkg.images[0]}
              alt={pkg.title}
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Side images */}
          <div className="hidden md:flex flex-col gap-3">
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={pkg.images[1]}
                alt="Gallery 2"
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
            </div>
            <div className="relative flex-1 overflow-hidden">
              <Image
                src={pkg.images[2]}
                alt="Gallery 3"
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.04]"
              />
              {/* View all photos button */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="flex items-center gap-2 bg-white/90 hover:bg-white text-slate-900
                                   font-semibold text-sm px-4 py-2 rounded-xl shadow-lg transition-all hover:scale-105">
                  <Images className="w-4 h-4" /> View All Photos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0 space-y-8">

            {/* Pill tabs */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200",
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-primary/40 hover:text-primary"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* ── Overview tab ── */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Description card */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">
                  <h2 className="text-3xl font-bold text-slate-900 mb-5">Overview</h2>
                  <p className="text-lg text-slate-600 leading-8">{pkg.description}</p>

                  <div className="flex flex-wrap gap-2 mt-7">
                    {pkg.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full
                                   bg-primary/10 text-primary text-sm font-semibold"
                      >
                        <Sparkles className="w-3.5 h-3.5" /> {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick Stats grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {QUICK_STATS.map((stat, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6
                                 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mb-0.5">{stat.label}</p>
                        <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Itinerary tab ── */}
            {activeTab === "itinerary" && (
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Day-by-Day Itinerary</h2>
                <div className="relative space-y-0">
                  {/* vertical line */}
                  <div className="absolute left-[19px] top-5 bottom-5 w-0.5 bg-slate-200" />

                  {pkg.itinerary.map((day, idx) => (
                    <div key={day.day} className={cn("relative flex gap-6", idx !== 0 && "pt-8")}>
                      {/* Day circle */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center
                                      justify-center font-bold text-sm shadow-md shrink-0 border-4 border-slate-50">
                        {day.day}
                      </div>
                      {/* Content card */}
                      <div className="flex-1 bg-slate-50 hover:bg-primary/5 border border-slate-100
                                      rounded-2xl p-5 transition-colors duration-200 mb-1">
                        <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Day {day.day}</p>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">{day.title}</h4>
                        <p className="text-slate-600 leading-relaxed text-sm">{day.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ── Included / Excluded tab ── */}
            {activeTab === "included" && (
              <div className="grid md:grid-cols-2 gap-6">
                {/* Included */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">What&apos;s Included</h2>
                  </div>
                  <ul className="space-y-4">
                    {pkg.included.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        </div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-500" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900">What&apos;s Excluded</h2>
                  </div>
                  <ul className="space-y-4">
                    {pkg.excluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                          <X className="w-3.5 h-3.5 text-red-500" />
                        </div>
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* ── Sidebar ── */}
          <div className="w-full lg:w-[360px] shrink-0 lg:sticky lg:top-32">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-lg overflow-hidden">

              {/* Trip at a Glance */}
              <div className="p-7">
                <h3 className="text-xl font-bold text-slate-900 mb-5">Trip at a Glance</h3>
                <div className="space-y-4">
                  {[
                    { icon: Clock,    label: "Duration",         value: `${pkg.duration} Days / ${pkg.duration - 1} Nights` },
                    { icon: Sun,      label: "Best Time to Visit", value: pkg.bestTime },
                    { icon: Users,    label: "Group Size",       value: pkg.groupSize },
                    { icon: Utensils, label: "Meals",            value: "All Meals Included" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <row.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{row.label}</p>
                        <p className="text-sm font-bold text-slate-900">{row.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-px bg-slate-100 mx-7" />

              {/* Why you'll love it */}
              {/* <div className="p-7">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-4.5 h-4.5 text-primary" /> Why You&apos;ll Love It
                </h3>
                <ul className="space-y-3">
                  {pkg.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              <div className="h-px bg-slate-100 mx-7" />

              {/* CTA */}
              <div className="p-7">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Plan This Trip</h3>
                <p className="text-sm text-slate-500 mb-5">
                  Talk to our expert to customize this package to your dates and group.
                </p>
                <div className="space-y-3">
                  <Button size="lg" className="w-full h-12 text-base rounded-xl gap-2 shadow-md shadow-primary/25
                                               hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-[1.02]">
                    <MessageCircle className="w-4 h-4" /> Enquire Now
                  </Button>
                  <Button size="lg" variant="outline"
                    className="w-full h-12 text-base rounded-xl gap-2 border-slate-200
                               hover:border-primary/40 hover:text-primary transition-all">
                    <Phone className="w-4 h-4" /> Talk to an Expert
                  </Button>
                </div>
                <p className="text-center text-xs text-slate-400 mt-4">
                  No obligation · Completely free consultation
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
