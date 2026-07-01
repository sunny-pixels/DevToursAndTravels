import Image from "next/image";
import Link from "next/link";
import { Shield, ThumbsUp, CreditCard, Headphones, Star } from "lucide-react";
import { DestinationCard } from "@/components/shared/destination-card";
import { PackageCard } from "@/components/shared/package-card";
import { MotionDiv } from "@/components/shared/motion-wrappers";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { HeroSection } from "@/components/shared/hero-section";

// Placeholder Data
const POPULAR_DESTINATIONS = [
  {
    id: "1",
    name: "Bali",
    country: "Indonesia",
    image: "/homePage/destination/bali.jpg",
    rating: 4.9,
    toursCount: 45,
  },
  {
    id: "2",
    name: "Pattaya",
    country: "Thailand",
    image: "/homePage/destination/pattaya.jpg",
    rating: 4.8,
    toursCount: 32,
  },
  {
    id: "3",
    name: "Vietnam",
    country: "Vietnam",
    image: "/homePage/destination/vietnam.jpg",
    rating: 4.9,
    toursCount: 28,
  },
];

const FEATURED_PACKAGES = [
  {
    id: "p1",
    title: "Magical Maldives Honeymoon Escape",
    destination: "Maldives",
    image: "/homePage/packages/maldives_pack.jpg",
    price: 1299,
    duration: 6,
    rating: 4.9,
    highlights: ["Overwater Villa", "Snorkeling Tour", "Romantic Dinner"],
  },
  {
    id: "p2",
    title: "Bali Beach Escape & Island Adventure",
    destination: "Indonesia",
    image: "/homePage/packages/bali_pack.jpg",
    price: 899,
    duration: 6,
    rating: 4.8,
    highlights: ["Beach Resort Stay", "Island Hopping", "Water Sports"],
  },
  {
    id: "p3",
    title: "Pattaya Beach & Nightlife Experience",
    destination: "Thailand",
    image: "/homePage/packages/pattaya_pack.jpg",
    price: 1599,
    duration: 6,
    rating: 5.0,
    highlights: [
      "Coral Island Tour",
      "Beach Activities",
      "Floating Market Visit",
    ],
  },
];

const EXPERIENCES = [
  { name: "Adventure", image: "/homePage/experiences/adventure_exp.jpg" },
  { name: "Beach", image: "/homePage/experiences/beach_exp.jpg" },
  { name: "Wildlife", image: "/homePage/experiences/wildlife_exp.jpg" },
  { name: "Honeymoon", image: "/homePage/experiences/honeymoon_exp.jpg" },
];

const TESTIMONIALS = [
  {
    name: "Sunny Prajapati",
    location: "Ahmedabad, Gujarat",
    text: "DevHolidays made our honeymoon absolutely perfect. Every detail was taken care of seamlessly.",
    rating: 5,
  },
  {
    name: "Dev Patel",
    location: "Valsad, Gujarat",
    text: "The best travel platform I've ever used. The curated experiences are genuinely unique and premium.",
    rating: 5,
  },
  {
    name: "Vishnu Prajapati",
    location: "Jodhpur, Rajasthan",
    text: "Exceptional service and support throughout our entire 2-week adventure.",
    rating: 4.9,
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Statistics Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
            {[
              { label: "Travelers", value: "5000+" },
              { label: "Destinations", value: "100+" },
              { label: "Tour Packages", value: "200+" },
              { label: "Average Rating", value: "4.9" },
            ].map((stat, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section> */}

      {/* Popular Destinations */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-slate-600">
              Explore our most booked destinations worldwide, featuring premium
              accommodations and exclusive experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {POPULAR_DESTINATIONS.map((dest, idx) => (
              <MotionDiv
                key={dest.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <DestinationCard {...dest} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
                Featured Packages
              </h2>
              <p className="text-slate-600">
                Carefully curated luxury travel packages designed to provide you
                with the ultimate vacation experience.
              </p>
            </div>
            <Link
              href="/packages"
              className="mt-4 md:mt-0 text-primary font-semibold hover:underline"
            >
              View All Packages
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PACKAGES.map((pkg, idx) => (
              <MotionDiv
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <PackageCard {...pkg} />
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Why Choose DevHolidays
            </h2>
            <p className="text-slate-400">
              We pride ourselves on delivering premium travel experiences with
              exceptional service and peace of mind.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Verified Guides",
                desc: "Expert local guides vetted for quality and knowledge.",
              },
              {
                icon: CreditCard,
                title: "Secure Payments",
                desc: "100% secure payment gateways with fraud protection.",
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                desc: "Round-the-clock assistance anywhere in the world.",
              },
              {
                icon: ThumbsUp,
                title: "Best Prices",
                desc: "Price match guarantee on all luxury packages.",
              },
            ].map((feature, idx) => (
              <MotionDiv
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
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-12 text-center">
            Travel Experiences
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {EXPERIENCES.map((exp, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-bold tracking-wider">
                    {exp.name}
                  </h3>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-16 text-center">
            What Our Travelers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm flex flex-col"
              >
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? "fill-accent" : ""}`}
                    />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-8 text-lg flex-1">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <h4 className="font-bold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.location}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/homePage/travel/travel.jpg"
            alt="Newsletter background"
            fill
            sizes="100vw"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/20 text-white">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Get Travel Updates
            </h2>

            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Enter your email and we'll keep you updated with the latest travel
              deals, destination guides, and exclusive holiday packages.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
