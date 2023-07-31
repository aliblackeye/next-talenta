import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Proposition({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<div className="proposition-item">
			<span>
				<AiOutlineCheckCircle
					size={24}
					color="#14a800"
				/>
				{title}
			</span>
			<p>{description}</p>
		</div>
	);
}
