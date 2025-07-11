import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http'
        hostname: 'image.tmdb.org', // Replace with the specific domain
      },
    ]
  }
};

export default nextConfig;
