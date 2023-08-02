// Next
import Link from "next/link";
import Image from "next/image";

// Icons
import { FaStar } from "react-icons/fa6";

// Styles
import "./GigCard.scss";

export interface IGigCard {
	avatar: string;
	fullname: string;
	description: string;
	stars: number;
	purchaseCount: number;
	price: number;
	href: string;
	image: string;
}

export default function GigCard(props: IGigCard) {
	// Props
	const {
		fullname,
		description,
		stars,
		purchaseCount,
		price,
		href,
		avatar,
		image,
	} = props;

	return (
		<div className="gig-card">
			<Link
				className="card-img"
				href={href}>
				<Image
					src={image}
					alt="image"
					width={1920}
					height={1080}
				/>
			</Link>
			<div className="card-top">
				<Image
					src={avatar}
					className="profile-img"
					alt="avatar"
					width={24}
					height={24}
				/>

				<h4>{fullname}</h4>
			</div>
			<Link
				className="card-description"
				href={href}>
				{description}
			</Link>
			<div className="card-bottom">
				<div className="stars">
					<FaStar /> {stars} ({purchaseCount.toFixed(1)})
				</div>
				<div className="price">Price: {price} TRY</div>
			</div>
		</div>
	);
}
