"use client";

import Link from "next/link";
import {
  Heart, MapPinned, Ticket, Compass,
  Check, ArrowRight, ArrowUpRight, Sparkles,
} from "lucide-react";

type ServiceItem = { name: string };

type ServiceCategory = {
  icon: React.ElementType;
  title: string;
  description: string;
  items: ServiceItem[];
};

const categories: ServiceCategory[] = [
  {
    icon: Heart,
    title: "Trips built around people",
    description:
      "Every group travels differently — we shape the trip around who's coming, not the other way round.",
    items: [
      { name: "Couple trips" },
      { name: "Family trips" },
      { name: "Group travel" },
      { name: "Corporate travel" },
      { name: "Private tours" },
      { name: "Cruises" },
      { name: "Bus trips" },
    ],
  },
  {
    icon: MapPinned,
    title: "Packages, tuned to how you travel",
    description:
      "From a first-time budget itinerary to a fully custom international route, the package matches the traveler.",
    items: [
      { name: "Customised tours package" },
      { name: "Domestic tour package" },
      { name: "Best international tour package" },
      { name: "Adventure tours" },
      { name: "Sightseeing tours" },
      { name: "Budget friendly tour" },
    ],
  },
  {
    icon: Ticket,
    title: "Bookings, handled end to end",
    description:
      "Flights, stays, and tickets booked and confirmed under one roof, so nothing falls between two apps.",
    items: [
      { name: "Hotel booking" },
      { name: "Domestic air tickets" },
      { name: "International air tickets" },
      { name: "Railway ticket booking" },
      { name: "Round trip" },
      { name: "Excursions booking" },
    ],
  },
  {
    icon: Compass,
    title: "Planning and paperwork, sorted",
    description:
      "The parts travelers dread most — itineraries, logistics, and visas — planned out well ahead of departure.",
    items: [
      { name: "Holidays planner" },
      { name: "Complete travel solution" },
      { name: "Visa application" },
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* ── Hero band ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px]
                        -translate-x-1/2 rounded-full bg-blue-100/60 blur-[100px]" />
        <div className="pointer-events-none absolute top-20 right-0 h-[250px] w-[250px]
                        rounded-full bg-sky-100/80 blur-[80px]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          {/* Eyebrow */}
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200
                             bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
              <Sparkles className="h-3.5 w-3.5" /> What we offer
            </span>
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight
                         tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Every journey starts
            <br />
            <span className="bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              with a plan we build with you
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-slate-500 sm:text-lg">
            Twenty-two services, one team. Whether it&apos;s a weekend couple trip or a full
            international itinerary with visas, Dev Holidays plans it end to end.
          </p>
        </div>
      </section>

      {/* ── Category grid ── */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm
                           transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Icon badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl
                                  bg-blue-600 shadow-md shadow-blue-200">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">{category.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2.5 border-t border-slate-100
                               pt-5 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <li key={item.name} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="flex h-4 w-4 shrink-0 items-center justify-center
                                      rounded-full bg-blue-100">
                        <Check className="h-2.5 w-2.5 text-blue-600" />
                      </div>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-2xl border border-blue-100 bg-linear-to-r
                        from-blue-50 via-sky-50 to-white p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Trusted travel partner
              </span>
              <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Not sure which service fits your trip?
              </h3>
              <p className="mt-2 max-w-md text-sm text-slate-500">
                Tell us where you&apos;re headed and we&apos;ll put together
                the right mix — tickets, stays, and everything in between.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3
                           text-sm font-semibold text-white shadow-md shadow-blue-200
                           transition-all hover:bg-blue-700 hover:scale-[1.02]"
              >
                Contact us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200
                           bg-white px-5 py-3 text-sm font-semibold text-blue-600
                           transition-all hover:bg-blue-50 hover:scale-[1.02]"
              >
                View packages <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
