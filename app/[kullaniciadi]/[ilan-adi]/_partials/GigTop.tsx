// Next
import Link from "next/link";

// React
import { useCallback } from "react";

// Icons
import { BsHouseDoor } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BiSolidShareAlt } from "react-icons/bi";

// Types
import { Category } from "../page";

interface IGigTop {
	category: Category;
	subCategory: Category;
	field: Category;
	isSaved: boolean;
	saves: number;
}

export default function GigTop(props: IGigTop) {
	// Desctructure Props
	const { category, subCategory, field, isSaved, saves } = props;

	// Handlers
	const handleSaveGig = useCallback(() => {
		// API Call
		console.log("Gig Saved");
	}, []);

	return (
		<div className="gig-top">
			<div className="left">
				<Link href={"/"}>
					<BsHouseDoor className="home-icon" />
				</Link>
				<Link href={`/kategoriler/${category?.slug}`}>
					<span className="slash">/</span> {category?.name}
				</Link>{" "}
				<Link
					href={`/kategoriler/${category?.slug}/${subCategory?.slug}`}
					replace>
					<span className="slash">/</span> {subCategory?.name}
				</Link>{" "}
				{field?.name && (
					<Link
						href={`/kategoriler/${category?.slug}/${subCategory?.slug}/${field?.slug}`}
						replace>
						<span className="slash">/</span> {field?.name}
					</Link>
				)}
			</div>
			<div className="right">
				<div className="saves">
					{isSaved ? (
						<AiFillHeart
							size={20}
							className="save-gig-icon saved"
							onClick={handleSaveGig}
						/>
					) : (
						<AiOutlineHeart
							size={20}
							className="save-gig-icon"
							onClick={handleSaveGig}
						/>
					)}
					<span className="save-count">
						{/* her 3 sıfırda 1 nokta */}
						{saves?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
					</span>
				</div>

				<div className="share">
					<BiSolidShareAlt
						size={20}
						className="share-gig-icon"
					/>
				</div>
			</div>
		</div>
	);
}
