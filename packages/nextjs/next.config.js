// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "euc.li",
      },
      {
        protocol: "https",
        hostname: "arweave.net",
      },
      {
        protocol: "https",
        hostname: "ipfs.io",
      },
      {
        protocol: "https",
        hostname: "zerion-dna.s3.us-east-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
