"use client";

// Import React
import { useCallback, useEffect, useState } from "react";

// Import Next.js
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import Components
import Button from "@components/button";
import Image from "next/image";

// Import Styles
import "./Header.scss";

// Type Definitions
type Link = {
	text: string;
	href: string;
};

type CategoryMenu = {
	text: string;
	categories: {
		title: string;
		links: Link[];
	}[];
};

type CurrentUser = {
	id: string | number;
	firstName: string;
	lastName: string;
	isSeller: boolean;
};

// Constants
const categoriesMenu: CategoryMenu[] = [
	{
		text: "Grafik & Tasarım",
		categories: [
			{
				title: "Logo Tasarımı & Marka Kimliği",
				links: [
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
				],
			},
			{
				title: "Logo Tasarımı & Marka Kimliği",
				links: [
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
				],
			},
			{
				title: "Logo Tasarımı & Marka Kimliği",
				links: [
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
				],
			},
			{
				title: "Logo Tasarımı & Marka Kimliği",
				links: [
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
				],
			},
			{
				title: "Logo Tasarımı & Marka Kimliği",
				links: [
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
					{ text: "Logo Tasarımı", href: "/kategoriler/logo-tasarimi" },
					{ text: "Marka Kimliği", href: "/kategoriler/marka-kimligi" },
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
					{
						text: "Arama Motoru Optimizasyonu (SEO)",
						href: "/kategoriler/seo",
					},
					{ text: "Arama Motoru Pazarlaması (SEM)", href: "/kategoriler/sem" },
					{ text: "Yerel SEO", href: "/kategoriler/yerel-seo" },
					{ text: "E-Ticaret SEO", href: "/kategoriler/e-ticaret-seo" },
					{ text: "Video SEO", href: "/kategoriler/video-seo" },
				],
			},
			{
				title: "Sosyal",
				links: [
					{
						text: "Sosyal Medya Pazarlaması",
						href: "/kategoriler/sosyal-medya-pazarlamasi",
					},
					{
						text: "Sosyal Medya Yönetimi",
						href: "/kategoriler/sosyal-medya-yonetimi",
					},
					{
						text: "Sosyal Medya Reklamcılığı",
						href: "/kategoriler/sosyal-medya-reklamciligi",
					},
					{
						text: "Sosyal Medya Optimizasyonu (SMO)",
						href: "/kategoriler/sosyal-medya-optimizasyonu",
					},
				],
			},
			{
				title: "Metotlar & Stratejiler",
				links: [
					{
						text: "İçerik Pazarlaması",
						href: "/kategoriler/icerik-pazarlamasi",
					},
					{
						text: "E-posta Pazarlaması",
						href: "/kategoriler/e-posta-pazarlamasi",
					},
					{
						text: "Pazarlama Stratejisi",
						href: "/kategoriler/pazarlama-stratejisi",
					},
					{
						text: "Pazarlama Planlaması",
						href: "/kategoriler/pazarlama-planlamasi",
					},
					{
						text: "Pazarlama Otomasyonu",
						href: "/kategoriler/pazarlama-otomasyonu",
					},
					{ text: "Dijital Pazarlama", href: "/kategoriler/dijital-pazarlama" },
					{
						text: "Pazarlama Araştırması",
						href: "/kategoriler/pazarlama-arastirmasi",
					},
				],
			},
			{
				title: "Analiz & Raporlama",
				links: [
					{ text: "Web Analizi", href: "/kategoriler/web-analizi" },
					{ text: "Web Trafiği", href: "/kategoriler/web-trafigi" },
					{
						text: "Pazarlama Tavsiyesi",
						href: "/kategoriler/pazarlama-tavsiyesi",
					},
				],
			},
			{
				title: "Endüstriler & Alanlar",
				links: [
					{ text: "Google Ads", href: "/kategoriler/google-ads" },
					{ text: "Facebook Ads", href: "/kategoriler/facebook-ads" },
					{ text: "Instagram Ads", href: "/kategoriler/instagram-ads" },
					{ text: "LinkedIn Ads", href: "/kategoriler/linkedin-ads" },
				],
			},
			{
				title: "İçerik & Kopya Yazımı",
				links: [
					{ text: "Blog Yazımı", href: "/kategoriler/blog-yazimi" },
					{ text: "İçerik Yazımı", href: "/kategoriler/icerik-yazimi" },
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
						href: "/kategoriler/online-egitim-platformlari",
					},
					{
						text: "Eğitim Teknolojileri",
						href: "/kategoriler/egitim-teknolojileri",
					},
					{
						text: "Eğitim Programları",
						href: "/kategoriler/egitim-programlari",
					},
				],
			},
			{
				title: "Kişisel Gelişim",
				links: [
					{
						text: "Kişisel Gelişim Kitapları",
						href: "/kategoriler/kisisel-gelisim-kitaplari",
					},
					{
						text: "Kişisel Gelişim Eğitimleri",
						href: "/kategoriler/kisisel-gelisim-egitimleri",
					},
				],
			},
		],
	},
	{
		text: "Sağlık & Spor",
		categories: [
			{
				title: "Sağlık",
				links: [
					{ text: "Beslenme", href: "/kategoriler/beslenme" },
					{ text: "Egzersiz", href: "/kategoriler/egzersiz" },
					{ text: "Stres Yönetimi", href: "/kategoriler/stres-yonetimi" },
				],
			},
			{
				title: "Spor",
				links: [
					{ text: "Futbol", href: "/kategoriler/futbol" },
					{ text: "Basketbol", href: "/kategoriler/basketbol" },
					{ text: "Yoga", href: "/kategoriler/yoga" },
				],
			},
		],
	},
	{
		text: "Teknoloji",
		categories: [
			{
				title: "Mobil Uygulamalar",
				links: [
					{ text: "iOS Uygulamaları", href: "/kategoriler/ios-uygulamalari" },
					{
						text: "Android Uygulamaları",
						href: "/kategoriler/android-uygulamalari",
					},
					{
						text: "Cross-Platform Uygulamalar",
						href: "/kategoriler/cross-platform-uygulamalar",
					},
				],
			},
			{
				title: "Yapay Zeka",
				links: [
					{ text: "Makine Öğrenmesi", href: "/kategoriler/makine-ogrenmesi" },
					{ text: "Doğal Dil İşleme", href: "/kategoriler/dogal-dil-isleme" },
					{ text: "Görüntü İşleme", href: "/kategoriler/goruntu-isleme" },
				],
			},
		],
	},
	{
		text: "Moda",
		categories: [
			{
				title: "Kadın Modası",
				links: [
					{ text: "Elbiseler", href: "/kategoriler/elbiseler" },
					{ text: "Ayakkabılar", href: "/kategoriler/ayakkabilar" },
					{ text: "Aksesuarlar", href: "/kategoriler/aksesuarlar" },
				],
			},
			{
				title: "Erkek Modası",
				links: [
					{ text: "Gömlekler", href: "/kategoriler/gomlekler" },
					{ text: "Pantolonlar", href: "/kategoriler/pantolonlar" },
					{ text: "Ceketler", href: "/kategoriler/ceketler" },
				],
			},
		],
	},
];

