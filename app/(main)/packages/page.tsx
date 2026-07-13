"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Route, BedDouble, UserCheck, BadgeCheck, ShieldCheck, Headphones,
  Hotel, Coffee, Bus, Camera, MapPin, MessageCircle,
  Package as PackageIcon, Settings2, CheckCircle2,
  ChevronDown, ArrowRight, Check,
} from "lucide-react";
import { PackageCard } from "@/components/shared/package-card";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/lib/packages-data";

// ─── Static content ─────────────────────────────────────────────────────────

const WHY_CHOOSE_US = [
  { icon: Route,       title: "Expertly Curated Itineraries", desc: "Every route is planned by travel specialists who know the destinations first-hand." },
  { icon: BedDouble,   title: "Comfortable Stays",            desc: "Handpicked hotels and resorts chosen for comfort, location, and value." },
  { icon: UserCheck,   title: "Local Tour Experts",            desc: "Guides who live and breathe the places you're visiting, not just a script." },
  { icon: BadgeCheck,  title: "Best Price Guarantee",           desc: "Transparent pricing with no hidden costs, and the best value for every itinerary." },
  { icon: ShieldCheck, title: "Safe & Secure Travel",           desc: "Vetted operators and partners, so you can travel with complete peace of mind." },
  { icon: Headphones,  title: "24/7 Travel Assistance",         desc: "Our team is reachable around the clock, wherever your journey takes you." },
];

const INCLUDED_ITEMS = [
  { icon: Hotel,          title: "Premium Hotels",          desc: "Carefully selected stays that match the quality of the journey." },
  { icon: Coffee,         title: "Daily Breakfast",         desc: "Start each day right, wherever the trip takes you." },
  { icon: Bus,            title: "Comfortable Transport",   desc: "Private, air-conditioned transfers throughout your trip." },
  { icon: Camera,         title: "Guided Sightseeing",      desc: "Skip the guesswork with expertly guided excursions." },
  { icon: MapPin,         title: "Local Tour Guide",        desc: "On-ground experts sharing the stories behind every stop." },
  { icon: MessageCircle,  title: "Customer Support",        desc: "A dedicated team you can reach before, during, and after your trip." },
];

const EXPERIENCES = [
  { title: "Adventure",          image: PACKAGES[0 % PACKAGES.length]?.image },
  { title: "Family Tours",       image: PACKAGES[1 % PACKAGES.length]?.image },
  { title: "Romantic Getaways",  image: PACKAGES[2 % PACKAGES.length]?.image },
  { title: "Wildlife",           image: PACKAGES[3 % PACKAGES.length]?.image },
  { title: "Spiritual Journeys", image: PACKAGES[4 % PACKAGES.length]?.image },
  { title: "Luxury Escapes",     image: PACKAGES[5 % PACKAGES.length]?.image },
];

const BOOKING_STEPS = [
  { icon: PackageIcon, title: "Choose a Package",     desc: "Browse our curated packages and find the trip that fits you." },
  { icon: MessageCircle, title: "Contact Our Team",   desc: "Reach out and tell us about your travel plans and preferences." },
  { icon: Settings2,   title: "Customize Your Trip",  desc: "We tailor the itinerary, stays, and pace to suit you exactly." },
  { icon: CheckCircle2, title: "Confirm & Travel",    desc: "Lock in your dates, and we handle the rest from there." },
];

const FAQS = [
  { q: "Can I customize my package?", a: "Yes — every package is a starting point. Our team will work with you to adjust the itinerary, stays, and pace to match what you're looking for." },
  { q: "Are flights included?", a: "This varies by package. Flight inclusion is confirmed with our team when you enquire, based on your starting location." },
  { q: "Do you arrange hotels?", a: "Yes, all our packages include handpicked accommodation suited to the destination and trip style." },
  { q: "Is transportation included?", a: "Local transport and transfers during the trip are included as part of your package." },
  { q: "What is your cancellation policy?", a: "Cancellation terms depend on the package and how close to departure you cancel. Our team will share the exact terms when you book." },
  { q: "How do I book?", a: "Reach out via Enquire Now or Contact Us, and our team will guide you through the rest of the process." },
];

