"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { DestinationCard } from "@/components/shared/destination-card";
import { Button } from "@/components/ui/button";

const MotionImage = motion.create(Image);

// ─── Data ───────────────────────────────────────────────────────────────────
// Enriched with the fields the new card design needs (description, best time,
// highlights, reviews). toursCount is kept for backward compatibility with
// anywhere else this array might be used, but isn't shown on the new card.

const DESTINATIONS = [
  { id: "1", name: "Rajasthan", country: "India", image: "/destinationPage/Rajasthan.jpg", rating: 4.8, reviews: 612, toursCount: 47,
    description: "Majestic forts, opulent palaces, and golden desert sands across India's most royal state.",
    bestTime: "Oct – Mar", highlights: ["Desert Safaris", "Royal Forts", "Vibrant Bazaars"] },
  { id: "2", name: "Maldives", country: "Maldives", image: "/destinationPage/maldives.jpg", rating: 4.9, reviews: 480, toursCount: 26,
    description: "Overwater villas and turquoise lagoons for the ultimate tropical escape.",
    bestTime: "Nov – Apr", highlights: ["Overwater Villas", "Coral Reefs", "Private Islands"] },
  { id: "3", name: "Uttarakhand", country: "India", image: "/destinationPage/uttarakhand.jpg", rating: 4.7, reviews: 355, toursCount: 39,
    description: "Snow-capped peaks, sacred rivers, and quiet Himalayan hill towns.",
    bestTime: "Mar – Jun", highlights: ["Himalayan Treks", "Ganga Aarti", "Hill Stations"] },
  { id: "4", name: "Thailand", country: "Thailand", image: "/destinationPage/thailand.jpg", rating: 4.8, reviews: 701, toursCount: 58,
    description: "Golden temples, island beaches, and street food that never disappoints.",
    bestTime: "Nov – Feb", highlights: ["Island Hopping", "Ancient Temples", "Night Markets"] },
  { id: "5", name: "Uttar Pradesh", country: "India", image: "/destinationPage/uttarpradesh.jpg", rating: 4.9, reviews: 588, toursCount: 52,
    description: "Home to the Taj Mahal and the timeless ghats of Varanasi.",
    bestTime: "Oct – Mar", highlights: ["Taj Mahal", "Varanasi Ghats", "Mughal Heritage"] },
  { id: "6", name: "Singapore", country: "Singapore", image: "/destinationPage/singapore.jpg", rating: 4.8, reviews: 522, toursCount: 44,
    description: "A gleaming city of gardens, skyline views, and world-class cuisine.",
    bestTime: "Feb – Apr", highlights: ["Gardens by the Bay", "Sentosa Island", "Skyline Views"] },
  { id: "7", name: "Lonavala-Matheran", country: "India", image: "/destinationPage/matheran.jpg", rating: 4.6, reviews: 289, toursCount: 31,
    description: "Misty hill stations and green valleys, just a short escape from the city.",
    bestTime: "Jun – Sep", highlights: ["Monsoon Valleys", "Toy Train", "Viewpoints"] },
  { id: "8", name: "Dubai", country: "UAE", image: "/destinationPage/dubai.jpg", rating: 4.9, reviews: 745, toursCount: 61,
    description: "Soaring skyscrapers, desert dunes, and unmatched luxury.",
    bestTime: "Nov – Mar", highlights: ["Desert Safari", "Burj Khalifa", "Luxury Shopping"] },
  { id: "9", name: "Goa", country: "India", image: "/destinationPage/goa.jpg", rating: 4.7, reviews: 812, toursCount: 62,
    description: "Sun-soaked beaches, Portuguese charm, and a laid-back coastal spirit.",
    bestTime: "Nov – Feb", highlights: ["Beach Shacks", "Old Goa Churches", "Nightlife"] },
  { id: "10", name: "Lakshadweep", country: "India", image: "/destinationPage/lakshadweep.jpg", rating: 4.8, reviews: 156, toursCount: 18,
    description: "Untouched coral islands and some of the clearest waters in India.",
    bestTime: "Oct – May", highlights: ["Coral Lagoons", "Scuba Diving", "Untouched Islands"] },
  { id: "11", name: "Ladakh", country: "India", image: "/destinationPage/ladakh.jpg", rating: 4.9, reviews: 267, toursCount: 22,
    description: "High-altitude desert landscapes and ancient Buddhist monasteries.",
    bestTime: "May – Sep", highlights: ["Pangong Lake", "Monasteries", "Mountain Passes"] },
  { id: "12", name: "Vietnam", country: "Vietnam", image: "/destinationPage/vietnam.jpg", rating: 4.7, reviews: 398, toursCount: 35,
    description: "Limestone karsts, floating markets, and centuries of layered history.",
    bestTime: "Dec – Apr", highlights: ["Ha Long Bay", "Old Quarter", "Floating Markets"] },
  { id: "13", name: "Darjeeling", country: "India", image: "/destinationPage/darjeeling.jpg", rating: 4.6, reviews: 203, toursCount: 25,
    description: "Rolling tea gardens and sweeping views of the Himalayan range.",
    bestTime: "Mar – May", highlights: ["Tea Gardens", "Toy Train", "Sunrise Views"] },
  { id: "14", name: "Russia", country: "Russia", image: "/destinationPage/russia.jpg", rating: 4.7, reviews: 178, toursCount: 19,
    description: "Grand palaces, storied history, and cities rich in culture.",
    bestTime: "May – Sep", highlights: ["Red Square", "Hermitage Museum", "White Nights"] },
  { id: "15", name: "Kerala", country: "India", image: "/destinationPage/kerala.jpg", rating: 4.9, reviews: 634, toursCount: 38,
    description: "Tranquil backwaters, spice-scented hills, and swaying palm coastlines.",
    bestTime: "Sep – Mar", highlights: ["Backwater Cruises", "Tea Plantations", "Ayurveda"] },
];

