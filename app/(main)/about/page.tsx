"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Compass,
  Eye,
  ListChecks,
  Package,
  MapPin,
  Plane,
  TrainFront,
  Car,
  Building2,
  Award,
  HeartHandshake,
  Check,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    body: "Founded with a passion for travel and a commitment to customer satisfaction, DevHolidays has grown into a trusted travel partner for individuals, families, couples, groups, and corporate travelers. Over the years, we have helped thousands of customers create unforgettable memories by offering carefully planned domestic and international tours, personalized itineraries, and reliable travel services. Our dedication to quality, transparency, and exceptional customer care continues to drive us toward delivering seamless travel experiences for every journey.",
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
      "Design high-quality domestic and international packages that suit every budget and travel preference.",
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
    body: "Whether you're planning a relaxing weekend getaway, a romantic honeymoon, a family vacation, an adventurous expedition, or an international holiday, our thoughtfully curated packages are designed to suit every travel style and budget. Every itinerary is carefully planned to provide the perfect balance of sightseeing, comfort, leisure, and unforgettable experiences.",
    tags: [
      "Family",
      "Honeymoon",
      "Group Tours",
      "Adventure",
      "Luxury",
      "Budget",
      "Pilgrimage",
      "Corporate",
    ],
  },
  {
    icon: MapPin,
    title: "Destination booking",
    body: "Our destination specialists help you discover breathtaking locations across India and around the world. From selecting the perfect destination to planning activities, accommodations, and local experiences, we provide expert guidance that ensures every trip matches your interests, travel goals, and budget.",
    tags: [
      "Beaches",
      "Mountains",
      "Heritage Sites",
      "Wildlife",
      "Islands",
      "City Breaks",
    ],
  },
  {
    icon: Plane,
    title: "Flight booking",
    body: "We provide convenient access to a wide network of domestic and international airlines, helping you find competitive fares, flexible schedules, and the most suitable flight options. Whether you're traveling solo, with family, or as a group, we ensure a smooth booking experience backed by responsive customer support.",
    tags: [
      "Round-Trip",
      "Multi-City",
      "Group Reservations",
      "24/7 Support",
    ],
  },
  {
    icon: TrainFront,
    title: "Train ticket assistance",
    body: "For travelers who prefer rail journeys, we offer complete train booking assistance, including route planning, seat availability guidance, reservation support, and itinerary management. Our team ensures a convenient and hassle-free railway travel experience from departure to destination.",
    tags: [
      "Route Planning",
      "Group Support",
      "Journey Management",
    ],
  },
  {
    icon: Car,
    title: "Cab & transportation",
    body: "Enjoy reliable and comfortable transportation with our trusted network of drivers and travel partners. From airport pickups and local sightseeing to outstation travel and corporate transportation, we provide punctual, safe, and well-maintained vehicles tailored to your travel needs.",
    tags: [
      "Airport Transfers",
      "Outstation Cabs",
      "Chauffeur-Driven",
      "Corporate Transport",
    ],
  },
  {
    icon: Building2,
    title: "Hotel & accommodation",
    body: "Finding the right place to stay is an essential part of every journey. We help you choose accommodations that match your comfort, style, and budget, offering everything from luxury hotels and boutique stays to family-friendly properties, honeymoon resorts, and affordable hotels in prime locations.",
    tags: [
      "Luxury Hotels",
      "Boutique Stays",
      "Honeymoon Resorts",
      "Budget Hotels",
    ],
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
      "Complete travel solutions including flights, hotels, transport, and sightseeing.",
      "Dedicated customer support before, during, and after your trip.",
      "Transparent pricing with no hidden charges or last-minute surprises.",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Our commitment",
    body: "At DevHolidays, every journey begins with trust. We are committed to delivering exceptional service, transparent pricing, carefully selected travel partners, and personalized attention to every traveler. From your first inquiry until you safely return home, our team works tirelessly to ensure your travel experience is comfortable, memorable, and completely worry-free.",
  },
];

const STATS = [
  { value: "200+", label: "Curated packages" },
  { value: "100+", label: "Destinations covered" },
  { value: "5,000+", label: "Happy travelers" },
  { value: "24/7", label: "Customer support" },
];

