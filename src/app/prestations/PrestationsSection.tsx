"use client";

import Image from "next/image";
import { SceneActivity } from "@/components/motion/SceneActivity";


import {
	AnimatePresence,
	m as motion,
	useReducedMotion,
	useSpring,
	useTransform,
} from "motion/react";
import { useRef, useState } from "react";

import { useSectionScroll } from "@/hooks/useSectionScroll";

import styles from "./PrestationsSection.module.scss";

type Prestation = {
	number: string;
	title: string;
	problem: string;
	description: string;
	price: string;
	items: string[];
};

const prestations: Prestation[] = [
	{
		number: "01",
		title: "Refonte sur mesure",
		problem: "Votre site ne vous ressemble plus.",
		description:
			"Je repense l’interface, la structure et l’expérience pour remettre votre site en phase avec votre activité actuelle.",
		price: "À partir de 1 200 €*",
		items: [
			"Direction visuelle repensée",
			"Structure et parcours",
			"Développement sur mesure",
			"Responsive",
			"Optimisation de l’existant",
		],
	},
	{
		number: "02",
		title: "Création de site sur mesure",
		problem: "Vous n’avez pas encore de vrai site.",
		description:
			"Je construis une présence web pensée autour de votre activité, de votre identité et de ce qui vous différencie.",
		price: "À partir de 1 500 €*",
		items: [
			"Conception de l’interface",
			"Direction visuelle",
			"Développement responsive",
			"Pages essentielles",
			"Mise en ligne",
		],
	},
	{
		number: "03",
		title: "Intégration & développement",
		problem:
			"Vous avez déjà une maquette ou une direction artistique.",
		description:
			"Je transforme votre conception en interface web fonctionnelle, précise, responsive et fidèle à la direction prévue.",
		price: "À partir de 800 €*",
		items: [
			"Intégration fidèle",
			"React / Next.js",
			"Animations",
			"Responsive",
			"Services tiers",
		],
	},
	{
		number: "04",
		title: "Optimisation de l’expérience",
		problem:
			"Votre site manque de clarté, de fluidité ou fonctionne mal sur mobile.",
		description:
			"J’améliore ce qui existe déjà : expérience, lisibilité, comportement responsive, performances et qualité générale.",
		price: "À partir de 300 €*",
		items: [
			"UX / UI",
			"Responsive",
			"Performances",
			"Accessibilité",
			"Corrections ciblées",
		],
	},
];

