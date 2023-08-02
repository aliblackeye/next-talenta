"use client";
import { useEffect, useState } from "react";

// Components
import GigCard, { IGigCard } from "@components/gig-card/GigCard";

// Styles
import "./Gigs.scss";

export default function Gigs() {
	const [gigs, setGigs] = useState<IGigCard[]>([]);

	useEffect(() => {
		const fetchGigs = async () => {
			const res = await fetch("https://fakefor.me/api/projects/talenta/gigs");
			const data = await res.json();
			setGigs(data.data);
		};
		fetchGigs();
	}, []);

	return (
		<section className="gigs">
			<div className="container">
				{gigs?.map((gig, index) => (
					<GigCard
						key={index}
						image={gig.image}
						fullname={gig.fullname}
						description={gig.description}
						price={gig.price}
						href={gig.href}
						purchaseCount={gig.purchaseCount}
						stars={gig.stars}
						avatar={gig.avatar}
					/>
				))}
			</div>
		</section>
	);
}
