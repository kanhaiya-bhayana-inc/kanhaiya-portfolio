// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // for static export (SSG)
  images: {
    unoptimized: true, // disables the Image Optimization API
  },
};

export default nextConfig;
