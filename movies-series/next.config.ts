import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Your other Next.js config options go here, for example:
  // reactStrictMode: true,

  // Add the turbopack configuration
  turbopack: {
    root: path.resolve(__dirname), // Sets the current directory as the root
  },
};

export default nextConfig;