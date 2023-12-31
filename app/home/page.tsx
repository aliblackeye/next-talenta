// Partials
import Featured from "./_partials/featured/Featured";
import TrustedBy from "./_partials/trusted-by/TrustedBy";
import PopulerServicesSlide from "./_partials/popular-services-slide/PopularServicesSlide";
import SellingProposition from "./_partials/selling-proposition/SellingProposition";

// Components
import GigCard from "@components/gig-card/GigCard";

export default function Home() {
	return (
		<>
			<Featured />
			<TrustedBy />
			<PopulerServicesSlide />
			<SellingProposition />
	
		</>
	);
}
