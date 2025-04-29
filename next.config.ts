import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Allow images from Google profile URLs
  },
};

export default nextConfig;
