import { BRAND } from './links';

export const SEO = {
  title: `${BRAND} | Book Holiday Lights, Power Washing & More Instantly`,
  description: 'Book exterior services in seconds. Holiday lights, power washing, roofing and general contracting—fast, reliable and local. Call or book instantly.',
  siteName: BRAND,
  url: 'https://statenislandwashkings.com',
};

export const getLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BRAND,
  image: 'https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg',
  '@id': 'https://statenislandwashkings.com',
  url: 'https://statenislandwashkings.com',
  telephone: process.env.NEXT_PUBLIC_PHONE ?? '+13475084562',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Staten Island',
    addressRegion: 'NY',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.5795,
    longitude: -74.1511,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '20:00',
  },
  sameAs: [
    'https://www.instagram.com/statenislandwashkings/',
    'https://www.youtube.com/@StatenIslandwashkings/videos',
  ],
  areaServed: [
    { '@type': 'City', name: 'Staten Island' },
    { '@type': 'AdministrativeArea', name: 'New York' },
  ],
  serviceType: ['Power Washing', 'Holiday Lights Installation', 'Roofing', 'General Contracting'],
  serviceArea: [
    {
      '@type': 'City',
      name: 'Staten Island',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'New York',
    },
  ],
});

