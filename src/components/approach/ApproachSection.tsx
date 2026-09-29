"use client";

import Image from "next/image";
import {
	m as motion,
	useReducedMotion,
	useSpring,
	useTransform,
} from "motion/react";
import { useRef, type CSSProperties } from "react";

import { useSectionScroll } from "@/hooks/useSectionScroll";

import styles from "./ApproachSection.module.scss";

const particles = [
	{ left: "3%", size: 3, delay: "0s", duration: "11s", opacity: 0.34 },
	{ left: "6%", size: 5, delay: "2.2s", duration: "15s", opacity: 0.42 },
	{ left: "9%", size: 2, delay: "4.8s", duration: "10s", opacity: 0.28 },
	{ left: "12%", size: 6, delay: "1.1s", duration: "18s", opacity: 0.26 },
	{ left: "16%", size: 4, delay: "6.4s", duration: "13s", opacity: 0.38 },
	{ left: "20%", size: 3, delay: "3.4s", duration: "12s", opacity: 0.34 },
	{ left: "24%", size: 7, delay: "7.1s", duration: "19s", opacity: 0.24 },
	{ left: "28%", size: 3, delay: "0.8s", duration: "11s", opacity: 0.32 },
	{ left: "32%", size: 5, delay: "5.2s", duration: "14s", opacity: 0.38 },
	{ left: "36%", size: 2, delay: "8.4s", duration: "10s", opacity: 0.3 },
	{ left: "40%", size: 6, delay: "1.8s", duration: "17s", opacity: 0.27 },
	{ left: "44%", size: 3, delay: "4.1s", duration: "12s", opacity: 0.36 },
	{ left: "48%", size: 4, delay: "7.6s", duration: "13s", opacity: 0.34 },
	{ left: "52%", size: 8, delay: "2.7s", duration: "20s", opacity: 0.2 },
	{ left: "56%", size: 3, delay: "5.9s", duration: "11s", opacity: 0.34 },
	{ left: "60%", size: 5, delay: "0.5s", duration: "15s", opacity: 0.4 },
	{ left: "64%", size: 2, delay: "3.8s", duration: "10s", opacity: 0.28 },
	{ left: "68%", size: 6, delay: "6.8s", duration: "17s", opacity: 0.26 },
	{ left: "72%", size: 4, delay: "1.4s", duration: "13s", opacity: 0.38 },
	{ left: "76%", size: 3, delay: "4.7s", duration: "12s", opacity: 0.34 },
	{ left: "80%", size: 7, delay: "8.1s", duration: "19s", opacity: 0.22 },
	{ left: "84%", size: 3, delay: "2.3s", duration: "11s", opacity: 0.32 },
	{ left: "88%", size: 5, delay: "5.5s", duration: "14s", opacity: 0.4 },
	{ left: "92%", size: 2, delay: "7.9s", duration: "10s", opacity: 0.3 },
	{ left: "96%", size: 4, delay: "1.9s", duration: "13s", opacity: 0.36 },
];

