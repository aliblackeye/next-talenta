import Proposition from "./_partials/Proposition";

import "./SellingProposition.scss";

export default function SellingProposition() {
	return (
		<div className="selling-proposition">
			<div className="container">
				<div className="left">
					<h1>En iyi tarafı mı? Her şey.</h1>
					<div className="propositions">
						<Proposition
							title="Bütçenize bağlı kalın"
							description="Her fiyat noktası için doğru hizmeti bulun. Saat ücreti yok, sadece proje bazlı fiyatlandırma var."
						/>
						<Proposition
							title="Kaliteli işleri hızlı bir şekilde yapın"
							description="Dakikalar içinde projenizi yetenekli bir serbest çalışana teslim edin, uzun ömürlü sonuçlar alın."
						/>
						<Proposition
							title="Mutlu olduğunda öde"
							description="Peşin fiyat teklifleri, sürpriz olmadığı anlamına gelir. Ödemeler yalnızca siz onayladığınızda serbest bırakılır."
						/>
						<Proposition
							title="7/24 desteğe güvenin"
							description="24 saat hizmet veren destek ekibimiz her zaman, her yerde yardıma hazırdır."
						/>
					</div>
				</div>
				<div className="right">
					<video
						src="https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7"
						poster=""
						controls
						playsInline
		
						muted></video>
				</div>
			</div>
		</div>
	);
}
