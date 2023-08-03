"use client";

// Next
import Link from "next/link";

// React
import { useCallback, useEffect, useState } from "react";

// Icons

// Partials
import GigTop from "./_partials/GigTop";
import GigContent from "./_partials/GigContent";

// Styles
import "./Gig.scss";

export type Category = {
	id: number;
	name: string;
	slug: string;
};

export default function Gig() {
	// States
	const [gig, setGig] = useState<any>(null);

	// Variables
	const category = gig?.category;
	const subCategory = gig?.subCategory;
	const field = gig?.field;

	// Effects
	useEffect(() => {
		const fetchGig = async () => {
			// API Call
			const res = await fetch("https://fakefor.me/api/projects/talenta/gig");

			// Get Data
			const { data } = await res.json();

			console.log("Response:", data[0]?.data);
			// Set Gig
			setGig(data[0]?.data);
		};
		fetchGig();
	}, []);

	return (
		<section className="gig">
			<div className="container">
				<GigTop
					category={category}
					subCategory={subCategory}
					field={field}
					isSaved={gig?.isSaved}
					saves={gig?.saves}
				/>
				<GigContent />
			</div>
		</section>
	);
}
