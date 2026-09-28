// app/khach-san/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { hotels } from '@/data/hotels';
import { siteConfig } from '@/data/site';
import { MapPin } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hệ thống 5 khách sạn',
  description:
    'Danh sách 5 khách sạn thuộc chuỗi Khách sạn – Nhà hàng Ngọc Yến tại Vĩnh Long. Xem thông tin từng cơ sở và liên hệ trực tiếp.',
  alternates: { canonical: '/khach-san' },
  openGraph: {
    title: `Hệ thống 5 khách sạn | ${siteConfig.name}`,
    description:
      'Danh sách 5 khách sạn thuộc chuỗi Ngọc Yến tại Vĩnh Long.',
    url: '/khach-san',
  },
};

export default function HotelsPage() {
  return (
    <>
      <Header />

      {/* ===== Page hero ===== */}
      <section className="page-hero">
        <div className="container">
          <h1>Hệ thống 5 khách sạn Ngọc Yến</h1>
          <p>
            Mỗi cơ sở mang một nét riêng, cùng chung tinh thần hiếu khách của
            Ngọc Yến. Chọn điểm đến phù hợp với hành trình của bạn.
          </p>
        </div>
      </section>

      {/* ===== Danh sách card ===== */}
      <section className="section">
        <div className="container">
          <div className="hotel-grid">
            {hotels.map((h) => (
              <Link
                key={h.slug}
                href={`/khach-san/${h.slug}`}
                className="hotel-card"
              >
                <div className="hotel-card__media">
  <Image
    src={h.coverImage}
    alt={h.name}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
</div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__title">{h.name}</h3>
                  <p className="hotel-card__desc">{h.description}</p>

                  {h.address && h.address !== 'Đang cập nhật' && (
  <p
    className="hotel-card__desc"
    style={{
      fontSize: '0.85rem',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 6,
    }}
  >
    <MapPin size={15} style={{ flexShrink: 0, marginTop: 3, color: 'var(--color-primary)' }} />
    <span>{h.address}</span>
  </p>
)}

                  <span className="hotel-card__link">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}