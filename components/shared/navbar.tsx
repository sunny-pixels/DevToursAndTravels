"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About Us", href: "/about" },
  { name: "Destinations", href: "/destinations" },
  { name: "Packages", href: "/packages" },
  { name: "Cab Service", href: "/cab" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

        {/* Left — Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          {/* <div className="relative w-14 h-14 transition-transform group-hover:scale-105">
            <Image
              src="/logo-1.png"
              alt="Dev Holidays Logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div> */}
          <div className="flex flex-col leading-none">
            <span className={cn(
              "text-2xl font-bold tracking-tight transition-colors duration-300",
              isScrolled ? "text-slate-900 dark:text-white" : "text-white"
            )}>
              DevHolidays
            </span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.3em] transition-colors duration-300",
              isScrolled ? "text-slate-500 dark:text-slate-400" : "text-white/70"
            )}>
              Tours &amp; Travel
            </span>
          </div>
        </Link>

        {/* Center — Nav links */}
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary relative group",
                isScrolled ? "text-foreground/80" : "text-white/90"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right — Contact Us */}
        <div className="hidden lg:flex items-center shrink-0">
          <Link href="/contact">
            <Button className="shadow-lg shadow-primary/20">Contact Us</Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn("lg:hidden p-2", isScrolled ? "text-foreground" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background backdrop-blur-xl border-b shadow-xl overflow-y-auto pb-24 flex flex-col"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4 h-full">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium text-lg py-3 border-b border-border/50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-auto pt-6">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full shadow-lg shadow-primary/20">Contact Us</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
