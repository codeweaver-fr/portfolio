import type { Metadata } from "next";
import { PortfolioNav } from "@/components/navigation/PortfolioNav";
import PrestationsSection from "./PrestationsSection";

export const metadata: Metadata = {
	title: "Prestations — Jérémie Garod, développeur web indépendant",
	description:
		"Création, refonte et développement web sur mesure. Une réponse concrète à vos besoins, de l’identité de votre site aux fonctionnalités métier.",
};

export default function PrestationsPage() {
	return (
		<>
			<PortfolioNav pageLabel="Prestations" />
			<main id="top">
				<PrestationsSection />
			</main>
		</>
	);
}
