// components/HotelJsonLd.tsx
import type { Hotel } from '@/data/hotels';
import { siteConfig } from '@/data/site';

type Props = {
  hotel: Hotel;
};

export default function HotelJsonLd({ hotel }: Props) {
  const url = `${siteConfig.url}/khach-san/${hotel.slug}`;
  const imageUrl = hotel.coverImage ? `${siteConfig.url}${hotel.coverImage}` : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    '@id': url,
    name: hotel.name,
    alternateName: hotel.shortName,
    description: hotel.description,
    url,
    ...(imageUrl && { image: [imageUrl] }),
    telephone: hotel.phone,
    priceRange: hotel.priceRange,
    starRating: {
      '@type': 'Rating',
      ratingValue: hotel.starRating,
      bestRating: 5,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: hotel.address,
      addressLocality: 'TP. Vĩnh Long',
      addressRegion: 'Vĩnh Long',
      addressCountry: 'VN',
    },
    ...(hotel.latitude && hotel.longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: hotel.latitude,
            longitude: hotel.longitude,
          },
        }
      : {}),
    amenityFeature: hotel.amenities.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
      value: true,
    })),
    parentOrganization: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      // Next.js tự escape an toàn cho script JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}