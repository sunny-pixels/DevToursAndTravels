import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-4">
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
                <span
                  className="text-2xl font-bold tracking-tight transition-colors duration-300"
                  // isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                >
                  DevHolidays
                </span>
                <span
                  className="text-[10px] uppercase tracking-[0.3em] transition-colors duration-300"
                  // isScrolled ? "text-slate-500 dark:text-slate-400" : "text-white/70"
                >
                  Tours &amp; Travel
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mtext-slate-400">
              Discover handpicked destinations, curated adventures, and
              unforgettable travel experiences around the world. Your journey
              begins here.
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="#" className="hover:text-primary transition-colors">
                <FaFacebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <FaTwitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <FaInstagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-primary transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="hover:text-primary transition-colors"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Destinations */}
          <div>
            <h4 className="text-white font-semibold mb-6">Top Destinations</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/destinations?country=bali"
                  className="hover:text-primary transition-colors"
                >
                  Bali, Indonesia
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=swiss"
                  className="hover:text-primary transition-colors"
                >
                  Swiss Alps
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=paris"
                  className="hover:text-primary transition-colors"
                >
                  Paris, France
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=maldives"
                  className="hover:text-primary transition-colors"
                >
                  Maldives
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=japan"
                  className="hover:text-primary transition-colors"
                >
                  Kyoto, Japan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>
                  123 Travel Avenue, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@voyagex.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} DevHolidays Travels. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
