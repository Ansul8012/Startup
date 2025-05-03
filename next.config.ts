import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com','cdn.sanity.io'], // Allow images from Google profile URLs
  },
};

export default nextConfig;
