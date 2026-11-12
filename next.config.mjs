/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Add your real image hosts here if you load remote images.
    remotePatterns: [],
  },
};

export default nextConfig;
