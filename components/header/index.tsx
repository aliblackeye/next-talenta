"use client";

// Import React
import { useEffect, useState } from "react";

// Import Next.js
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import Styles
import "./header.scss";

// Import Components
import Button from "@components/button";
import Image from "next/image";

// Type Definitions
type Link = {
  text: string;
  href: string;
};

type MenuItem = {
  text: string;
};

// Constants

const categoriesMenu = [
  {
    text: "Grafik & Tasarım",
    categories: [
      {
        title: "Logo Tasarımı & Marka Kimliği",
        links: [
          { text: "Logo Tasarımı", href: "/logo-tasarimi" },
          { text: "Marka Kimliği", href: "/marka-kimligi" },
        ],
      },
    ],
  },
  {
    text: "Dijital Pazarlama",
    categories: [
      {
        title: "Arama",
        links: [
          { text: "Arama Motoru Optimizasyonu (SEO)", href: "/seo" },
          { text: "Arama Motoru Pazarlaması (SEM)", href: "/sem" },
          { text: "Yerel SEO", href: "/yerel-seo" },
          { text: "E-Ticaret SEO", href: "/e-ticaret-seo" },
          { text: "Video SEO", href: "/video-seo" },
        ],
      },
      {
        title: "Sosyal",
        links: [
          {
            text: "Sosyal Medya Pazarlaması",
            href: "/sosyal-medya-pazarlamasi",
          },
          { text: "Sosyal Medya Yönetimi", href: "/sosyal-medya-yonetimi" },
          {
            text: "Sosyal Medya Reklamcılığı",
            href: "/sosyal-medya-reklamciligi",
          },
          {
            text: "Sosyal Medya Optimizasyonu (SMO)",
            href: "/sosyal-medya-optimizasyonu",
          },
        ],
      },
      {
        title: "Metotlar & Stratejiler",
        links: [
          { text: "İçerik Pazarlaması", href: "/icerik-pazarlamasi" },
          { text: "E-posta Pazarlaması", href: "/e-posta-pazarlamasi" },
          { text: "Pazarlama Stratejisi", href: "/pazarlama-stratejisi" },
          { text: "Pazarlama Planlaması", href: "/pazarlama-planlamasi" },
          { text: "Pazarlama Otomasyonu", href: "/pazarlama-otomasyonu" },
          { text: "Dijital Pazarlama", href: "/dijital-pazarlama" },
          { text: "Pazarlama Araştırması", href: "/pazarlama-arastirmasi" },
        ],
      },
      {
        title: "Analiz & Raporlama",
        links: [
          { text: "Web Analizi", href: "/web-analizi" },
          { text: "Web Trafiği", href: "/web-trafigi" },
          { text: "Pazarlama Tavsiyesi", href: "/pazarlama-tavsiyesi" },
        ],
      },
      {
        title: "Endüstriler & Alanlar",
        links: [
          { text: "Google Ads", href: "/google-ads" },
          { text: "Facebook Ads", href: "/facebook-ads" },
          { text: "Instagram Ads", href: "/instagram-ads" },
          { text: "LinkedIn Ads", href: "/linkedin-ads" },
        ],
      },
      {
        title: "İçerik & Kopya Yazımı",
        links: [
          { text: "Blog Yazımı", href: "/blog-yazimi" },
          { text: "İçerik Yazımı", href: "/icerik-yazimi" },
        ],
      },
    ],
  },
  {
    text: "Eğitim & Öğretim",
    categories: [
      {
        title: "Online Eğitim",
        links: [
          {
            text: "Online Eğitim Platformları",
            href: "/online-egitim-platformlari",
          },
          { text: "Eğitim Teknolojileri", href: "/egitim-teknolojileri" },
          { text: "Eğitim Programları", href: "/egitim-programlari" },
        ],
      },
      {
        title: "Kişisel Gelişim",
        links: [
          {
            text: "Kişisel Gelişim Kitapları",
            href: "/kisisel-gelisim-kitaplari",
          },
          {
            text: "Kişisel Gelişim Eğitimleri",
            href: "/kisisel-gelisim-egitimleri",
          },
        ],
      },
    ],
  },
  // Yeni kategori 1
  {
    text: "Sağlık & Spor",
    categories: [
      {
        title: "Sağlık",
        links: [
          { text: "Beslenme", href: "/beslenme" },
          { text: "Egzersiz", href: "/egzersiz" },
          { text: "Stres Yönetimi", href: "/stres-yonetimi" },
        ],
      },
      {
        title: "Spor",
        links: [
          { text: "Futbol", href: "/futbol" },
          { text: "Basketbol", href: "/basketbol" },
          { text: "Yoga", href: "/yoga" },
        ],
      },
    ],
  },
  // Yeni kategori 2
  {
    text: "Teknoloji",
    categories: [
      {
        title: "Mobil Uygulamalar",
        links: [
          { text: "iOS Uygulamaları", href: "/ios-uygulamalari" },
          { text: "Android Uygulamaları", href: "/android-uygulamalari" },
          {
            text: "Cross-Platform Uygulamalar",
            href: "/cross-platform-uygulamalar",
          },
        ],
      },
      {
        title: "Yapay Zeka",
        links: [
          { text: "Makine Öğrenmesi", href: "/makine-ogrenmesi" },
          { text: "Doğal Dil İşleme", href: "/dogal-dil-isleme" },
          { text: "Görüntü İşleme", href: "/goruntu-isleme" },
        ],
      },
    ],
  },
  // Yeni kategori 3
  {
    text: "Moda",
    categories: [
      {
        title: "Kadın Modası",
        links: [
          { text: "Elbiseler", href: "/elbiseler" },
          { text: "Ayakkabılar", href: "/ayakkabilar" },
          { text: "Aksesuarlar", href: "/aksesuarlar" },
        ],
      },
      {
        title: "Erkek Modası",
        links: [
          { text: "Gömlekler", href: "/gomlekler" },
          { text: "Pantolonlar", href: "/pantolonlar" },
          { text: "Ceketler", href: "/ceketler" },
        ],
      },
    ],
  },
];

