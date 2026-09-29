import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./CabinetHydeCaseStudy.module.scss";

export const metadata: Metadata = {
	title: "Cabinet Hyde — Étude de cas | Jérémie Garod",
	description:
		"Cabinet Hyde : du suivi sur Excel à une application de gestion RP développée avec React, TypeScript, Vite et Firebase.",
};

const technologies = [
	"React",
	"TypeScript",
	"Vite",
	"CSS natif",
	"Firebase Authentication",
	"Cloud Firestore",
	"Firebase Hosting",
];

const reliability = [
	"Contrôle des droits utilisateurs",
	"Protection contre les stocks négatifs",
	"Traçabilité des mouvements",
	"Cohérence de la trésorerie",
	"Tests des règles métier et des permissions",
];

export default function CabinetHydeCaseStudyPage() {
	return (
		<main className={styles.page}>
			{/* =====================================================
			    NAVIGATION
			===================================================== */}

			<header className={styles.topbar}>
				<Link href="/#projects" className={styles.backLink}>
					<span aria-hidden="true">←</span>
					Retour aux projets
				</Link>

				<a
					href="https://cabinet-hyde-stock.web.app/"
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
			    Fond
			    Décors
			    Contenu
			    Capture + journal
			===================================================== */}

			<section className={styles.hero}>
				<div className={styles.heroBackground} aria-hidden="true" />
				<div className={styles.heroShade} aria-hidden="true" />

				<div className={styles.heroDecorLeft} aria-hidden="true">
					<Image
						src="/images/projects/cabinet-hyde/case-study/hyde-case-decor-left.webp"
						alt=""
						fill
						sizes="32vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.heroDecorRight} aria-hidden="true">
					<Image
						src="/images/projects/cabinet-hyde/case-study/hyde-case-decor-right.webp"
						alt=""
						fill
						sizes="34vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.heroInner}>
					<div className={styles.heroCopy}>
						<h1>
							Cabinet
							<span>Hyde</span>
						</h1>

						<p className={styles.heroClaim}>
							Du suivi sur Excel à une application de gestion RP.
						</p>

						<div className={styles.heroIntro}>
							<p>
								Avant le site, la comptabilité, le suivi des services
								et l’inventaire du Cabinet étaient gérés sur Excel.
							</p>

							<p>
								L’objectif était de réunir ces usages dans un outil
								adapté au quotidien du Cabinet, avec une interface
								inspirée des registres médicaux de 1904.
							</p>
						</div>

						<p className={styles.heroStack}>
							React · TypeScript · Vite · Firebase
						</p>
					</div>

					<div className={styles.heroVisual}>
						<div className={styles.screen}>
							<Image
								src="/images/projects/cabinet-hyde/hyde-home.webp"
								alt="Interface de l’application Cabinet Hyde"
								width={1654}
								height={750}
								preload
								className={styles.screenImage}
								sizes="(max-width: 700px) 92vw, (max-width: 1100px) 80vw, 1000px"
							/>
						</div>

						<div className={styles.journal} aria-hidden="true">
							<Image
								src="/images/projects/cabinet-hyde/hyde-journal.webp"
								alt=""
								fill
								sizes="300px"
								className={styles.journalImage}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* =====================================================
			    BESOINS
			===================================================== */}

			<section className={styles.needsSection}>
				<div className={styles.content}>
					<header className={styles.sectionHeader}>
						<h2>
							Trois usages.
							<span>Un seul outil.</span>
						</h2>

						<p>
							Cabinet Hyde centralise les activités auparavant
							suivies séparément sur Excel.
						</p>
					</header>

					<div className={styles.needs}>
						<article className={styles.need}>
							<h3>Inventaire</h3>

							<div>
								<p>
									Consulter les réserves, ajouter ou retirer du
									matériel et corriger les quantités après un comptage.
								</p>

								<p>
									Chaque mouvement est conservé dans un registre.
									L’Atelier permet également de prévoir les ressources
									nécessaires aux préparations.
								</p>
							</div>
						</article>

						<article className={styles.need}>
							<h3>Services</h3>

							<div>
								<p>
									Démarrer et terminer une prise de service puis
									consulter les durées enregistrées.
								</p>

								<p>
									Le suivi reste disponible après une fermeture
									ou une actualisation du navigateur.
								</p>
							</div>
						</article>

						<article className={styles.need}>
							<h3>Comptabilité</h3>

							<div>
								<p>
									Centraliser la trésorerie et les écritures
									financières du Cabinet.
								</p>

								<p>
									Les comptes autorisés peuvent ajouter, modifier
									ou supprimer une entrée ou une sortie avec mise
									à jour du solde.
								</p>
							</div>
						</article>
					</div>

					<p className={styles.accessText}>
						Certaines informations restent accessibles en consultation
						publique. Les opérations de gestion sont réservées aux
						comptes Médecin et Maintenance.
					</p>
				</div>
			</section>

			{/* =====================================================
			    CONCEPTION
			    Décor ponctuel gauche
			===================================================== */}

			<section className={styles.conceptionSection}>
				<div className={styles.conceptionBackground} aria-hidden="true" />

				<div className={styles.conceptionDecor} aria-hidden="true">
					<Image
						src="/images/projects/cabinet-hyde/case-study/hyde-case-decor-left.webp"
						alt=""
						fill
						sizes="40vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.content}>
					<header className={styles.conceptionHeader}>
						<h2>
							Traduire les usages
							<span>en règles de gestion.</span>
						</h2>

						<p>
							J’ai piloté les évolutions à partir des besoins et
							des retours utilisateurs : préciser les comportements,
							choisir les fonctions utiles et vérifier leur
							fonctionnement.
						</p>
					</header>

					<div className={styles.rules}>
						<article className={styles.rule}>
							<h3>
								Le stock représente ce qui est réellement présent
								au Cabinet.
							</h3>

							<p>
								L’application ne cherche pas à deviner ce que les
								médecins transportent ou fabriquent ailleurs.
								Les réserves correspondent uniquement au matériel
								disponible sur place.
							</p>
						</article>

						<article className={styles.rule}>
							<h3>
								Le stock et la comptabilité restent indépendants.
							</h3>

							<p>
								Un mouvement de matériel ne déclenche pas
								automatiquement une opération financière que
								l’application ne peut pas connaître.
							</p>
						</article>
					</div>

					<p className={styles.statement}>
						L’objectif n’est pas d’automatiser au maximum,
						mais de faire correspondre l’application aux usages réels.
					</p>
				</div>
			</section>

			{/* =====================================================
			    RETOUR UTILISATEUR
			===================================================== */}

			<section className={styles.caseSection}>
				<div className={styles.caseInner}>
					<header className={styles.caseHeader}>
						<h2>
							Un retour concret.
							<span>Une évolution réelle.</span>
						</h2>

						<p>
							Une démonstration a fait apparaître un besoin qui
							n’existait pas encore dans l’application.
						</p>
					</header>

					<div className={styles.caseGrid}>
						<article>
							<h3>Le besoin</h3>

							<strong>
								Une écriture de démonstration devait pouvoir
								être retirée.
							</strong>

							<p>
								La modification existait déjà, mais pas la suppression.
							</p>
						</article>

						<article>
							<h3>La réponse</h3>

							<strong>
								Ajouter une suppression définitive sans
								désynchroniser la trésorerie.
							</strong>

							<p>
								L’action demande le mot de passe du compte connecté.
								L’écriture et son impact financier sont ensuite
								supprimés dans une même transaction.
							</p>
						</article>
					</div>

					<div className={styles.technicalPoint}>
						<p>
							Si l’écriture est modifiée après l’ouverture de la
							confirmation, la suppression est refusée afin que
							l’utilisateur puisse vérifier sa nouvelle version.
						</p>

						<strong>
							Réauthentification · Transaction atomique ·
							Vérification de version
						</strong>
					</div>
				</div>
			</section>

			{/* =====================================================
			    RESULTAT
			    Fond + décor ponctuel droit
			===================================================== */}

			<section className={styles.resultSection}>
				<div className={styles.resultBackground} aria-hidden="true" />

				<div className={styles.resultDecor} aria-hidden="true">
					<Image
						src="/images/projects/cabinet-hyde/case-study/hyde-case-decor-right.webp"
						alt=""
						fill
						sizes="42vw"
						className={styles.decorImage}
					/>
				</div>

				<div className={styles.resultInner}>
					<div className={styles.resultCopy}>
						<h2>
							Une application conçue
							<span>à partir de l’usage.</span>
						</h2>

						<p>
							Cabinet Hyde est aujourd’hui une application déployée
							et utilisée, qui a évolué grâce à des retours concrets.
						</p>

						<p>
							Ce projet m’a permis de travailler au-delà de
							l’apparence d’une interface : comprendre les usages,
							définir les bonnes règles et faire évoluer
							l’expérience sans fragiliser les données.
						</p>

						<div className={styles.actions}>
							<a
								href="https://cabinet-hyde-stock.web.app/"
								target="_blank"
								rel="noopener noreferrer"
								className={styles.primaryAction}
							>
								Voir Cabinet Hyde
								<span aria-hidden="true">↗</span>
							</a>

							<Link
								href="/#projects"
								className={styles.secondaryAction}
							>
								<span aria-hidden="true">←</span>
								Retour aux projets
							</Link>
						</div>
					</div>

					<div className={styles.resultDetails}>
						<h3>Fiabilité</h3>

						<ul>
							{reliability.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>

						<h3 className={styles.techTitle}>
							Technologies
						</h3>

						<p className={styles.techText}>
							{technologies.join(" · ")}
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}