const SPOTLIGHT = DESTINATIONS[0]; // Rajasthan

const GALLERY_IMAGES = [
  { name: "Kerala", image: "/destinationPage/kerala.jpg", span: "row-span-2" },
  { name: "Dubai", image: "/destinationPage/dubai.jpg", span: "" },
  { name: "Ladakh", image: "/destinationPage/ladakh.jpg", span: "" },
  { name: "Goa", image: "/destinationPage/goa.jpg", span: "" },
  { name: "Vietnam", image: "/destinationPage/vietnam.jpg", span: "row-span-2" },
  { name: "Maldives", image: "/destinationPage/maldives.jpg", span: "" },
  { name: "Darjeeling", image: "/destinationPage/darjeeling.jpg", span: "" },
  { name: "Thailand", image: "/destinationPage/thailand.jpg", span: "" },
];

// ─── Motion helper ──────────────────────────────────────────────────────────

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

export default function DestinationsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  const scrollToShowcase = () => {
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ── 1. Hero ── */}
      <div ref={heroRef} className="relative h-[100vh] min-h-[600px] max-h-[840px] overflow-hidden">
        <MotionImage
          src="/destinationPage/hero-img.jpg"
          alt="Destinations"
          fill
          priority
          sizes="100vw"
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 object-cover"
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
              Discover The World
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              Explore Incredible Destinations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto mb-10"
            >
              From royal deserts to tranquil backwaters, discover the places
              that turn a trip into a story worth telling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={scrollToShowcase}
                className="h-[52px] px-8 text-base rounded-xl gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                           shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all hover:scale-[1.02]"
              >
                Explore Destinations <ArrowRight className="w-4 h-4" />
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

      {/* ── 2. Destinations Introduction ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-4">Why India, and Beyond</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Every Destination Tells a Different Story
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-8">
                <p>
                  From the golden dunes of Rajasthan to the quiet backwaters of
                  Kerala, travelling across India means moving between entirely
                  different worlds, each with its own rhythm, colour, and cuisine.
                </p>
                <p>
                  Beyond India, we&apos;ve handpicked destinations across Asia,
                  the Middle East, and Europe that reward the curious traveller —
                  places worth crossing an ocean for.
                </p>
                <p>
                  Wherever you land, expect landscapes and moments that stay with
                  you long after the trip is over.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[4/5] md:aspect-square">
                  <Image
                    src={DESTINATIONS[14].image}
                    alt="Kerala backwaters"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>

                <div className="absolute -bottom-8 -left-6 md:-left-10 bg-white rounded-2xl shadow-xl shadow-slate-300/50
                                border border-slate-100 p-6 space-y-3 max-w-[240px]">
                  {["Handpicked Destinations", "Local Experiences", "Beautiful Landscapes"].map((t) => (
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

      {/* ── 3. Destinations Showcase ── */}
      <section id="destinations" className="py-20 md:py-28 bg-slate-50 scroll-mt-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">Where To Next</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Discover Our Destinations
            </h2>
            <p className="text-slate-500 text-lg">
              A handpicked collection of places worth building a journey around.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.map((dest, idx) => (
              <FadeUp key={dest.id} delay={(idx % 3) * 0.08}>
                <DestinationCard {...dest} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Featured Destination Spotlight ── */}
      {/* <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[4/3]">
                <img
                  src={SPOTLIGHT.image}
                  alt={SPOTLIGHT.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-4">Spotlight</p>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-5">
                {SPOTLIGHT.name}
              </h2>
              <p className="text-lg text-slate-600 leading-8 mb-6">
                Rajasthan is where India&apos;s royal past feels closest — sandstone
                forts rising from the desert, painted havelis, and cities built
                around lakes and legends. Every stop feels like stepping into a
                different chapter of the same grand story.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-8">
                {SPOTLIGHT.highlights.map((h) => (
                  <span
                    key={h}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold"
                  >
                    <MapPin className="w-3.5 h-3.5" /> {h}
                  </span>
                ))}
              </div>
              <Link href={`/destinations/${SPOTLIGHT.id}`}>
                <Button
                  size="lg"
                  className="h-12 px-7 rounded-xl gap-2 bg-gradient-to-r from-blue-600 to-blue-500
                             shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all hover:scale-[1.02]"
                >
                  Explore Rajasthan <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section> */}

      {/* ── 5. Destination Gallery ── */}
      {/* <section className="py-20 md:py-28 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <FadeUp className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 mb-3">A Glimpse</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Moments Worth Travelling For
            </h2>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <FadeUp key={img.name} delay={i * 0.04} className={`${img.span} group relative rounded-2xl overflow-hidden cursor-pointer`}>
                <img
                  src={img.image}
                  alt={img.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-white font-semibold text-sm">{img.name}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── 6. Travel Inspiration ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                Where Will Your Next Journey Take You?
              </h2>
              <div className="space-y-4 text-slate-600 text-lg leading-8">
                <p>
                  There&apos;s a particular kind of stillness in a desert at dawn,
                  and a completely different one in a mountain village wrapped in
                  cloud. Travel has a way of making the world feel larger and
                  more familiar at the same time.
                </p>
                <p>
                  Maybe it&apos;s the pull of snow-capped peaks, the hush of an
                  old heritage city, or a coastline that stretches further than
                  you expected. Every landscape holds a different kind of memory
                  waiting to be made.
                </p>
                <p>
                  Wherever you&apos;re drawn to next — forest, beach, desert, or
                  city — the only real requirement is curiosity.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-300/50 aspect-[4/3]">
                <Image
                  src="/destinationPage/ladakh.jpg"
                  alt="Mountain landscape"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── 7. Final CTA ── */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <MotionImage
          src="/destinationPage/hero-img.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.08 }}
          viewport={{ once: true }}
          transition={{ duration: 8, ease: "easeOut" }}
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-2xl">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              Ready to Explore Your Dream Destination?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Let us help you discover unforgettable places and create memories
              that last a lifetime.
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