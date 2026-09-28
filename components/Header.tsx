// components/Header.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { hotels } from '@/data/hotels';
import Image from 'next/image'
import logo from '@/assets/images/logo.jpg';
import { Phone } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hotelOpen, setHotelOpen] = useState(false);
  const pathname = usePathname();

  // Tự động đóng menu khi đổi route
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(false);
    setHotelOpen(false);
  }, [pathname]);

  // Khóa scroll body khi menu mở
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Đóng khi bấm Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <Link href="/" className="header__logo">
            <Image
      src={logo}
      width={80}
      height={50}
      alt="NY"
    />
            <span>Ngọc Yến Hotel</span>
          </Link>

          {/* Nav desktop */}
          <nav className="header__nav">
            <Link href="/gioi-thieu">Giới thiệu</Link>

            <div className="nav-item">
              <Link href="/khach-san" className="nav-item__trigger">
                Khách sạn
                <span className="nav-item__caret" aria-hidden="true" />
              </Link>

              <div className="dropdown" role="menu">
                {hotels.map((h) => (
                  <Link
                    key={h.slug}
                    href={`/khach-san/${h.slug}`}
                    className="dropdown__item"
                    role="menuitem"
                  >
                    {h.shortName}
                    {h.address && h.address !== 'Đang cập nhật' && (
                      <small>{h.address}</small>
                    )}
                  </Link>
                ))}
                <div className="dropdown__divider" />
                <Link href="/khach-san" className="dropdown__all">
                  Xem tất cả khách sạn →
                </Link>
              </div>
            </div>

            <Link href="/nha-hang">Nhà hàng</Link>
            <Link href="/lien-he">Liên hệ</Link>
          </nav>

          <div className="header__actions">
            <a href={`tel:${siteConfig.hotline}`} className="header__phone">
  <Phone />
  <span>{siteConfig.hotline}</span>
</a>
            <Link href="/lien-he" className="btn btn-primary">
              Liên hệ
            </Link>

            {/* Nút hamburger – chỉ hiện dưới 900px */}
            <button
              type="button"
              className="header__burger"
              aria-label="Mở menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ===== Mobile drawer ===== */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      >
        <aside
          className="mobile-menu__panel"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mobile-menu__head">
            <span className="mobile-menu__brand">Ngọc Yến</span>
            <button
              type="button"
              className="mobile-menu__close"
              aria-label="Đóng menu"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
          </div>

          <nav className="mobile-menu__nav">
            <Link href="/gioi-thieu" className="mobile-menu__link">
              Giới thiệu
            </Link>

            {/* Accordion Khách sạn */}
            <div className={`mobile-menu__group ${hotelOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="mobile-menu__trigger"
                aria-expanded={hotelOpen}
                onClick={() => setHotelOpen((v) => !v)}
              >
                Khách sạn
                <span className="mobile-menu__caret" aria-hidden="true" />
              </button>

              <div className="mobile-menu__submenu">
                <div className="mobile-menu__submenu-inner">
                  <Link href="/khach-san" className="mobile-menu__sublink">
                    Tất cả khách sạn
                  </Link>
                  {hotels.map((h) => (
                    <Link
                      key={h.slug}
                      href={`/khach-san/${h.slug}`}
                      className="mobile-menu__sublink"
                    >
                      {h.shortName}
                      {h.address && h.address !== 'Đang cập nhật' && (
                        <small>{h.address}</small>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/nha-hang" className="mobile-menu__link">
              Nhà hàng
            </Link>
            <Link href="/lien-he" className="mobile-menu__link">
              Liên hệ
            </Link>
          </nav>

          <div className="mobile-menu__foot">
            <a href={`tel:${siteConfig.hotline}`} className="btn btn-outline">
  <Phone />
  <span>{siteConfig.hotline}</span>
</a>
            <Link href="/lien-he" className="btn btn-primary">
              Gửi yêu cầu
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}