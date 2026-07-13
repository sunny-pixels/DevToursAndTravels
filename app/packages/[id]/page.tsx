"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star, MapPin, Clock, Users,
  Camera, Phone, MessageCircle, Sparkles,
  Sun, Utensils, ChevronRight, CalendarDays, Images,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPackageById } from "@/lib/packages-data";

// ─── Component ──────────────────────────────────────────────────────────────
export default function PackageDetailsPage() {
  const params = useParams();

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

  // Combined stat set — previously split across two separate blocks
  // (Quick Stats + Trip at a Glance) with overlapping fields. Now a single list.
  const TRIP_FACTS = [
    { icon: Clock,   label: "Duration",     value: `${pkg.duration} Days / ${pkg.duration - 1} Nights` },
    { icon: Sun,     label: "Best Time",    value: pkg.bestTime },
    { icon: Users,   label: "Group Size",   value: pkg.groupSize },
    { icon: Utensils, label: "Meals",       value: "All Meals Included" },
    { icon: Camera,  label: "Tours",        value: "Guided Tours" },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 overflow-hidden">

      {/* Ambient background glow for depth */}
      <div className="pointer-events-none absolute -top-32 -right-40 w-[560px] h-[560px] rounded-full bg-blue-200/40 blur-[110px]" />
      <div className="pointer-events-none absolute top-[420px] -left-52 w-[480px] h-[480px] rounded-full bg-blue-100/50 blur-[110px]" />

      <div className="relative">

        {/* ── Hero band ── */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-100 pt-24 pb-7">
          <div className="max-w-7xl mx-auto px-4 md:px-8">

            <nav className="flex items-center gap-1.5 text-sm text-slate-400 mb-5">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/packages" className="hover:text-blue-600 transition-colors">Packages</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-slate-600 truncate max-w-[200px]">{pkg.title}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" /> {pkg.destination}
              </span>
              <span className="flex items-center gap-1.5 text-sm font-medium text-slate-600 bg-blue-50 border border-blue-100 rounded-full px-3.5 py-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-blue-600" /> {pkg.duration} Days / {pkg.duration - 1} Nights
              </span>
              <span className="flex items-center gap-1.5 text-sm font-semibold text-amber-600 bg-amber-50 border border-amber-100 rounded-full px-3.5 py-1.5">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {pkg.rating}
                <span className="text-amber-500/70 font-normal">({pkg.reviews})</span>
              </span>
            </div>

            <div className="flex items-start gap-4">
              <span className="hidden sm:block w-1 shrink-0 mt-2 h-12 md:h-14 rounded-full bg-gradient-to-b from-blue-600 to-blue-300" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
                {pkg.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── Gallery ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 h-[280px] sm:h-[380px] md:h-[520px] rounded-[28px] overflow-hidden relative group ring-1 ring-black/5 shadow-xl shadow-slate-200/50">
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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="flex items-center gap-2 bg-white/90 hover:bg-white text-slate-900
                                     font-semibold text-sm px-4 py-2 rounded-xl shadow-lg transition-all hover:scale-105
                                     backdrop-blur-sm">
                    <Images className="w-4 h-4" /> View All Photos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Trip Ticket — Overview, facts, and booking combined into a single component,
             styled like a boarding pass / travel ticket: a description stub on one side,
             a perforated divider, and a facts + booking stub on the other. ── */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
          <div className="relative rounded-[28px] border border-slate-200/70 bg-white shadow-xl shadow-slate-200/50 flex flex-col lg:flex-row">

            {/* Left stub — Overview */}
            <div className="flex-1 min-w-0 p-8 md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-2">Overview</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">About This Trip</h2>
              <p className="text-lg text-slate-600 leading-8">{pkg.description}</p>

              <div className="flex flex-wrap gap-2.5 mt-8">
                {pkg.highlights.map((h, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full
                               bg-blue-50/60 border border-blue-100 text-slate-700 text-sm font-medium
                               hover:bg-blue-50 hover:border-blue-200 transition-colors"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm shrink-0">
                      <Sparkles className="w-3 h-3 text-blue-600" />
                    </span>
                    {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Perforated divider — vertical on desktop */}
            <div className="hidden lg:block relative w-6 shrink-0">
              <div className="absolute inset-y-3 left-1/2 -translate-x-1/2 border-l-2 border-dashed border-slate-200" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-50" />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-slate-50" />
            </div>

            {/* Perforated divider — horizontal on mobile */}
            <div className="lg:hidden relative h-6 mx-8">
              <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-200" />
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50" />
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-slate-50" />
            </div>

            {/* Right stub — Trip facts + booking */}
            <div className="w-full lg:w-[340px] shrink-0 p-8 md:p-10 bg-gradient-to-b from-blue-50/40 to-white
                             rounded-b-[28px] lg:rounded-bl-none lg:rounded-r-[28px]">

              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-5">Trip Facts</h3>

              <div className="space-y-1 mb-6">
                {TRIP_FACTS.map((fact, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 -mx-2 px-2 py-2 rounded-xl hover:bg-white/70 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                      <fact.icon className="w-4.5 h-4.5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">{fact.label}</p>
                      <p className="text-sm font-bold text-slate-900">{fact.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px bg-slate-200/70 mb-6" />

              <h3 className="text-lg font-bold text-slate-900 mb-1">Plan This Trip</h3>
              <p className="text-sm text-slate-500 mb-5">
                Talk to our expert to customize this package to your dates and group.
              </p>
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full h-12 text-base rounded-xl gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                             shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/40
                             transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4" /> Enquire Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full h-12 text-base rounded-xl gap-2 border-slate-200 bg-white
                             hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600 transition-all"
                >
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
  );
}