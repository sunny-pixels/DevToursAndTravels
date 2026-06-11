"use client";

import Link from "next/link";
import { Plane, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function LoginPage() {
  return (
    <div className="flex w-full min-h-screen">
      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-900 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <Link href="/" className="flex items-center gap-2 group w-max">
            <div className="bg-primary p-2 rounded-lg text-white">
              <Plane className="w-6 h-6" />
            </div>
            <span className="font-serif font-bold text-2xl tracking-tight text-white">
              VoyageX
            </span>
          </Link>

          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Welcome back to your <br /> next adventure
            </h2>
            <p className="text-slate-300 text-lg max-w-md">
              Sign in to access your saved itineraries, manage bookings, and discover exclusive members-only deals.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-12 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <div className="lg:hidden mb-12 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-white">
                <Plane className="w-6 h-6" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-slate-900">
                VoyageX
              </span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Sign in</h1>
            <p className="text-slate-500">Please enter your details to sign in.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input type="email" placeholder="hello@example.com" className="pl-10 h-12" required />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-slate-700">Password</label>
                <Link href="#" className="text-sm text-primary hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input type="password" placeholder="••••••••" className="pl-10 h-12" required />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" className="rounded border-slate-300 text-primary focus:ring-primary w-4 h-4" />
              <label htmlFor="remember" className="text-sm text-slate-600 cursor-pointer">Remember me for 30 days</label>
            </div>

            <Button type="submit" className="w-full h-12 text-lg">Sign In</Button>
          </form>

          <p className="text-center mt-8 text-slate-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Sign up for free
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
