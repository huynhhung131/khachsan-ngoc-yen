// components/BreadcrumbJsonLd.tsx
import { siteConfig } from '@/data/site';

export type BreadcrumbItem = {
  name: string;
  url: string; // Đường dẫn tương đối, ví dụ: "/khach-san"
};

type Props = {
  items: BreadcrumbItem[];
};

export default function BreadcrumbJsonLd({ items }: Props) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}