function TimelineDot({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="timeline-dot flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-primary bg-white shadow-md md:h-14 md:w-14 md:border-4">
      <Icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <div className="timeline-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg md:p-7">
      <h3 className="mb-2 font-serif text-lg font-bold text-slate-900 md:text-xl">
        {item.title}
      </h3>
      {item.body && (
        <p className="mb-4 text-sm leading-relaxed text-slate-600 md:text-[15px]">
          {item.body}
        </p>
      )}
      {item.list && (
        <ul className="space-y-2">
          {item.list.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-slate-600"
            >
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
      {item.tags && (
        <div className="mt-2 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
            >
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
    <div className="relative mb-10 grid grid-cols-[2.5rem_1fr] gap-x-4 md:mb-16 md:grid-cols-[1fr_3.5rem_1fr] md:gap-x-8">
      <div className="flex justify-center pt-1 md:hidden">
        <TimelineDot icon={item.icon} />
      </div>

      <div className="hidden md:block">
        {isLeft && <TimelineCard item={item} />}
      </div>

      <div className="hidden justify-center md:flex">
        <TimelineDot icon={item.icon} />
      </div>

      <div>
        <div className="md:hidden">
          <TimelineCard item={item} />
        </div>
        <div className="hidden md:block">
          {!isLeft && <TimelineCard item={item} />}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.utils.toArray<HTMLElement>(".timeline-card").forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".timeline-dot").forEach((dot) => {
        gsap.from(dot, {
          scale: 0,
          duration: 0.5,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: dot,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      if (lineRef.current && timelineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 65%",
              end: "bottom 75%",
              scrub: true,
            },
          },
        );
      }
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapperRef}>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.12),transparent_40%)]" />

        <div className="relative container mx-auto px-5 py-24 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* LEFT SIDE */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-sky-300 mb-6">
                <Sparkles className="w-4 h-4" />
                Our Story
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Travel is more than{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-300 bg-clip-text text-transparent">
                  a destination
                </span>
              </h1>

              <p className="max-w-lg text-base md:text-lg text-slate-300 leading-relaxed mb-8">
                We believe travel is about creating unforgettable memories,
                discovering new cultures, and enjoying every moment of the
                journey.
              </p>

              <div className="space-y-4 text-slate-300">
                <div className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-sky-400 mt-3" />
                  <p>Curated holiday packages crafted by travel experts.</p>
                </div>

                <div className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-sky-400 mt-3" />
                  <p>Trusted by thousands of travelers across the world.</p>
                </div>

                <div className="flex gap-3">
                  <div className="h-2 w-2 rounded-full bg-sky-400 mt-3" />
                  <p>Personalized experiences for every type of traveler.</p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button size="lg">Explore Packages</Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white bg-white/5 hover:bg-white/20 hover:text-white"
                >
                  Contact Us
                </Button>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 w-full">
                {[
                  { number: "10+", label: "Years Experience" },
                  { number: "500+", label: "Tour Packages" },
                  { number: "50+", label: "Countries Covered" },
                  { number: "25k+", label: "Happy Travelers" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="h-40 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 flex flex-col justify-center"
                  >
                    <h3 className="text-4xl font-bold text-sky-400">
                      {item.number}
                    </h3>
                    <p className="text-slate-300 mt-2">{item.label}</p>
                  </div>
                ))}
              </div>

              {/* Blue Card */}
              <div className="mt-8 w-72 bg-gradient-to-r from-sky-500 to-blue-600 rounded-3xl p-6 shadow-2xl text-center">
                <p className="text-sm uppercase tracking-widest text-white/80">
                  Trusted Travel Partner
                </p>

                <h3 className="text-2xl font-bold text-white mt-2">
                  Creating Memories <br />
                  Since 2015
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-slate-900 px-4 pb-16">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center"
            >
              <p className="font-serif text-2xl font-bold text-white md:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-slate-400 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-primary">
            Who we are
          </span>
          <p className="font-serif text-xl leading-relaxed text-slate-800 md:text-2xl">
            A customer-focused travel and tourism company committed to
            delivering high-quality service at competitive prices.
          </p>
          <p className="mt-5 text-slate-600">
            Every traveler is different — some seek adventure, others
            relaxation; some want luxury, others value budget-friendly options.
            Thats why our team researches destinations, negotiates the best
            deals, and builds flexible packages around what you actually want.
            Strong relationships with hotels, airlines, transport providers, and
            local partners let us offer reliable service and exclusive rates you
            wont find on your own.
          </p>
        </div>
      </section>

      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-24">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-wide text-primary">
            Our journey
          </span>
          <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
            Everything that defines DevHolidays
          </h2>
        </div>

        <div ref={timelineRef} className="relative mx-auto max-w-7xl">
          <div className="absolute bottom-0 left-[1.25rem] top-0 w-[2px] rounded-full bg-slate-200 md:left-1/2 md:w-[3px] md:-translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute left-[1.25rem] top-0 h-full w-[2px] origin-top scale-y-0 rounded-full bg-gradient-to-b from-primary to-sky-400 md:left-1/2 md:w-[3px] md:-translate-x-1/2"
          />

          {TIMELINE.map((item, index) => (
            <TimelineRow key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* <section className="bg-slate-900 px-4 py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-primary to-blue-700 px-8 py-12 text-center text-white md:px-16">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
            Travel with confidence
          </h2>
          <p className="mb-8 text-blue-100">
            Affordable packages, trusted transportation, handpicked
            destinations, and support that's there when you need it — let's turn
            your travel dreams into reality.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/packages">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50"
              >
                Explore Packages
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Talk to an Expert
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}
