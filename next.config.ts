import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cap widths — default deviceSizes includes 3840 which overserved the hero on mobile
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "api.bitscollege.edu.et",
        pathname: "/api/media/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  async redirects() {
    return [
      {
        source: "/scholarship-recepients",
        destination: "/scholarship-recipients",
        permanent: true,
      },
      {
        source: "/scholarship-recepients/",
        destination: "/scholarship-recipients",
        permanent: true,
      },
      {
        source: "/undergraduate-accreditation",
        destination: "/who-we-are?section=accreditation&doc=undergraduate",
        permanent: true,
      },
      {
        source: "/graduate-accreditation",
        destination: "/who-we-are?section=accreditation&doc=graduate",
        permanent: true,
      },
      {
        source: "/information-technology-and-systems",
        destination: "/undergraduate-program",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
          ...(isDev
            ? []
            : [
                {
                  key: "Strict-Transport-Security",
                  value: "max-age=63072000; includeSubDomains; preload",
                },
              ]),
        ],
      },
    ];
  },
};

export default nextConfig;