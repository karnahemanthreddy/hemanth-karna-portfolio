/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    qualities: [50, 75, 90, 95, 100],
  },
};

export default nextConfig;
