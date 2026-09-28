// app/page.tsx
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site';
import { hotels } from '@/data/hotels';
import { Wifi, ParkingCircle, UtensilsCrossed, ConciergeBell } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero__inner">
          <span className="hero__eyebrow">Chuỗi 5 khách sạn & nhà hàng · Vĩnh Long</span>
          <h1>
            Nghỉ dưỡng ấm cúng,<br />
            ẩm thực đậm đà bản sắc miền Tây
          </h1>
          <p>
            {siteConfig.name} – hệ thống 5 khách sạn và nhà hàng tại Vĩnh Long,
            mang đến không gian nghỉ ngơi tiện nghi và những bữa ăn trọn vị cho
            mọi hành trình của bạn.
          </p>
          <div className="hero__actions">
            <Link href="/khach-san/ngoc-yen-5" className="btn btn-light">
              Khám phá khách sạn
            </Link>
            <Link href="/lien-he" className="btn btn-outline" style={{ color: '#fff', borderColor: '#fff' }}>
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section>

      {/* ===== GIỚI THIỆU NGẮN ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Về Ngọc Yến</span>
            <h2>Một thương hiệu, năm điểm đến</h2>
            <p>
              Từ những ngày đầu tại Vĩnh Long, Ngọc Yến đã không ngừng mở rộng
              để phục vụ du khách gần xa. Mỗi cơ sở mang một nét riêng, nhưng
              tất cả đều chung một tinh thần: hiếu khách, chu đáo và tận tâm.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 5 KHÁCH SẠN ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Hệ thống</span>
            <h2>5 khách sạn Ngọc Yến</h2>
            <p>Chọn cơ sở phù hợp với hành trình của bạn.</p>
          </div>

          <div className="hotel-grid">
            {hotels.map((h) => (
              <Link
                key={h.slug}
                href={`/khach-san/${h.slug}`}
                className="hotel-card"
              >
                <div className="hotel-card__media">
                  {h.shortName.replace('Ngọc Yến ', 'NY')}
                </div>
                <div className="hotel-card__body">
                  <h3 className="hotel-card__title">{h.name}</h3>
                  <p className="hotel-card__desc">{h.description}</p>
                  <span className="hotel-card__link">
                    Xem chi tiết →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NHÀ HÀNG ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Ẩm thực</span>
            <h2>Nhà hàng Ngọc Yến</h2>
            <p>
              Hương vị miền Tây đậm đà trong không gian ấm cúng, phù hợp cho
              gia đình, bạn bè và tiếp khách.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TIỆN ÍCH ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Tiện ích</span>
            <h2>Đầy đủ cho kỳ nghỉ trọn vẹn</h2>
          </div>

          <div className="feature-grid">
  <div className="feature">
    <div className="feature__icon"><Wifi /></div>
    <h3>Wi-Fi miễn phí</h3>
    <p>Kết nối ổn định toàn khu vực.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><ParkingCircle /></div>
    <h3>Bãi đỗ xe</h3>
    <p>Miễn phí, thuận tiện, an toàn.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><UtensilsCrossed /></div>
    <h3>Nhà hàng</h3>
    <p>Phục vụ các bữa ăn trong ngày.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><ConciergeBell /></div>
    <h3>Lễ tân 24/7</h3>
    <p>Hỗ trợ khách mọi lúc mọi nơi.</p>
  </div>
</div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section">
        <div className="container">
          <div className="cta">
            <h2>Sẵn sàng cho hành trình của bạn?</h2>
            <p>
              Liên hệ trực tiếp với chúng tôi để được tư vấn và hỗ trợ đặt
              phòng nhanh chóng.
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