// ─── Motion helpers ─────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function PackagesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. Hero ── */}
      <div ref={heroRef} className="relative h-[85vh] min-h-[600px] max-h-[840px] overflow-hidden">
        <motion.img
          src="/packagesPage/hero-img.jpg"
          alt="Travel Packages"
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-blue-300 mb-5"
            >
              Premium Travel Experiences
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Tour Packages
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10"
            >
              Discover our hand-picked packages designed to give you the ultimate
              travel experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToPackages}
                className="h-[52px] px-8 text-base rounded-xl gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                           shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-[1.02]"
              >
                Explore Packages <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-[52px] px-8 text-base rounded-xl bg-white/10 border-white/40 text-white
                             backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── 2. Why Choose Our Packages ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Why Travel With Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Our Packages
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="h-full bg-white/70 backdrop-blur-sm border border-slate-200/70 rounded-3xl p-8
                                shadow-sm shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-100/60
                                hover:-translate-y-1.5 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600
                                  flex items-center justify-center shadow-md shadow-blue-500/25 mb-6">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-6">{item.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Introduction ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-4">About Our Packages</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Journeys Designed Around You, Not a Template
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-8">
                <p>
                  Every itinerary we build starts with a simple idea: travel should feel
                  effortless, not exhausting. From the moment you land to the moment you
                  head home, each detail is planned with care.
                </p>
                <p>
                  Our packages blend iconic sights with quieter, local moments — the kind
                  of experiences that make a trip memorable long after it ends.
                </p>
                <p>
                  Whether it&apos;s a short escape or an extended journey across multiple
                  destinations, we handle the logistics so you can focus on the experience.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[4/5] md:aspect-square">
                  {PACKAGES[0]?.image && (
                    <img
                      src={PACKAGES[0].image}
                      alt="Travel experience"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Floating decorative card */}
                <div className="absolute -bottom-8 -left-6 md:-left-10 bg-white rounded-2xl shadow-xl shadow-slate-300/50
                                border border-slate-100 p-6 space-y-3 max-w-[240px]">
                  {["Trusted by Travelers", "Premium Experiences", "Handpicked Destinations"].map((t) => (
                    <div key={t} className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 shrink-0">
                        <Check className="w-3.5 h-3.5 text-blue-600" />
                      </span>
                      <span className="text-sm font-semibold text-slate-800">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 4. Featured Experiences ── */}
      {/* <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Find Your Kind of Trip</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Experiences
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXPERIENCES.map((exp, i) => (
              <FadeUp key={exp.title} delay={i * 0.05}>
                <div className="group relative h-72 rounded-3xl overflow-hidden cursor-pointer shadow-md shadow-slate-200/50">
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── 5. Package List ── */}
      <section id="packages" className="py-20 md:py-28 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Our Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Explore Our Packages
            </h2>
            <p className="text-slate-500 text-lg">
              Choose from carefully crafted travel experiences designed for unforgettable journeys.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, idx) => (
              <FadeUp key={pkg.id} delay={(idx % 3) * 0.08}>
                <PackageCard {...pkg} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. What's Included ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Every Package Includes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              What&apos;s Included
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED_ITEMS.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <div className="h-full flex items-start gap-4 bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="w-11 h-11 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-6">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. How Booking Works ── */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              How Booking Works
            </h2>
          </FadeUp>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200" />

            {BOOKING_STEPS.map((step, i) => (
              <FadeUp key={step.title} delay={i * 0.1} className="relative text-center flex flex-col items-center">
                <div className="relative z-10 w-14 h-14 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center mb-5 shadow-sm">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1.5">
                  Step {i + 1}
                </span>
                <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-6 max-w-[220px]">{step.desc}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeUp className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Good to Know</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeUp>

          <div className="space-y-3">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeUp key={faq.q} delay={i * 0.04}>
                  <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-semibold text-slate-900">{faq.q}</span>
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-blue-600" />
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-sm text-slate-500 leading-6">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. Final CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <motion.img
          src="/packagesPage/hero-img.jpg"
          alt=""
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.08 }}
          viewport={{ once: true }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Let us help you create unforgettable travel memories with carefully
              planned holiday packages.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="h-14 px-10 text-base rounded-xl gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                           shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/50 transition-all hover:scale-[1.02]"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}