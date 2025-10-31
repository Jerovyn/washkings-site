/** @type {import('next').NextConfig} */
const nextConfig = {
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

