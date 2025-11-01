/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'statenislandwashkings.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; frame-src 'self';",
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/commercial-pressure-washing-services",
        destination: "/power-washing/commercial",
        permanent: true,
      },
      {
        source: "/residential-pressure-washing-staten-island",
        destination: "/power-washing/residential",
        permanent: true,
      },
      {
        source: "/free-commercial-quote",
        destination: "/power-washing/commercial#lead-form",
        permanent: true,
      },
      {
        source: "/free-residential-quote",
        destination: "/power-washing/residential#lead-form",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blogs",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
