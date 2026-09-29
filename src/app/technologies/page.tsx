"use client";

import Image from "next/image";
import {
	m as motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { useRef } from "react";
import type { IconType } from "react-icons";

import {
	SiBootstrap,
	SiFirebase,
	SiGit,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiPaypal,
	SiPhp,
	SiReact,
	SiSass,
	SiStripe,
	SiSupabase,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from "react-icons/si";

import {
	FiCheckCircle,
	FiDatabase,
	FiEye,
	FiMonitor,
	FiZap,
} from "react-icons/fi";

import { PortfolioNav } from "@/components/navigation/PortfolioNav";

import styles from "./TechnologiesPage.module.scss";

type Technology = {
	name: string;
	icon: IconType;
	variant:
		| "cyan"
		| "blue"
		| "light"
		| "violet"
		| "orange"
		| "gold"
		| "green"
		| "acid";
};

type TechnologyGroup = {
	number: string;
	title: string;
	description: string;
	items: Technology[];
};

const technologyGroups: TechnologyGroup[] = [
	{
		number: "01",
		title: "Front-end",
		description:
			"Des interfaces modernes, performantes et accessibles, pensées pour une expérience fluide sur tous les appareils.",
		items: [
			{
				name: "React",
				icon: SiReact,
				variant: "cyan",
			},
			{
				name: "JavaScript",
				icon: SiJavascript,
				variant: "gold",
			},
			{
				name: "TypeScript",
				icon: SiTypescript,
				variant: "blue",
			},
			{
				name: "Next.js",
				icon: SiNextdotjs,
				variant: "light",
			},
			{
				name: "Vite",
				icon: SiVite,
				variant: "violet",
			},
			{
				name: "HTML",
				icon: SiHtml5,
				variant: "orange",
			},
			{
				name: "CSS / SCSS",
				icon: SiSass,
				variant: "violet",
			},
			{
				name: "Tailwind",
				icon: SiTailwindcss,
				variant: "cyan",
			},
			{
				name: "Bootstrap",
				icon: SiBootstrap,
				variant: "violet",
			},
		],
	},
	{
		number: "02",
		title: "Data & services",
		description:
			"Des bases côté serveur et des services pour gérer les données, l’authentification, les paiements et les fonctionnalités avancées.",
		items: [
			{
				name: "PHP",
				icon: SiPhp,
				variant: "violet",
			},
			{
				name: "Firebase",
				icon: SiFirebase,
				variant: "orange",
			},
			{
				name: "Firestore",
				icon: FiDatabase,
				variant: "gold",
			},
			{
				name: "Supabase",
				icon: SiSupabase,
				variant: "green",
			},
			{
				name: "Stripe",
				icon: SiStripe,
				variant: "violet",
			},
			{
				name: "PayPal",
				icon: SiPaypal,
				variant: "blue",
			},
		],
	},
	{
		number: "03",
		title: "Qualité & workflow",
		description:
			"Des pratiques pensées pour garder un code maintenable, des projets fiables et une expérience solide dans le temps.",
		items: [
			{
				name: "Git",
				icon: SiGit,
				variant: "orange",
			},
			{
				name: "GitHub",
				icon: SiGithub,
				variant: "light",
			},
			{
				name: "Tests",
				icon: FiCheckCircle,
				variant: "green",
			},
			{
				name: "Responsive",
				icon: FiMonitor,
				variant: "green",
			},
			{
				name: "Accessibilité",
				icon: FiEye,
				variant: "cyan",
			},
			{
				name: "Performance",
				icon: FiZap,
				variant: "acid",
			},
		],
	},
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function TechnologiesPage() {
	const pageRef = useRef<HTMLElement>(null);

	const reduceMotion = useReducedMotion();

	const { scrollYProgress } = useScroll({
		target: pageRef,
		offset: ["start start", "end end"],
	});

	/* =====================================================
	   PARALLAX

	   Fond = lent
	   Lumière = intermédiaire
	   Fragments = premier plan plus marqué
	===================================================== */

	const rawBackgroundY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, 150],
	);

	const rawGlowY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -90],
	);

	const rawFragmentsY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, -220],
	);

	const rawFragmentsScale = useTransform(
		scrollYProgress,
		[0, 1],
		[1.03, 1.09],
	);

	const rawFragmentsRotate = useTransform(
		scrollYProgress,
		[0, 1],
		[0, 1.5],
	);

	const backgroundY = useSpring(
		rawBackgroundY,
		{
			stiffness: 45,
			damping: 24,
			mass: 0.8,
		},
	);

	const glowY = useSpring(
		rawGlowY,
		{
			stiffness: 40,
			damping: 24,
			mass: 0.9,
		},
	);

	const fragmentsY = useSpring(
		rawFragmentsY,
		{
			stiffness: 38,
			damping: 23,
			mass: 0.9,
		},
	);

	const fragmentsScale = useSpring(
		rawFragmentsScale,
		{
			stiffness: 40,
			damping: 25,
		},
	);

	const fragmentsRotate = useSpring(
		rawFragmentsRotate,
		{
			stiffness: 35,
			damping: 25,
		},
	);

	return (
		<>
			<PortfolioNav pageLabel="Technologies" />

			<main
				ref={pageRef}
				id="technologies"
				className={styles.page}
			>
				{/* =================================================
				    SCÈNE / COUCHES
				================================================= */}

				<div
					className={styles.scene}
					aria-hidden="true"
				>
					{/* COUCHE 01 — FOND */}

					<motion.div
						className={styles.backgroundLayer}
						style={{
							y: reduceMotion
								? 0
								: backgroundY,
						}}
					>
						<Image
							src="/images/technologies/technologies-bg.webp"
							alt=""
							fill
							priority
							sizes="100vw"
							className={
								styles.backgroundImage
							}
						/>
					</motion.div>

					{/* COUCHE 02 — PROFONDEUR */}

					<div
						className={
							styles.backgroundShade
						}
					/>

					<div
						className={
							styles.backgroundVignette
						}
					/>

					<motion.div
						className={styles.lightLayer}
						style={{
							y: reduceMotion
								? 0
								: glowY,
						}}
					>
						<span
							className={
								styles.glowOne
							}
						/>

						<span
							className={
								styles.glowTwo
							}
						/>

						<span
							className={
								styles.glowThree
							}
						/>
					</motion.div>

					{/* COUCHE 03 — FRAGMENTS */}

					<motion.div
						className={
							styles.fragmentsLayer
						}
						style={{
							y: reduceMotion
								? 0
								: fragmentsY,

							scale: reduceMotion
								? 1
								: fragmentsScale,

							rotate: reduceMotion
								? 0
								: fragmentsRotate,
						}}
					>
						<Image
							src="/images/technologies/technologies-fragments.webp"
							alt=""
							fill
							priority
							sizes="100vw"
							className={
								styles.fragmentsImage
							}
						/>
					</motion.div>

					{/* COUCHE 04 — GRAIN */}

					<div
						className={
							styles.grain
						}
					/>
				</div>

				{/* =================================================
				    HERO
				================================================= */}

				<section className={styles.hero}>
					<motion.div
						className={
							styles.heroMain
						}
						initial={{
							opacity: 0,
							y: reduceMotion
								? 0
								: 34,
						}}
						animate={{
							opacity: 1,
							y: 0,
						}}
						transition={{
							duration:
								reduceMotion
									? 0
									: 1,
							ease,
						}}
					>
						<div
							className={
								styles.eyebrow
							}
						>
							<span>05</span>

							<i
								aria-hidden="true"
							/>

							<strong>
								Technologies
							</strong>
						</div>

						<h1>
							Des outils
							<span>
								au service de vos
								idées.
							</span>
						</h1>

						<p
							className={
								styles.heroIntro
							}
						>
							Je choisis une stack
							adaptée à chaque projet,
							avec un objectif simple :
							construire un site fiable,
							performant et facile à
							faire évoluer.
						</p>
					</motion.div>

					<motion.aside
						className={
							styles.heroAside
						}
						initial={{
							opacity: 0,
							x: reduceMotion
								? 0
								: 32,
						}}
						animate={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							duration:
								reduceMotion
									? 0
									: 1,
							delay:
								reduceMotion
									? 0
									: 0.2,
							ease,
						}}
					>
						<div
							className={
								styles.asideLine
							}
							aria-hidden="true"
						/>

						<div>
							<strong>
								Les technologies sont
								des moyens, pas une
								contrainte.
							</strong>

							<p>
								Je travaille
								principalement avec
								des technologies
								modernes et éprouvées,
								mais je peux aussi
								intervenir dans un
								environnement
								technique déjà défini.
							</p>
						</div>
					</motion.aside>
				</section>

				{/* =================================================
				    STACK
				================================================= */}

				<section
					className={
						styles.technologies
					}
					aria-label="Technologies utilisées"
				>
					{technologyGroups.map(
						(
							group,
							groupIndex,
						) => (
							<motion.article
								key={
									group.title
								}
								className={
									styles.techGroup
								}
								initial={{
									opacity: 0,
									y: reduceMotion
										? 0
										: 34,
								}}
								whileInView={{
									opacity: 1,
									y: 0,
								}}
								viewport={{
									once: true,
									amount: 0.25,
								}}
								transition={{
									duration:
										reduceMotion
											? 0
											: 0.85,

									delay:
										reduceMotion
											? 0
											: groupIndex *
												0.05,

									ease,
								}}
							>
								<div
									className={
										styles.groupIntro
									}
								>
									<div
										className={
											styles.groupNumber
										}
									>
										<span>
											{
												group.number
											}
										</span>

										<i
											aria-hidden="true"
										/>
									</div>

									<div>
										<h2>
											{
												group.title
											}
										</h2>

										<p>
											{
												group.description
											}
										</p>
									</div>
								</div>

								<div
									className={
										styles.techGrid
									}
								>
									{group.items.map(
										(
											item,
											itemIndex,
										) => {
											const Icon =
												item.icon;

											return (
												<motion.div
													key={
														item.name
													}
													className={
														styles.techCard
													}
													initial={{
														opacity: 0,
														y: reduceMotion
															? 0
															: 18,
													}}
													whileInView={{
														opacity: 1,
														y: 0,
													}}
													viewport={{
														once: true,
														amount: 0.45,
													}}
													transition={{
														duration:
															reduceMotion
																? 0
																: 0.55,

														delay:
															reduceMotion
																? 0
																: itemIndex *
																	0.035,

														ease,
													}}
												>
													<div
														className={[
															styles.techMark,
															styles[
																item
																	.variant
															],
														].join(
															" ",
														)}
														aria-hidden="true"
													>
														<Icon
															size={
																24
															}
														/>
													</div>

													<span>
														{
															item.name
														}
													</span>
												</motion.div>
											);
										},
									)}
								</div>
							</motion.article>
						),
					)}
				</section>

				{/* =================================================
				    PHILOSOPHIE
				================================================= */}

				<section
					className={
						styles.philosophy
					}
				>
					<motion.div
						className={
							styles.philosophyLead
						}
						initial={{
							opacity: 0,
							y: reduceMotion
								? 0
								: 35,
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
							duration:
								reduceMotion
									? 0
									: 0.9,
							ease,
						}}
					>
						<div
							className={
								styles.acidLine
							}
							aria-hidden="true"
						/>

						<div>
							<h2>
								Une stack adaptable,
								<span>
									pour des projets
									différents.
								</span>
							</h2>

							<p>
								Chaque projet a ses
								propres besoins. Je
								sélectionne les
								technologies les plus
								pertinentes selon les
								objectifs, les
								fonctionnalités à
								développer et la
								manière dont le projet
								devra évoluer.
							</p>
						</div>
					</motion.div>

					<motion.div
						className={
							styles.principles
						}
						initial={{
							opacity: 0,
							x: reduceMotion
								? 0
								: 30,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{
							once: true,
							amount: 0.35,
						}}
						transition={{
							duration:
								reduceMotion
									? 0
									: 0.9,
							delay:
								reduceMotion
									? 0
									: 0.1,
							ease,
						}}
					>
						<article>
							<span
								aria-hidden="true"
							>
								◇
							</span>

							<div>
								<h3>
									Souplesse
								</h3>

								<p>
									Je m’adapte à un
									environnement
									technique existant
									si le projet le
									demande.
								</p>
							</div>
						</article>

						<article>
							<span
								aria-hidden="true"
							>
								○
							</span>

							<div>
								<h3>
									Vision long terme
								</h3>

								<p>
									Des choix durables
									pour garder un
									projet clair,
									maintenable et
									facile à faire
									évoluer.
								</p>
							</div>
						</article>

						<article>
							<span
								aria-hidden="true"
							>
								◎
							</span>

							<div>
								<h3>
									Résultat concret
								</h3>

								<p>
									La technologie reste
									au service de la
									performance, de
									l’expérience et des
									objectifs.
								</p>
							</div>
						</article>
					</motion.div>
				</section>

				{/* =================================================
				    FIN
				================================================= */}

				<section className={styles.end}>
					<div
						className={
							styles.endLine
						}
					/>

					<p>
						Un besoin particulier ?

						<a href="/#contact">
							Parlons du projet

							<span
								aria-hidden="true"
							>
								→
							</span>
						</a>
					</p>
				</section>
			</main>
		</>
	);
}