export default function Header() {
  // Hooks
  const pathname = usePathname();

  // States
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    firstName: "Ali",
    lastName: "Karagöz",
    isSeller: true,
  });

  // Functions
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  const handleOptions = (e: any) => {
    const target = e.target as HTMLElement;
    if (target.parentElement?.className !== "user") {
      setOpen(false);
    }
  };

  // Effects
  useEffect(() => {
    window.addEventListener("scroll", isActive);
    window.addEventListener("click", handleOptions);

    return () => {
      window.removeEventListener("scroll", isActive);
      window.removeEventListener("click", handleOptions);
    };
  }, []);

  return (
    <header className={active || pathname !== "/" ? "header active" : "header"}>
      <div className="header-container container">
        <Link
          href={"/"}
          className="logo"
        >
          <span className="text">talenta</span>
          <span className="dot"></span>
        </Link>
        <div className="links">
          <Link
            href={"/"}
            key={"/"}
            className="link"
          >
            Talenta Business
          </Link>
          {!currentUser?.isSeller && (
            <Link
              href={"/"}
              key={"/"}
              className="link"
            >
              Satıcı Ol
            </Link>
          )}
          {!currentUser && (
            <Link
              href={"/"}
              key={"/"}
              className="link"
            >
              Giriş Yap
            </Link>
          )}
          {!currentUser && (
            <Button
              status="primary"
              text="Katıl"
            />
          )}
          {currentUser && (
            <div
              className="user"
              onClick={() => setOpen((prev) => !prev)}
            >
              <Image
                src={"https://avatars.githubusercontent.com/u/80913896?v=4"}
                width={30}
                height={30}
                alt="user"
              />
              <span className="first-name">{currentUser?.firstName}</span>
              {open && (
                <div className={`${open ? "options active" : "options"}`}>
                  {currentUser.isSeller && (
                    <>
                      <Link
                        href={"/ilanlarim"}
                        className="link"
                      >
                        İlanlarım
                      </Link>
                      <Link
                        href={"/olustur"}
                        className="link"
                      >
                        İlan Oluştur
                      </Link>
                    </>
                  )}
                  <Link
                    href={"/siparisler"}
                    className="link"
                  >
                    Siparişler
                  </Link>
                  <Link
                    href={"/mesajlar"}
                    className="link"
                  >
                    Mesajlar
                  </Link>
                  <Link
                    href={"/"}
                    className="link"
                  >
                    Çıkış yap
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {(active || pathname !== "/") && (
        <>
          <hr></hr>
          <div className="categories-menu">
            <div className="categories-menu-container container">
              {categoriesMenu.map((c) => (
                <div
                  className="category-menu"
                  key={c.text}
                >
                  {c.text}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
