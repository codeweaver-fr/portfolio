import { SceneActivity } from "@/components/motion/SceneActivity";
import { Hero } from "@/components/hero/Hero";
import { PortfolioNav } from "@/components/navigation/PortfolioNav";
import { CabinetHydeSection } from "@/components/projects/cabinet-hyde/CabinetHydeSection";
import InternetSansPiegeSection from "@/components/projects/internet-sans-piege/InternetSansPiegeSection";
import { ProjectTransition } from "@/components/transitions/ProjectTransition";
import ApproachSection from "@/components/approach/ApproachSection";
import PortfolioFooter from "@/components/footer/PortfolioFooter";



export default function Home() {
  return (
    <main id="top">
      <SceneActivity />
      <PortfolioNav />

      <Hero />

      <CabinetHydeSection />

      <ProjectTransition />

      <InternetSansPiegeSection />

	  <ApproachSection />
	  

	  <PortfolioFooter />

    </main>
  );
}
