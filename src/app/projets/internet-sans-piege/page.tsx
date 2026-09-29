import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./InternetSansPiegeCaseStudy.module.scss";

export const metadata: Metadata = {
	title: "Internet Sans Piège — Étude de cas | Jérémie Garod",
	description:
		"Étude de cas Internet Sans Piège : une expérience interactive de sensibilisation aux risques numériques développée avec React et Vite.",
};

const technologies = [
	"React",
	"Vite",
	"CSS",
	"Netlify",
	"Responsive",
];

export default function InternetSansPiegeCaseStudyPage() {
	return (
		<main className={styles.page}>
			{/* =====================================================
			    NAVIGATION
			===================================================== */}

			<header className={styles.topbar}>
				<Link
					href="/#internet-sans-piege"
					className={styles.backLink}
				>
					<span aria-hidden="true">←</span>
					Retour aux projets
				</Link>

				<a
					href="https://internet-sans-piege.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					className={styles.siteLink}
				>
					Voir le site
					<span aria-hidden="true">↗</span>
				</a>
			</header>

			{/* =====================================================
			    HERO
			    fond -> décors -> contenu -> captures
			===================================================== */}

			<section className={styles.hero}>
				<div
					className={styles.heroBackground}
					aria-hidden="true"
				/>

				<div
					className={styles.heroShade}
					aria-hidden="true"
				/>

				<div
					className={styles.heroDecorLeft}
					aria-hidden="true"
				>
					<Image
						src="/images/projects/internet-sans-piege/isp-decor-left.webp"
						alt=""
						fill
						sizes="32vw"
						className={styles.decorImage}
					/>
				</div>

				<div
					className={styles.heroDecorRight}
					aria-hidden="true"
				>
					<Image
						src="/images/projects/internet-sans-piege/isp-decor-right.webp"
						alt=""
						fill
						sizes="28vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.heroInner}>
					<div className={styles.heroCopy}>
						<h1>
							Internet
							<span>Sans Piège</span>
						</h1>

						<p className={styles.heroClaim}>
							Comprendre les risques d’internet en les mettant en
							situation.
						</p>

						<div className={styles.heroIntro}>
							<p>
								Internet Sans Piège est une expérience interactive
								de sensibilisation aux risques numériques.
							</p>

							<p>
								À travers des situations inspirées du quotidien,
								l’utilisateur teste ses réflexes face au phishing,
								aux faux SMS, à l’usurpation d’identité et aux
								réseaux Wi-Fi piégés.
							</p>
						</div>

						<p className={styles.heroStack}>
							React · Vite · Netlify
						</p>
					</div>

					<div className={styles.heroVisual}>
						<div className={styles.mainScreen}>
							<Image
								src="/images/projects/internet-sans-piege/isp-home.webp"
								alt="Page d’accueil d’Internet Sans Piège"
								width={1600}
								height={900}
								preload
								className={styles.screenImage}
								sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 1000px"
							/>
						</div>

						<div className={styles.secondaryScreen}>
							<Image
								src="/images/projects/internet-sans-piege/isp-diagnostic.webp"
								alt="Situation de diagnostic dans Internet Sans Piège"
								width={900}
								height={1100}
								className={styles.screenImage}
								sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 1000px"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    LE BESOIN
			===================================================== */}

			<section className={styles.needSection}>
				<div className={styles.content}>
					<header className={styles.sectionHeader}>
						<h2>
							Des risques courants.
							<span>Une expérience claire.</span>
						</h2>

						<p>
							L’enjeu était de parler de sécurité numérique sans
							transformer le projet en documentation technique.
						</p>
					</header>

					<div className={styles.risks}>
						<article>
							<h3>Phishing</h3>

							<p>
								Apprendre à identifier les messages et les liens
								qui cherchent à récupérer des informations.
							</p>
						</article>

						<article>
							<h3>Faux SMS</h3>

							<p>
								Reconnaître les messages qui utilisent l’urgence ou
								une fausse situation pour pousser à agir.
							</p>
						</article>

						<article>
							<h3>Usurpation</h3>

							<p>
								Repérer les situations où une identité ou un compte
								peut être imité pour tromper l’utilisateur.
							</p>
						</article>

						<article>
							<h3>Wi-Fi piégés</h3>

							<p>
								Comprendre qu’un réseau accessible ne signifie pas
								nécessairement qu’il est sûr.
							</p>
						</article>
					</div>
				</div>
			</section>

			{/* =====================================================
			    EXPERIENCE
			    décor gauche -> contenu -> capture résultats
			===================================================== */}

			<section className={styles.experienceSection}>
				<div
					className={styles.experienceGlow}
					aria-hidden="true"
				/>

				<div
					className={styles.experienceDecor}
					aria-hidden="true"
				>
					<Image
						src="/images/projects/internet-sans-piege/isp-decor-left.webp"
						alt=""
						fill
						sizes="35vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.experienceInner}>
					<div className={styles.experienceCopy}>
						<h2>
							Tester.
							<br />
							Analyser.
							<span>Comprendre.</span>
						</h2>

						<p>
							Le projet ne se contente pas d’expliquer les risques.
							L’utilisateur est placé face à une situation, doit faire
							un choix puis découvre le résultat de son analyse.
						</p>

						<div className={styles.steps}>
							<div>
								<strong>Entrer</strong>

								<p>
									Présenter une situation suffisamment claire pour
									être comprise rapidement.
								</p>
							</div>

							<div>
								<strong>Analyser</strong>

								<p>
									Demander à l’utilisateur d’observer les indices
									avant de choisir sa réponse.
								</p>
							</div>

							<div>
								<strong>Comprendre</strong>

								<p>
									Transformer le résultat en information utile
									plutôt qu’en simple bonne ou mauvaise réponse.
								</p>
							</div>
						</div>
					</div>

					<div className={styles.resultVisual}>
						<Image
							src="/images/projects/internet-sans-piege/isp-results.webp"
							alt="Écran de résultats d’Internet Sans Piège"
							width={1100}
							height={900}
							className={styles.screenImage}
							sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 1000px"
						/>
					</div>
				</div>
			</section>

			{/* =====================================================
			    RESULTAT
			    fond -> décor droit -> contenu
			===================================================== */}

			<section className={styles.resultSection}>
				<div
					className={styles.resultBackground}
					aria-hidden="true"
				/>

				<div
					className={styles.resultDecor}
					aria-hidden="true"
				>
					<Image
						src="/images/projects/internet-sans-piege/isp-decor-right.webp"
						alt=""
						fill
						sizes="38vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.resultInner}>
					<div className={styles.resultCopy}>
						<h2>
							Un outil simple,
							<span>clair et utile.</span>
						</h2>

						<p>
							Internet Sans Piège associe prévention, interaction et
							pédagogie dans une interface pensée pour rester
							compréhensible sur ordinateur comme sur mobile.
						</p>

						<p>
							Ce projet m’a permis de travailler une autre forme
							d’expérience web : moins narrative que Cabinet Hyde,
							mais davantage centrée sur la compréhension,
							l’information et le parcours utilisateur.
						</p>

						<div className={styles.actions}>
							<a
								href="https://internet-sans-piege.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.primaryAction}
							>
								Découvrir le site
								<span aria-hidden="true">↗</span>
							</a>

							<Link
								href="/#internet-sans-piege"
								className={styles.secondaryAction}
							>
								<span aria-hidden="true">←</span>
								Retour aux projets
							</Link>
						</div>
					</div>

					<div className={styles.resultDetails}>
						<h3>Technologies</h3>

						<p className={styles.techList}>
							{technologies.join(" · ")}
						</p>

						<h3 className={styles.focusTitle}>
							Focus
						</h3>

						<ul>
							<li>Pédagogie interactive</li>
							<li>Parcours compréhensible</li>
							<li>Responsive</li>
							<li>Situations inspirées du quotidien</li>
						</ul>
					</div>
				</div>
			</section>
		</main>
	);
}