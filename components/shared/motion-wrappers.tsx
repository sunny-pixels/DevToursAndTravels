"use client";

import dynamic from "next/dynamic";

// framer-motion is client-only. Using next/dynamic with ssr: false inside a
// Client Component is the correct pattern per Next.js docs.
export const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

export const MotionH1 = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.h1),
  { ssr: false }
);

export const MotionP = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.p),
  { ssr: false }
);
