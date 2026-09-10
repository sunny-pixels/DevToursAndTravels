import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
    ],
    qualities: [75, 80, 85],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
