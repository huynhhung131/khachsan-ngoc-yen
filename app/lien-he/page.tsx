// app/lien-he/page.tsx
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site';
import { hotels } from '@/data/hotels';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link'; // nếu chưa có

export const metadata: Metadata = {
  title: 'Liên hệ',
  description:
    'Thông tin liên hệ chuỗi Khách sạn – Nhà hàng Ngọc Yến tại Vĩnh Long. Địa chỉ, số điện thoại từng cơ sở và bản đồ chỉ đường.',
  alternates: { canonical: '/lien-he' },
  openGraph: {
    title: `Liên hệ | ${siteConfig.name}`,
    description:
      'Liên hệ chuỗi Khách sạn – Nhà hàng Ngọc Yến tại Vĩnh Long.',
    url: '/lien-he',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* ===== Page hero ===== */}
      <section className="page-hero">
        <div className="container">
          <h1>Liên hệ Ngọc Yến</h1>
          <p>
            Gọi trực tiếp đến từng cơ sở hoặc gửi yêu cầu qua các kênh bên
            dưới – chúng tôi sẽ phản hồi sớm nhất.
          </p>
        </div>
      </section>

      {/* ===== Thông tin thương hiệu ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Thương hiệu</span>
            <h2>Kênh liên hệ chung</h2>
          </div>

          <div className="contact-grid" style={{ marginBottom: 'var(--space-8)' }}>
  <div className="contact-card">
    <h3 className="contact-card__name">Hotline</h3>
    <div className="contact-card__row">
      <Phone />
      <span>{siteConfig.hotline}</span>
    </div>
  </div>

  <div className="contact-card">
    <h3 className="contact-card__name">Email</h3>
    <div className="contact-card__row">
      <Mail />
      <span>{siteConfig.email}</span>
    </div>
  </div>

  <div className="contact-card">
    <h3 className="contact-card__name">Khu vực</h3>
    <div className="contact-card__row">
      <MapPin />
      <span>{siteConfig.address}</span>
    </div>
  </div>
</div>
        </div>
      </section>

      {/* ===== Liên hệ từng khách sạn ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Từng cơ sở</span>
            <h2>Liên hệ 5 khách sạn</h2>
            <p>Chọn cơ sở gần bạn nhất để được hỗ trợ nhanh nhất.</p>
          </div>

          <div className="contact-grid">
            {hotels.map((h) => (
  <div key={h.slug} className="contact-card">
    <h3 className="contact-card__name">{h.name}</h3>

    <div className="contact-card__row">
      <MapPin />
      <span>{h.address}</span>
    </div>

    <div className="contact-card__row">
      <Phone />
      <span>{h.phone}</span>
    </div>

    <div className="contact-card__actions">
      {h.phone && h.phone !== 'Đang cập nhật' ? (
        <a href={`tel:${h.phone}`} className="btn btn-primary">
          <Phone />
          <span>Gọi ngay</span>
        </a>
      ) : null}
      <Link href={`/khach-san/${h.slug}`} className="btn btn-outline">
        Chi tiết
      </Link>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      {/* ===== Bản đồ ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Bản đồ</span>
            <h2>Vị trí trên Google Maps</h2>
            <p>
              Bản đồ chỉ đường sẽ được nhúng tại đây. Bạn có thể thay bằng
              iframe Google Maps của từng cơ sở.
            </p>
          </div>

          <div className="map-placeholder">
            Bản đồ Google Maps sẽ được nhúng ở đây
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta">
            <h2>Cần hỗ trợ thêm?</h2>
            <p>
              Đội ngũ Ngọc Yến luôn sẵn sàng giải đáp mọi thắc mắc của bạn.
            </p>
            <a href={`tel:${siteConfig.hotline}`} className="btn btn-light">
  <Phone />
  <span>Gọi hotline</span>
</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}