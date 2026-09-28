// app/gioi-thieu/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site';
import { hotels } from '@/data/hotels';
import { HeartHandshake, Sparkles, Soup, Wallet } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description:
    'Giới thiệu chuỗi Khách sạn – Nhà hàng Ngọc Yến tại Vĩnh Long: hành trình hình thành, giá trị cốt lõi và hệ thống 5 khách sạn phục vụ du khách gần xa.',
  alternates: { canonical: '/gioi-thieu' },
  openGraph: {
    title: `Giới thiệu | ${siteConfig.name}`,
    description:
      'Chuỗi Khách sạn – Nhà hàng Ngọc Yến tại Vĩnh Long với 5 cơ sở, phục vụ du khách gần xa.',
    url: '/gioi-thieu',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ===== Page hero ===== */}
      <section className="page-hero">
        <div className="container">
          <h1>Về Ngọc Yến</h1>
          <p>
            Hơn một thập kỷ hiếu khách – từ một cơ sở nhỏ tại Vĩnh Long đến
            chuỗi 5 khách sạn và nhà hàng phục vụ du khách gần xa.
          </p>
        </div>
      </section>

      {/* ===== Câu chuyện ===== */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="section-header__eyebrow">Câu chuyện</span>
              <h2>Bắt đầu từ một tấm lòng hiếu khách</h2>
              <p>
                Ngọc Yến ra đời từ mong muốn mang đến cho du khách đến Vĩnh
                Long một chốn dừng chân ấm cúng, nơi mỗi người đều được đón
                tiếp như người nhà. Từ cơ sở đầu tiên, chúng tôi dần mở rộng
                thành hệ thống 5 khách sạn và nhà hàng, phục vụ hàng nghìn
                lượt khách mỗi năm.
              </p>
              <p>
                Dù quy mô lớn hơn, tinh thần ban đầu vẫn không đổi: phục vụ
                tận tâm, không gian sạch sẽ, ẩm thực đậm đà và giá cả hợp lý.
              </p>
            </div>
            <div className="two-col__visual">Từ 2010</div>
          </div>
        </div>
      </section>

      {/* ===== Giá trị cốt lõi ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Giá trị cốt lõi</span>
            <h2>Ba điều chúng tôi luôn giữ</h2>
          </div>

          <div className="feature-grid">
  <div className="feature">
    <div className="feature__icon"><HeartHandshake /></div>
    <h3>Tận tâm</h3>
    <p>Phục vụ như đón người thân, chu đáo từ việc nhỏ nhất.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><Sparkles /></div>
    <h3>Sạch sẽ</h3>
    <p>Không gian luôn được chăm chút, giữ chuẩn vệ sinh cao.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><Soup /></div>
    <h3>Đậm vị</h3>
    <p>Ẩm thực miền Tây chuẩn vị, nguyên liệu tươi mỗi ngày.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><Wallet /></div>
    <h3>Hợp lý</h3>
    <p>Chất lượng tương xứng, giá cả minh bạch, không phụ phí ẩn.</p>
  </div>
</div>
        </div>
      </section>

      {/* ===== Hệ thống 5 khách sạn ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Hệ thống</span>
            <h2>5 cơ sở tại Vĩnh Long</h2>
            <p>
              Mỗi khách sạn mang một nét riêng, phù hợp với từng nhu cầu của
              du khách.
            </p>
          </div>

          <ul className="info-list" style={{ maxWidth: 720, margin: '0 auto var(--space-8)' }}>
            {hotels.map((h) => (
              <li key={h.slug}>
                <strong>{h.name}</strong> – {h.address}
              </li>
            ))}
          </ul>

          <div style={{ textAlign: 'center' }}>
            <Link href="/khach-san" className="btn btn-primary">
              Xem chi tiết 5 khách sạn
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta">
            <h2>Ghé thăm Ngọc Yến</h2>
            <p>
              Chúng tôi luôn sẵn sàng đón tiếp bạn tại bất kỳ cơ sở nào trong
              hệ thống.
            </p>
            <Link href="/lien-he" className="btn btn-light">
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}