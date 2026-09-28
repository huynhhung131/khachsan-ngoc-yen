// app/nha-hang/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site';
import {
  Fish,
  Soup,
  Shell,
  Drumstick,
  Salad,
  Wheat,
  Armchair,
  PartyPopper,
  Leaf,
  ParkingCircle,
} from 'lucide-react';
export const metadata: Metadata = {
  title: 'Nhà hàng',
  description:
    'Nhà hàng Ngọc Yến tại Vĩnh Long – ẩm thực miền Tây đậm đà, không gian ấm cúng, phục vụ gia đình, bạn bè và tiếp khách. Nhận đặt tiệc, hội nghị.',
  alternates: { canonical: '/nha-hang' },
  openGraph: {
    title: `Nhà hàng | ${siteConfig.name}`,
    description:
      'Ẩm thực miền Tây đậm đà tại nhà hàng Ngọc Yến – Vĩnh Long.',
    url: '/nha-hang',
  },
};

export default function RestaurantPage() {
  return (
    <>
      <Header />

      {/* ===== Page hero ===== */}
      <section className="page-hero">
        <div className="container">
          <h1>Nhà hàng Ngọc Yến</h1>
          <p>
            Hương vị miền Tây đậm đà trong không gian ấm cúng – điểm hẹn lý
            tưởng cho gia đình, bạn bè và tiếp khách.
          </p>
        </div>
      </section>

      {/* ===== Giới thiệu nhà hàng ===== */}
      <section className="section">
        <div className="container">
          <div className="two-col">
            <div className="two-col__visual">Ẩm thực</div>
            <div>
              <span className="section-header__eyebrow">Về nhà hàng</span>
              <h2>Đậm đà hương vị miền Tây</h2>
              <p>
                Nhà hàng Ngọc Yến phục vụ các món ăn truyền thống miền Tây
                Nam Bộ, kết hợp cùng các món Á – Âu quen thuộc. Nguyên liệu
                được chọn tươi mỗi ngày, chế biến bởi đội ngũ đầu bếp giàu
                kinh nghiệm.
              </p>
              <ul className="info-list">
                <li>Sức chứa linh hoạt: từ bàn gia đình đến tiệc 100+ khách</li>
                <li>Nhận đặt tiệc cưới, hội nghị, sinh nhật, họp mặt</li>
                <li>Phòng riêng cho tiếp khách và họp kín</li>
                <li>Phục vụ tại chỗ và mang về</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Món đặc trưng ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Thực đơn</span>
            <h2>Món đặc trưng</h2>
            <p>
              Một vài món được thực khách yêu thích nhất tại nhà hàng Ngọc Yến.
            </p>
          </div>

          <div className="dish-grid">
  <div className="dish">
    <div className="dish__icon"><Fish /></div>
    <h3>Cá lóc nướng trui</h3>
    <p>Cá lóc tươi nướng rơm, cuốn bánh tráng cùng rau sống và mắm nêm.</p>
  </div>
  <div className="dish">
    <div className="dish__icon"><Soup /></div>
    <h3>Lẩu mắm miền Tây</h3>
    <p>Nước lẩu đậm đà, ăn kèm cá, tôm, mực và rau đồng.</p>
  </div>
  <div className="dish">
    <div className="dish__icon"><Shell /></div>
    <h3>Tôm càng nướng muối ớt</h3>
    <p>Tôm càng xanh nướng muối ớt, thơm nồng, chấm muối tiêu chanh.</p>
  </div>
  <div className="dish">
    <div className="dish__icon"><Drumstick /></div>
    <h3>Gà hấp lá chanh</h3>
    <p>Gà ta hấp lá chanh, da vàng giòn, thịt ngọt tự nhiên.</p>
  </div>
  <div className="dish">
    <div className="dish__icon"><Salad /></div>
    <h3>Gỏi cuốn tôm thịt</h3>
    <p>Cuốn tươi mát, chấm tương đậu phộng đặc trưng.</p>
  </div>
  <div className="dish">
    <div className="dish__icon"><Wheat /></div>
    <h3>Cơm gạo lứt hải sản</h3>
    <p>Gạo lứt dẻo, hải sản tươi, ăn kèm rau củ theo mùa.</p>
  </div>
</div>
        </div>
      </section>

      {/* ===== Không gian ===== */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-header__eyebrow">Không gian</span>
            <h2>Ấm cúng & riêng tư</h2>
            <p>
              Không gian được thiết kế hài hòa giữa nét truyền thống và tiện
              nghi hiện đại, phù hợp cho mọi dịp.
            </p>
          </div>

          <div className="feature-grid">
  <div className="feature">
    <div className="feature__icon"><Armchair /></div>
    <h3>Phòng gia đình</h3>
    <p>Bàn riêng ấm cúng cho 4–10 người.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><PartyPopper /></div>
    <h3>Tiệc & hội nghị</h3>
    <p>Sảnh lớn, sức chứa 100+ khách.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><Leaf /></div>
    <h3>Sân vườn</h3>
    <p>Khu vực ngoài trời thoáng mát.</p>
  </div>
  <div className="feature">
    <div className="feature__icon"><ParkingCircle /></div>
    <h3>Bãi xe rộng</h3>
    <p>Miễn phí cho khách dùng bữa.</p>
  </div>
</div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section section--alt">
        <div className="container">
          <div className="cta">
            <h2>Đặt bàn hoặc đặt tiệc</h2>
            <p>
              Liên hệ trực tiếp để được tư vấn thực đơn và sắp xếp không gian
              phù hợp.
            </p>
            <Link href="/lien-he" className="btn btn-light">
              Liên hệ đặt bàn
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}