export function PrestationsSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const reduceMotion = useReducedMotion();

	const { scrollYProgress } = useSectionScroll(sectionRef, ["start end", "end start"], Boolean(reduceMotion));

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 30,
		mass: 0.8,
		restDelta: 0.001,
	});

	const progress = reduceMotion
		? scrollYProgress
		: smoothProgress;

	const backgroundY = useTransform(
		progress,
		[0, 1],
		reduceMotion
			? ["0%", "0%"]
			: ["-2.5%", "2.5%"],
	);

	const backgroundScale = useTransform(
		progress,
		[0, 0.5, 1],
		reduceMotion
			? [1.03, 1.03, 1.03]
			: [1.03, 1.055, 1.08],
	);

	const leftY = useTransform(
		progress,
		[0, 1],
		reduceMotion
			? [0, 0]
			: [70, -85],
	);

	const leftX = useTransform(
		progress,
		[0, 1],
		reduceMotion
			? [0, 0]
			: [-18, 14],
	);

	const rightY = useTransform(
		progress,
		[0, 1],
		reduceMotion
			? [0, 0]
			: [-70, 90],
	);

	const rightX = useTransform(
		progress,
		[0, 1],
		reduceMotion
			? [0, 0]
			: [18, -14],
	);

	const ease = [0.16, 1, 0.3, 1] as const;

	return (
		<section
			ref={sectionRef}
			data-motion-scene
			id="prestations"
			className={styles.section}
		>
			<SceneActivity />
			{/* =====================================================
			    DÉCOR
			===================================================== */}

			<div
				className={styles.decor}
				aria-hidden="true"
			>
				<motion.div
					className={styles.background}
					style={{
						y: backgroundY,
						scale: backgroundScale,
					}}
				>
					<Image src="/images/prestations/prestations-bg.webp" alt="" fill sizes="108vw" preload style={{ objectFit: "cover", objectPosition: "center top" }} />
				</motion.div>

				<div className={styles.backgroundShade} />

				<motion.div
					className={styles.depthLeft}
					style={{
						x: leftX,
						y: leftY,
					}}
				>
					<Image src="/images/prestations/prestations-depth-left.webp" alt="" fill sizes="72vw"  style={{ objectFit: "cover", objectPosition: "left center" }} />
				</motion.div>

				<motion.div
					className={styles.depthRight}
					style={{
						x: rightX,
						y: rightY,
					}}
				>
					<Image src="/images/prestations/prestations-depth-right.webp" alt="" fill sizes="72vw"  style={{ objectFit: "cover", objectPosition: "right center" }} />
				</motion.div>

				<div className={styles.halo} />
				<div className={styles.vignette} />
			</div>

			<div className={styles.inner}>
				{/* =================================================
				    INTRO
				================================================= */}

				<header className={styles.hero}>
					<div className={styles.heroTitle}>
						<motion.div
							className={styles.eyebrow}
							initial={{
								opacity: 0,
								y: reduceMotion ? 0 : 16,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
								amount: 0.5,
							}}
							transition={{
								duration: reduceMotion
									? 0
									: 0.8,
								ease,
							}}
						>
							<span />

							04

							<i />

							Prestations
						</motion.div>

						<motion.h2
							initial={{
								opacity: 0,
								y: reduceMotion ? 0 : 32,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
								amount: 0.35,
							}}
							transition={{
								duration: reduceMotion
									? 0
									: 1,
								delay: reduceMotion
									? 0
									: 0.08,
								ease,
							}}
						>
							<span>
								Votre site devrait
							</span>

							<strong>
								travailler pour vous.
							</strong>
						</motion.h2>
					</div>

					<motion.div
						className={styles.intro}
						initial={{
							opacity: 0,
							x: reduceMotion ? 0 : 26,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{
							once: true,
							amount: 0.5,
						}}
						transition={{
							duration: reduceMotion
								? 0
								: 0.9,
							delay: reduceMotion
								? 0
								: 0.18,
							ease,
						}}
					>
						<span className={styles.introLine} />

						<div>
							<p className={styles.introLead}>
								Un site n’est pas qu’une vitrine.
							</p>

							<p>
								C’est un outil qui doit refléter votre activité,
								être clair, performant et évoluer avec vous.
							</p>
						</div>
					</motion.div>
				</header>

				{/* =================================================
				    PRESTATIONS
				================================================= */}

				<div className={styles.services}>
					{prestations.map((prestation, index) => {
						const isOpen = openIndex === index;

						return (
							<motion.article
								key={prestation.number}
								className={`${styles.service} ${
									isOpen ? styles.serviceOpen : ""
								}`}
								initial={{
									opacity: 0,
									y: reduceMotion ? 0 : 28,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{
									once: true,
									amount: 0.35,
								}}
								transition={{
									duration: reduceMotion
										? 0
										: 0.8,
									delay: reduceMotion
										? 0
										: index * 0.045,
									ease,
								}}
							>
								<button
									type="button"
									className={styles.serviceTrigger}
									onClick={() =>
										setOpenIndex((current) =>
											current === index
												? null
												: index,
										)
									}
									aria-expanded={isOpen}
									aria-controls={`prestation-${index}`}
								>
									<div className={styles.serviceNumber}>
										<span>
											{prestation.number}
										</span>

										<i />
									</div>

									<h3>
										{prestation.title}
									</h3>

									<div className={styles.serviceMeta}>
										<span>
											{prestation.price}
										</span>
									</div>

									<span
										className={styles.rail}
										aria-hidden="true"
									/>

									<span
										className={`${styles.toggle} ${
											isOpen
												? styles.toggleOpen
												: ""
										}`}
										aria-hidden="true"
									>
										<span />
										<span />
									</span>
								</button>

								<AnimatePresence initial={false}>
									{isOpen && (
										<motion.div
											id={`prestation-${index}`}
											className={styles.reveal}
											initial={{
												height: 0,
												opacity: 0,
											}}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{
												height: 0,
												opacity: 0,
											}}
											transition={{
												height: {
													duration:
														reduceMotion
															? 0
															: 0.6,
													ease,
												},
												opacity: {
													duration:
														reduceMotion
															? 0
															: 0.3,
												},
											}}
										>
											<div className={styles.revealInner}>
												<div className={styles.revealProblem}>
													<span>
														Le besoin
													</span>

													<p>
														{prestation.problem}
													</p>
												</div>

												<div className={styles.revealBody}>
													<p>
														{prestation.description}
													</p>

													<ul>
														{prestation.items.map(
															(item) => (
																<li key={item}>
																	<span />

																	{item}
																</li>
															),
														)}
													</ul>
												</div>

												<div className={styles.revealPrice}>
													<span>
														Budget indicatif *
													</span>

													<strong>
														{prestation.price}
													</strong>

													<p>
														Tarif indicatif. Le montant
														final dépend du périmètre,
														des fonctionnalités et des
														besoins spécifiques du projet.
													</p>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.article>
						);
					})}
				</div>

				{/* =================================================
				    MODES D'INTERVENTION
				================================================= */}

				<section className={styles.interventions}>
					<motion.div
						className={styles.interventionTitle}
						initial={{
							opacity: 0,
							y: reduceMotion ? 0 : 24,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{
							once: true,
							amount: 0.4,
						}}
						transition={{
							duration: reduceMotion
								? 0
								: 0.9,
							ease,
						}}
					>
						<span>
							Modes d’intervention
						</span>

						<h3>
							Quelques heures.
							<br />

							<strong>
								Ou plusieurs jours.
							</strong>
						</h3>

						<p>
							Pour une correction, une évolution,
							du développement ou une mission de renfort.
						</p>
					</motion.div>

					<div className={styles.interventionRates}>
						<motion.article
							initial={{
								opacity: 0,
								y: reduceMotion ? 0 : 28,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
								amount: 0.4,
							}}
							transition={{
								duration: reduceMotion
									? 0
									: 0.8,
								ease,
							}}
						>
							<span>
								Ponctuel
							</span>

							<div>
								<strong>
									60 €
								</strong>

								<small>
									/ heure
								</small>
							</div>

							<p>
								Minimum 2 heures
							</p>
						</motion.article>

						<motion.article
							initial={{
								opacity: 0,
								y: reduceMotion ? 0 : 28,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
								amount: 0.4,
							}}
							transition={{
								duration: reduceMotion
									? 0
									: 0.8,
								delay: reduceMotion
									? 0
									: 0.08,
								ease,
							}}
						>
							<span>
								Demi-journée
							</span>

							<div>
								<strong>
									220 €
								</strong>
							</div>

							<p>
								Intervention concentrée
							</p>
						</motion.article>

						<motion.article
							initial={{
								opacity: 0,
								y: reduceMotion ? 0 : 28,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
								amount: 0.4,
							}}
							transition={{
								duration: reduceMotion
									? 0
									: 0.8,
								delay: reduceMotion
									? 0
									: 0.16,
								ease,
							}}
						>
							<span>
								Journée
							</span>

							<div>
								<strong>
									400 €
								</strong>

								<small>
									/ jour
								</small>
							</div>

							<p>
								TJM
							</p>
						</motion.article>

						<motion.article
							initial={{
								opacity: 0,
								y: reduceMotion ? 0 : 28,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{
								once: true,
								amount: 0.4,
							}}
							transition={{
								duration: reduceMotion
									? 0
									: 0.8,
								delay: reduceMotion
									? 0
									: 0.24,
								ease,
							}}
						>
							<span>
								Mission longue
							</span>

							<div>
								<strong>
									Sur devis
								</strong>
							</div>

							<p>
								Plusieurs jours ou besoin récurrent
							</p>
						</motion.article>
					</div>
				</section>

				{/* =================================================
				    FINAL
				================================================= */}

				<motion.div
					className={styles.finalStatement}
					initial={{
						opacity: 0,
						y: reduceMotion ? 0 : 26,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 0.5,
					}}
					transition={{
						duration: reduceMotion
							? 0
							: 0.9,
						ease,
					}}
				>
					<span />

					<p>
						<strong>
							Pas de formule toute faite.
						</strong>

						<em>
							Le périmètre s’adapte au projet,
							pas l’inverse.
						</em>
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default PrestationsSection;
