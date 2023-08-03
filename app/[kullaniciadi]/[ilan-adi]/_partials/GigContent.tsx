"use client";

// React
import { useState } from "react";
import { AiOutlineClockCircle, AiOutlineSync } from "react-icons/ai";

// Icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

export default function GigContent() {
	const [showWhatsIncluded, setShowWhatsIncluded] = useState(false);

	return (
		<div className="gig-content">
			<div className="left"></div>
			<div className="right">
				<div className="packages">
					<div className="package-changer">
						<div className="package-changer__item active">Basit</div>
						<div className="package-changer__item">Standart</div>
						<div className="package-changer__item">Premium</div>
					</div>
					<div className="package-details">
						<span className="price">1000 TL</span>
						<span className="description">
							Basit arayüzlü size özel bir sikiş sitesi. 3 Kategoriye kadar
							ücretsiz.
						</span>

						<div className="delivery-details">
							<span className="delivery-time">
								<AiOutlineClockCircle /> 3 Günde Teslim
							</span>
							<span className="revisions">
								<AiOutlineSync /> Sınırsız Revizyon
							</span>
						</div>
						<div
							className="show-whats-included"
							onClick={() => {
								setShowWhatsIncluded((prev) => !prev);
							}}>
							<span className="text">{"Ne içeriyor ?"}</span>
							<span className="icon">
								{showWhatsIncluded ? (
									<BiChevronUp size={24} />
								) : (
									<BiChevronDown size={24} />
								)}
							</span>
						</div>
						{showWhatsIncluded && (
							<ul className="whats-included">
								<li className="included-item active">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item active">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item active">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item active">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
								<li className="included-item">
									<FaCheck /> Sikiş Sitesi
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
