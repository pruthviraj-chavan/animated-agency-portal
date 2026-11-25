import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services/custom-website-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/services/ecommerce-solutions",
        destination: "/services/ecommerce-development",
        permanent: true,
      },
      {
        source: "/services/api-development",
        destination: "/services/api-integration",
        permanent: true,
      },
      {
        source: "/services/web-hosting",
        destination: "/services/cloud-solutions",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/blog/category/:category",
        destination: "/blog/:category",
        permanent: true,
      },
    ];
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
    ];

    const headersList = [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      {
        source: "/fun",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/services/refer",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];

    if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
      headersList.push({
        source: "/(.*)",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      });
    }

    return headersList;
  },
};

export default nextConfig;
