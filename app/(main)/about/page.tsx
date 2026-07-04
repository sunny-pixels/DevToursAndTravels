"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass, Eye, ListChecks, Package, MapPin, Plane,
  TrainFront, Car, Building2, Award, HeartHandshake,
  Check, Sparkles, ArrowRight, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ─── Data ────────────────────────────────────────────────────────────────────

interface TimelineItem {
  icon: LucideIcon;
  title: string;
  body?: string;
  list?: string[];
  tags?: string[];
}

const TIMELINE: TimelineItem[] = [
  {
    icon: Compass,
    title: "Our story",
    body: "Founded with a passion for travel and a commitment to customer satisfaction, DevHolidays has grown into a trusted travel partner for individuals, families, couples, groups, and corporate travelers. We have helped thousands of customers create unforgettable memories through carefully planned domestic and international tours, personalized itineraries, and reliable travel services.",
  },
  {
    icon: Eye,
    title: "Our vision",
    body: "Our vision is to become one of the world's most trusted and customer-focused travel companies by delivering world-class experiences, innovative travel solutions, and exceptional service. We aspire to inspire people to explore new destinations with confidence while creating lasting memories through safe, affordable, and hassle-free travel experiences.",
  },
  {
    icon: ListChecks,
    title: "Our mission",
    list: [
      "Provide safe, affordable, and unforgettable travel experiences for every traveler.",
      "Design high-quality domestic and international packages that suit every budget.",
      "Deliver personalized travel planning with dedicated customer support at every stage.",
      "Simplify travel by offering complete end-to-end booking and management solutions.",
      "Build long-lasting relationships through honesty, transparency, and trust.",
      "Promote sustainable and responsible tourism while supporting local communities.",
      "Continuously improve our services by embracing innovation and customer feedback.",
      "Ensure every journey is comfortable, memorable, and stress-free from start to finish.",
    ],
  },
  {
    icon: Package,
    title: "Holiday packages",
    body: "Whether you're planning a relaxing weekend getaway, a romantic honeymoon, a family vacation, an adventurous expedition, or an international holiday, our thoughtfully curated packages are designed to suit every travel style and budget.",
    tags: ["Family", "Honeymoon", "Group Tours", "Adventure", "Luxury", "Budget", "Pilgrimage", "Corporate"],
  },
  {
    icon: MapPin,
    title: "Destination booking",
    body: "Our destination specialists help you discover breathtaking locations across India and around the world. From selecting the perfect destination to planning activities, accommodations, and local experiences, we provide expert guidance.",
    tags: ["Beaches", "Mountains", "Heritage Sites", "Wildlife", "Islands", "City Breaks"],
  },
  {
    icon: Plane,
    title: "Flight booking",
    body: "We provide convenient access to a wide network of domestic and international airlines, helping you find competitive fares, flexible schedules, and the most suitable flight options backed by responsive customer support.",
    tags: ["Round-Trip", "Multi-City", "Group Reservations", "24/7 Support"],
  },
  {
    icon: TrainFront,
    title: "Train ticket assistance",
    body: "For travelers who prefer rail journeys, we offer complete train booking assistance including route planning, seat availability guidance, reservation support, and itinerary management.",
    tags: ["Route Planning", "Group Support", "Journey Management"],
  },
  {
    icon: Car,
    title: "Cab & transportation",
    body: "Enjoy reliable and comfortable transportation with our trusted network of drivers. From airport pickups and local sightseeing to outstation travel and corporate transportation — punctual, safe, and well-maintained vehicles.",
    tags: ["Airport Transfers", "Outstation Cabs", "Chauffeur-Driven", "Corporate Transport"],
  },
  {
    icon: Building2,
    title: "Hotel & accommodation",
    body: "We help you choose accommodations that match your comfort, style, and budget — from luxury hotels and boutique stays to family-friendly properties, honeymoon resorts, and affordable hotels in prime locations.",
    tags: ["Luxury Hotels", "Boutique Stays", "Honeymoon Resorts", "Budget Hotels"],
  },
  {
    icon: Award,
    title: "Why choose DevHolidays",
    list: [
      "Trusted travel experts with years of industry experience.",
      "Safe and reliable travel services through verified partners.",
      "Competitive pricing with the best value for your budget.",
      "Personalized itineraries tailored to your travel preferences.",
      "Wide selection of domestic and international destinations.",
      "Complete travel solutions — flights, hotels, transport, and sightseeing.",
      "Dedicated customer support before, during, and after your trip.",
      "Transparent pricing with no hidden charges or last-minute surprises.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Our commitment",
    body: "At DevHolidays, every journey begins with trust. We are committed to delivering exceptional service, transparent pricing, carefully selected travel partners, and personalized attention to every traveler. From your first inquiry until you safely return home, our team works tirelessly to ensure your experience is comfortable, memorable, and completely worry-free.",
  },
];

const STATS = [
  { number: "10+",  label: "Years Experience" },
  { number: "500+", label: "Tour Packages" },
  { number: "50+",  label: "Countries Covered" },
  { number: "25k+", label: "Happy Travelers" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function TimelineDot({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="timeline-dot relative z-10 flex h-10 w-10 shrink-0 items-center justify-center
                    rounded-full border-2 border-blue-200 bg-white shadow-md md:h-14 md:w-14">
      <div className="absolute inset-0 rounded-full bg-blue-50" />
      <Icon className="relative h-4 w-4 text-blue-600 md:h-5 md:w-5" />
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="timeline-card group rounded-2xl border border-slate-200 bg-white p-6
                    shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg md:p-7">
      <h3 className="mb-3 text-lg font-bold text-slate-900 md:text-xl">{item.title}</h3>
      {item.body && (
        <p className="mb-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">{item.body}</p>
      )}
      {item.list && (
        <ul className="space-y-2.5">
          {item.list.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-slate-600">
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100">
                <Check className="h-2.5 w-2.5 text-blue-600" />
              </div>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {item.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1
                         text-xs font-medium text-blue-600">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative mb-10 grid grid-cols-[2.5rem_1fr] gap-x-4
                    md:mb-14 md:grid-cols-[1fr_3.5rem_1fr] md:gap-x-8">
      <div className="flex justify-center pt-1 md:hidden">
        <TimelineDot icon={item.icon} />
      </div>
      <div className="hidden md:block">{isLeft && <TimelineCard item={item} />}</div>
      <div className="hidden justify-center md:flex"><TimelineDot icon={item.icon} /></div>
      <div>
        <div className="md:hidden"><TimelineCard item={item} /></div>
        <div className="hidden md:block">{!isLeft && <TimelineCard item={item} />}</div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", { opacity: 0, y: 20, duration: 0.8, stagger: 0.15, ease: "power2.out" });
      gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0, y: 40, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 75%", toggleActions: "play none none reverse" },
        });
      });
      gsap.utils.toArray<HTMLElement>(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
          scale: 0, duration: 0.5, ease: "back.out(2)",
          scrollTrigger: { trigger: dot, start: "top 75%", toggleActions: "play none none reverse" },
        });
      });
      if (lineRef.current && timelineRef.current) {
        gsap.fromTo(lineRef.current, { scaleY: 0 }, {
          scaleY: 1, ease: "none",
          scrollTrigger: { trigger: timelineRef.current, start: "top 65%", end: "bottom 75%", scrub: true },
        });
      }
    }, wrapperRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef} className="bg-white text-slate-900">

      {/* ── Hero — white bg with subtle blue tint top ── */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50 to-white pt-24 pb-20 sm:pt-32">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px]
                        -translate-x-1/2 rounded-full bg-blue-100/60 blur-[100px]" />
        <div className="pointer-events-none absolute top-20 right-0 h-[250px] w-[250px]
                        rounded-full bg-sky-100/80 blur-[80px]" />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* Eyebrow */}
          <div className="hero-fade flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200
                             bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600">
              <Sparkles className="h-3.5 w-3.5" /> Our Story
            </span>
          </div>

          {/* Heading */}
          <h1 className="hero-fade mx-auto mt-6 max-w-3xl text-center text-4xl font-extrabold
                         leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Travel is more than
            <br />
            <span className="bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              a destination
            </span>
          </h1>

          <p className="hero-fade mx-auto mt-5 max-w-xl text-center text-base text-slate-500 sm:text-lg">
            We believe travel is about creating unforgettable memories, discovering new cultures,
            and enjoying every moment of the journey — from first inquiry to safe return home.
          </p>

          {/* Stats */}
          <div className="hero-fade mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center
                           shadow-sm transition-all hover:border-blue-200 hover:shadow-md">
                <p className="text-3xl font-extrabold text-blue-600">{s.number}</p>
                <p className="mt-1 text-sm text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="hero-fade mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/packages"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3
                         text-sm font-semibold text-white shadow-md shadow-blue-200
                         transition-all hover:bg-blue-700 hover:scale-[1.02]">
              Explore Packages <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-200
                         bg-white px-6 py-3 text-sm font-semibold text-blue-600
                         shadow-sm transition-all hover:bg-blue-50 hover:scale-[1.02]">
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Who we are ── */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-blue-100 bg-white p-8 shadow-sm sm:p-10 text-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
              Who we are
            </span>
            <p className="mx-auto max-w-2xl text-lg font-semibold leading-relaxed text-slate-800 sm:text-xl">
              A customer-focused travel and tourism company committed to delivering
              high-quality service at competitive prices.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-500">
              Every traveler is different — some seek adventure, others relaxation; some want luxury,
              others value budget-friendly options. That&apos;s why our team researches destinations,
              negotiates the best deals, and builds flexible packages around what you actually want.
              Strong relationships with hotels, airlines, transport providers, and local partners
              let us offer reliable service and exclusive rates you won&apos;t find on your own.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200
                             bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 mb-4">
              <Compass className="h-3.5 w-3.5" /> Our journey
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything that defines{" "}
              <span className="bg-linear-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                DevHolidays
              </span>
            </h2>
          </div>

          {/* Timeline track */}
          <div ref={timelineRef} className="relative">
            <div className="absolute bottom-0 left-5 top-0 z-0 w-0.5 rounded-full
                            bg-slate-200 md:left-1/2 md:-translate-x-1/2" />
            <div ref={lineRef}
              className="absolute left-5 top-0 z-0 h-full w-0.5 origin-top scale-y-0
                         rounded-full bg-linear-to-b from-blue-500 to-sky-400
                         md:left-1/2 md:-translate-x-1/2" />
            {TIMELINE.map((item, index) => (
              <TimelineRow key={item.title} item={item} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-2xl border border-blue-100 bg-linear-to-r
                          from-blue-50 via-sky-50 to-white p-8 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Trusted travel partner
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                  Ready to start your journey?
                </h3>
                <p className="mt-2 max-w-md text-sm text-slate-500">
                  Affordable packages, trusted transportation, handpicked destinations,
                  and support that&apos;s there when you need it.
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-3">
                <Link href="/packages"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3
                             text-sm font-semibold text-white shadow-md shadow-blue-200
                             transition-all hover:bg-blue-700 hover:scale-[1.02]">
                  View Packages <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-200
                             bg-white px-5 py-3 text-sm font-semibold text-blue-600
                             transition-all hover:bg-blue-50 hover:scale-[1.02]">
                  Talk to Expert <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
