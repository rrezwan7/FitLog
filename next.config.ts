import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.magnific.com',
        port: '',
        pathname: '/free-photo/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"], // Tells Turbopack how to handle the icon sub-folders safely
  },
};

export default nextConfig;

