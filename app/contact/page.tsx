"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Mail, Phone, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate submit — wire up to your API as needed
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("success");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <div className="flex w-full min-h-screen">
      {/* Left — decorative image panel */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
          alt="Travel scenery"
          fill
          sizes="50vw"
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group w-max">
            <div className="relative w-12 h-12">
              <Image src="/logo-1.png" alt="Dev Holidays" fill sizes="48px" className="object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-xl text-white">DevHolidays</span>
              <span className="text-[10px] uppercase tracking-widest text-white/60">Tours &amp; Travel</span>
            </div>
          </Link>

          {/* Tagline */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Let&apos;s plan your <br /> next adventure
            </h2>
            <p className="text-slate-300 text-lg max-w-md">
              Reach out and our team will get back to you within 24 hours to help craft your perfect journey.
            </p>

            <div className="mt-10 space-y-4 text-slate-300 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@devholidays.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — contact form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Mobile logo */}
          <div className="lg:hidden mb-10 flex justify-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image src="/logo-1.png" alt="Dev Holidays" fill sizes="40px" className="object-contain" />
              </div>
              <span className="font-bold text-xl text-slate-900">DevHolidays</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Contact Us</h1>
            <p className="text-slate-500">Fill in your details and we&apos;ll be in touch shortly.</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="email"
                  placeholder="hello@example.com"
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 text-base shadow-lg shadow-primary/20"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>

            {status === "success" && (
              <p className="text-green-600 text-sm text-center">
                Thank you! We&apos;ll get back to you within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <p className="text-center mt-8 text-slate-500 text-sm">
            <Link href="/" className="text-primary font-semibold hover:underline">
              ← Back to Home
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
