// Next
import Link from "next/link";

// Icons
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";

// Styles
import "./Footer.scss";

const titlesAndLinks = [
	{
		title: "Kategoriler",
		links: [
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
		],
	},
	{
		title: "Hakkımızda",
		links: [
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
		],
	},
	{
		title: "Destek ve Eğitim",
		links: [
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
		],
	},
	{
		title: "Topluluk",
		links: [
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
		],
	},
	{
		title: "İş Çözümleri",
		links: [
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
			{
				text: "Grafik ve Tasarım",
				href: "#",
			},
		],
	},
];

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__top">
					{titlesAndLinks?.map((item: any, index: number) => (
						<div
							className="categories"
							key={index}>
							<h3 className="title">{item.title}</h3>
							<div className="category-links">
								{item?.links?.map((link: any, index: number) => (
									<Link
										className="linkg-item"
										href={link.href}
										key={index}>
										{link.text}
									</Link>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="footer__bottom">
					<div className="left">
						<span className="logo">talenta</span>
					</div>

					<div className="right">
						<div className="socials">
							<Link
								href="https://linkedin.com/in/aliblackeye"
								target="_blank">
								<FaLinkedin size={24} />
							</Link>
							<Link
								href="https://youtube.com/aliblackeye"
								target="_blank">
								<FaYoutube size={24} />
							</Link>
							<Link
								href="https://instagram.com/aliblackeye"
								target="_blank">
								<FaInstagram size={24} />
							</Link>
							<Link
								href="https://github.com/aliblackeye"
								target="_blank">
								<FaGithub size={24} />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
