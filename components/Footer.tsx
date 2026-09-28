// components/Footer.tsx
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { hotels } from '@/data/hotels';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h4>{siteConfig.name}</h4>
            <p>{siteConfig.description}</p>
            <p>{siteConfig.address}</p>
          </div>

          <div>
            <h4>Khách sạn</h4>
            <ul className="footer__list">
              {hotels.map((h) => (
                <li key={h.slug}>
                  <Link href={`/khach-san/${h.slug}`}>{h.shortName}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Liên kết</h4>
            <ul className="footer__list">
              <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
              <li><Link href="/nha-hang">Nhà hàng</Link></li>
              <li><Link href="/lien-he">Liên hệ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          © {new Date().getFullYear()} {siteConfig.name}. Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  );
}