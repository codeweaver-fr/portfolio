import { Hero } from "@/components/hero/Hero";
import { PortfolioNav } from "@/components/navigation/PortfolioNav";
import { CabinetHydeSection } from "@/components/projects/cabinet-hyde/CabinetHydeSection";

export default function Home() {
	return (
		<main id="top">
			<PortfolioNav />
			<Hero />
			<CabinetHydeSection />
		</main>
	);
}