export default function ApproachSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const reduceMotion = useReducedMotion();

	const { scrollYProgress } = useSectionScroll(sectionRef, ["start end", "end end"], Boolean(reduceMotion));

	const progress = useSpring(scrollYProgress, {
		stiffness: 110,
		damping: 28,
		mass: 0.35,
	});

	const backgroundY = useTransform(progress, [0, 1], ["-2%", "2%"]);
	const backgroundScale = useTransform(progress, [0, 0.5, 1], [1.03, 1, 1.04]);

	const introY = useTransform(progress, [0, 0.28, 0.78, 1], [34, 0, 0, -18]);
	const introOpacity = useTransform(progress, [0, 0.14, 0.88, 1], [0.45, 1, 1, 0.82]);

	const depthLeftY = useTransform(progress, [0, 0.5, 1], [38, 0, -52]);
	const depthLeftX = useTransform(progress, [0, 0.5, 1], [-18, 0, 10]);

	const depthRightY = useTransform(progress, [0, 0.5, 1], [30, 0, -44]);
	const depthRightX = useTransform(progress, [0, 0.5, 1], [18, 0, -10]);

	const fragmentsY = useTransform(progress, [0, 0.5, 1], [40, 0, -48]);
	const fragmentsScale = useTransform(progress, [0, 0.5, 1], [0.99, 1, 1.02]);

	const timelineProgress = useTransform(progress, [0.12, 0.92], [0, 1]);

	const step1Opacity = useTransform(progress, [0.06, 0.16, 1], [0.4, 1, 1]);
	const step1Y = useTransform(progress, [0.06, 0.16], [18, 0]);

	const step2Opacity = useTransform(progress, [0.22, 0.34, 1], [0.36, 1, 1]);
	const step2Y = useTransform(progress, [0.22, 0.34], [18, 0]);

	const step3Opacity = useTransform(progress, [0.4, 0.54, 1], [0.34, 1, 1]);
	const step3Y = useTransform(progress, [0.4, 0.54], [18, 0]);

	const step4Opacity = useTransform(progress, [0.56, 0.72, 1], [0.32, 1, 1]);
	const step4Y = useTransform(progress, [0.56, 0.72], [18, 0]);

	const marker1Border = useTransform(
		progress,
		[0.06, 0.16],
		["rgba(241, 238, 230, 0.26)", "rgba(185, 214, 65, 0.78)"],
	);
	const marker1Bg = useTransform(
		progress,
		[0.06, 0.16],
		["rgba(7, 10, 7, 0.44)", "rgba(26, 34, 12, 0.74)"],
	);
	const marker1Shadow = useTransform(
		progress,
		[0.06, 0.16],
		["0 0 0 rgba(185, 214, 65, 0)", "0 0 32px rgba(185, 214, 65, 0.2)"],
	);
	const marker1Text = useTransform(
		progress,
		[0.06, 0.16],
		["rgba(241, 238, 230, 0.72)", "rgb(185, 214, 65)"],
	);

	const marker2Border = useTransform(
		progress,
		[0.22, 0.34],
		["rgba(241, 238, 230, 0.26)", "rgba(185, 214, 65, 0.78)"],
	);
	const marker2Bg = useTransform(
		progress,
		[0.22, 0.34],
		["rgba(7, 10, 7, 0.44)", "rgba(26, 34, 12, 0.74)"],
	);
	const marker2Shadow = useTransform(
		progress,
		[0.22, 0.34],
		["0 0 0 rgba(185, 214, 65, 0)", "0 0 32px rgba(185, 214, 65, 0.2)"],
	);
	const marker2Text = useTransform(
		progress,
		[0.22, 0.34],
		["rgba(241, 238, 230, 0.72)", "rgb(185, 214, 65)"],
	);

	const marker3Border = useTransform(
		progress,
		[0.4, 0.54],
		["rgba(241, 238, 230, 0.26)", "rgba(185, 214, 65, 0.78)"],
	);
	const marker3Bg = useTransform(
		progress,
		[0.4, 0.54],
		["rgba(7, 10, 7, 0.44)", "rgba(26, 34, 12, 0.74)"],
	);
	const marker3Shadow = useTransform(
		progress,
		[0.4, 0.54],
		["0 0 0 rgba(185, 214, 65, 0)", "0 0 32px rgba(185, 214, 65, 0.2)"],
	);
	const marker3Text = useTransform(
		progress,
		[0.4, 0.54],
		["rgba(241, 238, 230, 0.72)", "rgb(185, 214, 65)"],
	);

	const marker4Border = useTransform(
		progress,
		[0.56, 0.72],
		["rgba(241, 238, 230, 0.26)", "rgba(185, 214, 65, 0.78)"],
	);
	const marker4Bg = useTransform(
		progress,
		[0.56, 0.72],
		["rgba(7, 10, 7, 0.44)", "rgba(26, 34, 12, 0.74)"],
	);
	const marker4Shadow = useTransform(
		progress,
		[0.56, 0.72],
		["0 0 0 rgba(185, 214, 65, 0)", "0 0 32px rgba(185, 214, 65, 0.2)"],
	);
	const marker4Text = useTransform(
		progress,
		[0.56, 0.72],
		["rgba(241, 238, 230, 0.72)", "rgb(185, 214, 65)"],
	);

	return (
		<section
			ref={sectionRef}
			data-motion-scene
			id="approach"
			className={styles.section}
			aria-labelledby="approach-title"
		>
			<motion.div
				className={styles.background}
				aria-hidden="true"
				style={
					reduceMotion
						? undefined
						: {
								y: backgroundY,
								scale: backgroundScale,
							}
				}
			>
				<Image
					src="/images/approach/approach-bg.webp"
					alt=""
					fill
					sizes="100vw"
					className={styles.backgroundImage}
				/>

				<div className={styles.backgroundShade} />
				<div className={styles.backgroundGlow} />
			</motion.div>

			<div
				className={styles.particles}
				aria-hidden="true"
			>
				{particles.map((particle, index) => (
					<span
						key={index}
						className={styles.particle}
						style={
							{
								"--particle-left": particle.left,
								"--particle-size": `${particle.size}px`,
								"--particle-delay": particle.delay,
								"--particle-duration": particle.duration,
								"--particle-opacity": particle.opacity,
							} as CSSProperties
						}
					/>
				))}
			</div>

			<div className={styles.inner}>
				<motion.div
					className={styles.intro}
					style={
						reduceMotion
							? undefined
							: {
									y: introY,
									opacity: introOpacity,
								}
					}
				>
					<div className={styles.eyebrow}>
						<span>03</span>
						<i />
						<p>Approche</p>
					</div>

					<h2 id="approach-title">
						<span>Une idée,</span>
						<span>puis du</span>
						<strong>concret.</strong>
					</h2>

					<p className={styles.lead}>
						Je peux intervenir à différents niveaux selon le projet :
						à partir d’une idée, d’un besoin déjà défini, d’une identité
						existante ou d’une maquette conçue par un designer.
					</p>

					<div className={styles.statement}>
						<span />
						<p>
							De la conception à l’intégration d’une maquette existante,
							je m’adapte au niveau d’intervention dont le projet a
							réellement besoin.
						</p>
					</div>
				</motion.div>

				<div className={styles.timeline}>
					<div
						className={styles.timelineTrack}
						aria-hidden="true"
					>
						<motion.span
							style={
								reduceMotion
									? { scaleY: 1 }
									: { scaleY: timelineProgress }
							}
						/>
					</div>

					<motion.article
						className={styles.step}
						style={
							reduceMotion
								? undefined
								: {
										opacity: step1Opacity,
										y: step1Y,
									}
						}
					>
						<motion.div
							className={styles.stepMarker}
							style={
								reduceMotion
									? undefined
									: {
											borderColor: marker1Border,
											background: marker1Bg,
											boxShadow: marker1Shadow,
										}
							}
						>
							<motion.span
								style={
									reduceMotion
										? undefined
										: { color: marker1Text }
								}
							>
								01
							</motion.span>
						</motion.div>

						<div className={styles.stepContent}>
							<p className={styles.stepLabel}>Écoute & cadrage</p>
							<h3>Comprendre</h3>
							<p>
								Je commence par comprendre le besoin, les objectifs,
								les utilisateurs, les contenus et les contraintes du
								projet.
							</p>
						</div>
					</motion.article>

					<motion.article
						className={styles.step}
						style={
							reduceMotion
								? undefined
								: {
										opacity: step2Opacity,
										y: step2Y,
									}
						}
					>
						<motion.div
							className={styles.stepMarker}
							style={
								reduceMotion
									? undefined
									: {
											borderColor: marker2Border,
											background: marker2Bg,
											boxShadow: marker2Shadow,
										}
							}
						>
							<motion.span
								style={
									reduceMotion
										? undefined
										: { color: marker2Text }
								}
							>
								02
							</motion.span>
						</motion.div>

						<div className={styles.stepContent}>
							<p className={styles.stepLabel}>Direction & création</p>
							<h3>Concevoir ou intégrer</h3>
							<p>
								Si l’interface reste à imaginer, je peux construire une
								proposition visuelle cohérente avec l’identité et les
								objectifs du projet.
							</p>
							<p>
								Si une maquette ou une direction artistique existe déjà,
								je la respecte et la transforme fidèlement en interface
								web fonctionnelle.
							</p>
						</div>
					</motion.article>

					<motion.article
						className={styles.step}
						style={
							reduceMotion
								? undefined
								: {
										opacity: step3Opacity,
										y: step3Y,
									}
						}
					>
						<motion.div
							className={styles.stepMarker}
							style={
								reduceMotion
									? undefined
									: {
											borderColor: marker3Border,
											background: marker3Bg,
											boxShadow: marker3Shadow,
										}
							}
						>
							<motion.span
								style={
									reduceMotion
										? undefined
										: { color: marker3Text }
								}
							>
								03
							</motion.span>
						</motion.div>

						<div className={styles.stepContent}>
							<p className={styles.stepLabel}>Développement</p>
							<h3>Développer</h3>
							<p>
								Je développe une interface responsive, performante et
								maintenable, avec les interactions, fonctionnalités et
								intégrations nécessaires au projet.
							</p>
						</div>
					</motion.article>

					<motion.article
						className={styles.step}
						style={
							reduceMotion
								? undefined
								: {
										opacity: step4Opacity,
										y: step4Y,
									}
						}
					>
						<motion.div
							className={styles.stepMarker}
							style={
								reduceMotion
									? undefined
									: {
											borderColor: marker4Border,
											background: marker4Bg,
											boxShadow: marker4Shadow,
										}
							}
						>
							<motion.span
								style={
									reduceMotion
										? undefined
										: { color: marker4Text }
								}
							>
								04
							</motion.span>
						</motion.div>

						<div className={styles.stepContent}>
							<p className={styles.stepLabel}>Optimisation</p>
							<h3>Affiner</h3>
							<p>
								Responsive, animations, accessibilité, comportements,
								tests et détails : j’ajuste l’expérience jusqu’à obtenir
								un résultat cohérent sur tous les écrans.
							</p>
						</div>
					</motion.article>
				</div>
			</div>

			<motion.div
				className={styles.depthLeft}
				aria-hidden="true"
				style={
					reduceMotion
						? undefined
						: {
								x: depthLeftX,
								y: depthLeftY,
							}
				}
			>
				<Image
					src="/images/approach/approach-depth-left.webp"
					alt=""
					fill
					sizes="(max-width: 700px) 44vw, (max-width: 960px) 34vw, 30vw"
					className={styles.depthImage}
				/>
			</motion.div>

			<motion.div
				className={styles.depthRight}
				aria-hidden="true"
				style={
					reduceMotion
						? undefined
						: {
								x: depthRightX,
								y: depthRightY,
							}
				}
			>
				<Image
					src="/images/approach/approach-depth-right.webp"
					alt=""
					fill
					sizes="(max-width: 700px) 40vw, (max-width: 960px) 30vw, 28vw"
					className={styles.depthImage}
				/>
			</motion.div>

			<motion.div
				className={styles.fragments}
				aria-hidden="true"
				style={
					reduceMotion
						? undefined
						: {
								y: fragmentsY,
								scale: fragmentsScale,
							}
				}
			>
				<Image
					src="/images/approach/approach-fragments.webp"
					alt=""
					fill
					sizes="100vw"
					className={styles.fragmentsImage}
				/>
			</motion.div>

			<div
				className={styles.vignette}
				aria-hidden="true"
			/>
		</section>
	);
}