// app/khach-san/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getHotelBySlug, hotels } from '@/data/hotels';
import { siteConfig } from '@/data/site';
import BreadcrumbJsonLd from '@/components/BreadcrumJsonLd';
import HotelJsonLd from '@/components/HotelJsonLd';
import { MapPin, Phone, Building2, Navigation, Check } from 'lucide-react';
import Image from 'next/image';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);

  if (!hotel) {
    return { title: 'Không tìm thấy khách sạn' };
  }

  return {
    title: hotel.name,
    description: hotel.description,
    alternates: { canonical: `/khach-san/${hotel.slug}` },
    openGraph: {
      title: `${hotel.name} | ${siteConfig.name}`,
      description: hotel.description,
      url: `/khach-san/${hotel.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export default async function HotelDetailPage({ params }: Props) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);

  if (!hotel) notFound();
  
  return (
    <>
      <HotelJsonLd hotel={hotel} />
      <BreadcrumbJsonLd
      items={[
        { name: 'Trang chủ', url: '/' },
        { name: 'Khách sạn', url: '/khach-san' },
        { name: hotel.shortName, url: `/khach-san/${hotel.slug}` },
      ]}
    />
      <Header />

      {/* ===== Page hero ===== */}
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Trang chủ</Link>
            <span>/</span>
            <Link href="/khach-san">Khách sạn</Link>
            <span>/</span>
            {hotel.shortName}
          </nav>
          <h1>{hotel.name}</h1>
          <p>{hotel.description}</p>
        </div>
      </section>

      {/* ===== Nội dung chi tiết ===== */}
      <section className="section">
        <div className="container">
          <Link href="/khach-san" className="back-link">
            ← Quay lại danh sách khách sạn
          </Link>

          <div className="hotel-detail">
            {/* === Cột chính === */}
            <div>
              <div className="hotel-detail__gallery">
  <Image
    src={hotel.coverImage}
    alt={hotel.name}
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 66vw"
    style={{ objectFit: 'cover' }}
  />
</div>
{hotel.gallery.length > 0 && (
  <div className="gallery-thumbs">
    {hotel.gallery.map((src, idx) => (
      <div className="gallery-thumb" key={src}>
        <Image
          src={src}
          alt={`${hotel.name} – ảnh ${idx + 1}`}
          fill
          sizes="(max-width: 640px) 25vw, 16vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    ))}
  </div>
)}

              <h2>Giới thiệu</h2>
              <p>
                {hotel.name} là một trong 5 cơ sở thuộc chuỗi Khách sạn – Nhà
                hàng Ngọc Yến tại Vĩnh Long. Khách sạn mang đến không gian nghỉ
                ngơi tiện nghi, phục vụ chu đáo và ẩm thực đậm đà bản sắc miền
                Tây.
              </p>

              <div className="hotel-detail__meta">
  <div className="hotel-detail__meta-item">
    <MapPin />
    <div>
      <strong>Địa chỉ</strong>
      <span>{hotel.address}</span>
    </div>
  </div>
  <div className="hotel-detail__meta-item">
    <Phone />
    <div>
      <strong>Điện thoại</strong>
      <span>{hotel.phone}</span>
    </div>
  </div>
  <div className="hotel-detail__meta-item">
    <Building2 />
    <div>
      <strong>Khu vực</strong>
      <span>{hotel.city}</span>
    </div>
  </div>
</div>

              <h2>Tiện nghi</h2>
              <ul className="amenity-list">
  {hotel.amenities.map((a) => (
    <li key={a}>
      <Check />
      <span>{a}</span>
    </li>
  ))}
</ul>

              {/* ===== Vị trí ===== */}
<h2 style={{ marginTop: 'var(--space-8)' }}>Vị trí</h2>
<div
  style={{
    position: 'relative',
    width: '100%',
    aspectRatio: '16 / 9',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    border: '1px solid var(--color-border)',
  }}
>
  <iframe
    title={`Bản đồ ${hotel.name}`}
    src={`https://www.google.com/maps?q=${encodeURIComponent(
      hotel.mapQuery
    )}&output=embed`}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0,
    }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
<div style={{ marginTop: 'var(--space-3)', textAlign: 'right' }}>
  <a
  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    hotel.mapQuery
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-outline"
  style={{ padding: 'var(--space-2) var(--space-4)', fontSize: '0.85rem' }}
>
  <Navigation />
  <span>Mở chỉ đường</span>
</a>
</div>
            </div>

            {/* === Sidebar === */}
            <aside className="hotel-sidebar">
              <h3>Liên hệ đặt phòng</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Gọi trực tiếp để được tư vấn và hỗ trợ nhanh nhất.
              </p>

              <div className="hotel-sidebar__price">
                {hotel.phone}
                <br />
                <small>Hotline khách sạn</small>
              </div>

              <div className="hotel-sidebar__actions">
                <a
  href={`tel:${hotel.phone}`}
  className="btn btn-primary"
  style={{ width: '100%' }}
>
  <Phone />
  <span>Gọi ngay</span>
</a>
                <Link
                  href="/lien-he"
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  Gửi yêu cầu
                </Link>
              </div>

              <div
                style={{
                  marginTop: 'var(--space-5)',
                  paddingTop: 'var(--space-5)',
                  borderTop: '1px solid var(--color-border)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                }}
              >
                <strong
                  style={{
                    display: 'block',
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-2)',
                  }}
                >
                  Địa chỉ
                </strong>
                {hotel.address}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ===== CTA cuối ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta">
            <h2>Khám phá các cơ sở khác</h2>
            <p>
              Ngọc Yến có 5 khách sạn tại Vĩnh Long – mỗi cơ sở một nét riêng.
            </p>
            <Link href="/khach-san" className="btn btn-light">
              Xem tất cả khách sạn
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}