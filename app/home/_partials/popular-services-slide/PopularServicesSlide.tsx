"use client";

import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "./PopularServicesSlide.scss";

// Constants
const slides = [
	{
		image: "/images/service_1.png",
		href: "/",
		description: "Add talent to AI",
		service: "AI Artists",
	},
	{
		image: "/images/service_2.png",
		href: "/",
		description: "Share your message",
		service: "Voice Over",
	},
	{
		image: "/images/service_3.png",
		href: "/",
		description: "Engage your audience",
		service: "Video Explainer",
	},
	{
		image: "/images/service_4.png",
		href: "/",
		description: "Build your brand",
		service: "Logo Design",
	},
	{
		image: "/images/service_5.png",
		href: "/",
		description: "Customize your site",
		service: "Wordpress",
	},
	{
		image: "/images/service_1.png",
		href: "/",
		description: "Add talent to AI",
		service: "AI Artists",
	},
	{
		image: "/images/service_2.png",
		href: "/",
		description: "Share your message",
		service: "Voice Over",
	},
	{
		image: "/images/service_3.png",
		href: "/",
		description: "Engage your audience",
		service: "Video Explainer",
	},
	{
		image: "/images/service_4.png",
		href: "/",
		description: "Build your brand",
		service: "Logo Design",
	},
	{
		image: "/images/service_5.png",
		href: "/",
		description: "Customize your site",
		service: "Wordpress",
	},
	{
		image: "/images/service_1.png",
		href: "/",
		description: "Add talent to AI",
		service: "AI Artists",
	},
	{
		image: "/images/service_2.png",
		href: "/",
		description: "Share your message",
		service: "Voice Over",
	},
	{
		image: "/images/service_3.png",
		href: "/",
		description: "Engage your audience",
		service: "Video Explainer",
	},
	{
		image: "/images/service_4.png",
		href: "/",
		description: "Build your brand",
		service: "Logo Design",
	},
	{
		image: "/images/service_5.png",
		href: "/",
		description: "Customize your site",
		service: "Wordpress",
	},
];

const breakpoints = {
	1240: {
		slidesPerView: 5,
		slidesPerGroup: 5,
	},
	1060: {
		slidesPerView: 4,
		slidesPerGroup: 4,
	},
	800: {
		slidesPerView: 3,
		slidesPerGroup: 3,
	},
	600: {
		slidesPerView: 2,
		slidesPerGroup: 2,
	},
};

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function PopularServicesSlide() {
	return (
		<div className="popular-services-slide">
			<div className="container">
				<h2>Popüler Hizmetler</h2>
				<div className="popular-services-slide-swiper">
					<div className="swiper-button swiper-button-prev">
						<FiChevronLeft />
					</div>
					<Swiper
						modules={[Navigation]}
						spaceBetween={30}
						breakpoints={breakpoints}
						loop={true}
						navigation={{
							nextEl: ".swiper-button-next",
							prevEl: ".swiper-button-prev",
						}}>
						{slides.map((slide, index) => (
							<SwiperSlide key={index}>
								<div className="popular-services-slide-item">
									<Link href={slide.href}>
										<div className="service-img">
											<Image
												src={slide.image}
												alt="slide-item"
												width="239"
												height="345"
											/>
										</div>
									</Link>
									<div className="service-info">
										<span className="description">{slide.description}</span>
										<span className="service">{slide.service}</span>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="swiper-button swiper-button-next">
						<FiChevronRight />
					</div>
				</div>
			</div>
		</div>
	);
}