export default function Header() {
	// Hooks
	const pathname = usePathname();

	const user = {
		id: 1,
		firstName: "Ali",
		lastName: "Karagöz",
		isSeller: true,
	};

	// States
	const [active, setActive] = useState(false);
	const [open, setOpen] = useState(false);
	const [currentUser, setCurrentUser] = useState<null | CurrentUser>(user);
	const [activeCategory, setActiveCategory] = useState<CategoryMenu | null>(
		null
	);

	// Functions
	const isActive = useCallback(() => {
		window.scrollY > 0 ? setActive(true) : setActive(false);
	}, []);

	const handleOptions = useCallback((e: any) => {
		const target = e.target as HTMLElement;
		if (target.parentElement?.className !== "user") {
			setOpen(false);
		}
	}, []);

	const handleMouseOverCategory = useCallback((e: any) => {
		const target = e.target as HTMLElement;
		const unwantedClasses = [
			"categories-menu",
			"links",
			"category-list",
			"categories-wrapper",
			"categories-container",
		];

		if (
			!unwantedClasses.some((className) =>
				target.parentElement?.classList.contains(className)
			)
		) {
			setActiveCategory(null);
		}
	}, []);

	// Effects
	useEffect(() => {
		window.addEventListener("scroll", isActive);
		window.addEventListener("click", handleOptions);
		window.addEventListener("mouseover", handleMouseOverCategory);

		return () => {
			window.removeEventListener("scroll", isActive);
			window.removeEventListener("click", handleOptions);
			window.removeEventListener("mouseover", handleMouseOverCategory);
		};
	}, []);

	return (
		<header className={active || pathname !== "/" ? "header active" : "header"}>
			<div className="header-container container">
				<Link
					href={"/"}
					className="logo">
					<span className="text">talenta</span>
					<span className="dot"></span>
				</Link>
				<div className="links">
					<Link
						href={"/"}
						key={"/"}
						className="link">
						Talenta Business
					</Link>
					{!currentUser?.isSeller && (
						<Link
							href={"/"}
							key={"/"}
							className="link">
							Satıcı Ol
						</Link>
					)}
					{!currentUser && (
						<Link
							href={"/"}
							key={"/"}
							className="link">
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
							onClick={() => setOpen((prev) => !prev)}>
							<Image
								src={"https://avatars.githubusercontent.com/u/80913896?v=4"}
								width={30}
								height={30}
								alt="user"
							/>

							{open && (
								<div className={`${open ? "options active" : "options"}`}>
									{currentUser.isSeller && (
										<>
											<Link
												href={"/ilanlarim"}
												className="link">
												İlanlarım
											</Link>
											<Link
												href={"/olustur"}
												className="link">
												İlan Oluştur
											</Link>
										</>
									)}
									<Link
										href={"/siparisler"}
										className="link">
										Siparişler
									</Link>
									<Link
										href={"/mesajlar"}
										className="link">
										Mesajlar
									</Link>
									<Link
										href={"/"}
										className="link">
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
					<hr />
					<div className="categories-menu container">
						{categoriesMenu.map((c, index) => (
							<div
								className="category-menu"
								key={index}
								onMouseEnter={() => setActiveCategory(c)}>
								{c.text}
							</div>
						))}
					</div>
					<hr />
				</>
			)}
			{(active || pathname !== "/") && activeCategory && (
				<div className="categories-wrapper">
					<div className="categories-container container">
						{activeCategory?.categories?.map((c: any, index: any) => (
							<div
								key={index}
								className="category-list">
								<div className="title">{c.title}</div>
								<div className="links">
									{c.links.map((l: any, index: any) => (
										<Link
											href={l.href}
											key={index}
											className="link-item">
											{l.text}
										</Link>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</header>
	);
}
