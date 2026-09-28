// app/sitemap.ts
import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';
import { hotels } from '@/data/hotels';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;
    const lastModified = new Date();

    // Trang tĩnh của thương hiệu
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified, changeFrequency: 'weekly', priority: 1 },
        { url: `${baseUrl}/gioi-thieu`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/nha-hang`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/lien-he`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    ];

    // Trang động cho từng khách sạn
    const hotelPages: MetadataRoute.Sitemap = hotels.map((h) => ({
        url: `${baseUrl}/khach-san/${h.slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    return [...staticPages, ...hotelPages];
}