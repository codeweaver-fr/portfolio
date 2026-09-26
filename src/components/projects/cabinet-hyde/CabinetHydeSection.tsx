"use client";

import Image from "next/image";
import {
	AnimatePresence,
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

import styles from "./CabinetHydeSection.module.scss";

type LightboxImage = "website" | "journal" | null;

export function CabinetHydeSection() {
	const sectionRef = useRef<HTMLElement>(null);

	const [viewer, setViewer] = useState<LightboxImage>(null);
	const [compactMotion, setCompactMotion] = useState(false);

	const prefersReducedMotion = useReducedMotion();
	const noMotion = Boolean(prefersReducedMotion);

	/* =====================================================
	   RESPONSIVE MOTION
	===================================================== */

	useEffect(() => {
		const media = window.matchMedia("(max-width: 1000px)");

		const update = () => {
			setCompactMotion(media.matches);
		};

		update();
		media.addEventListener("change", update);

		return () => {
			media.removeEventListener("change", update);
		};
	}, []);

	/* =====================================================
	   LIGHTBOX
	===================================================== */

	useEffect(() => {
		if (!viewer) {
			document.body.style.overflow = "";
			return;
		}

		document.body.style.overflow = "hidden";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setViewer(null);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [viewer]);

	/* =====================================================
	   SCROLL / PARALLAXE — spring cohérent avec le Hero
	   (critique : suit le scroll sans traîner)
	===================================================== */

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 400,
		damping: 40,
		mass: 1,
		restDelta: 0.0005,
	});

	const backgroundY = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [6, -10] : [22, -36],
	);

	const backgroundScale = useTransform(
		smoothProgress,
		[0, 1],
		noMotion
			? [1.015, 1.015]
			: compactMotion
				? [1.018, 1.028]
				: [1.025, 1.05],
	);

	const leftDecorY = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [4, -8] : [18, -22],
	);

	const rightDecorY = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [6, -11] : [30, -34],
	);

	const websiteY = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [5, -10] : [22, -38],
	);

	const websiteScale = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [1, 1] : compactMotion ? [1, 1.004] : [0.992, 1.012],
	);

	const journalY = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [8, -12] : [38, -54],
	);

	const lightX = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [-4, 8] : [-24, 34],
	);

	const lightOpacity = useTransform(
		smoothProgress,
		[0, 0.5, 1],
		noMotion ? [0.8, 0.8, 0.8] : [0.58, 1, 0.64],
	);

	const sheenX = useTransform(
		smoothProgress,
		[0, 1],
		noMotion ? [0, 0] : compactMotion ? [80, 150] : [90, 420],
	);

	const sheenOpacity = useTransform(
		smoothProgress,
		[0, 0.35, 0.72, 1],
		noMotion
			? [0, 0, 0, 0]
			: compactMotion
				? [0, 0.1, 0.07, 0]
				: [0, 0.25, 0.16, 0],
	);

	/*
	 * Transition Hero -> Cabinet Hyde :
	 * noir au début, puis apparition progressive du bordeaux.
	 */
	const entranceOpacity = useTransform(
		smoothProgress,
		[0, 0.18, 0.38],
		noMotion ? [0, 0, 0] : [1, 0.55, 0],
	);

	/* =====================================================
	   RÉVÉLATIONS AU SCROLL — uniquement opacity, pour ne
	   jamais entrer en conflit avec les MotionValues de
	   parallaxe (y / scale) déjà pilotées par le scroll
	===================================================== */

	const revealTransition = (delay = 0) => ({
		duration: noMotion ? 0 : 0.9,
		delay,
		ease: [0.22, 1, 0.36, 1] as const,
	});

	return (
		<>
			<section
				ref={sectionRef}
				id="projects"
				className={styles.section}
			>
				{/* =================================================
				    01 — TRANSITION HERO -> PROJET
				================================================= */}

				<motion.div
					className={styles.heroTransition}
					style={{ opacity: entranceOpacity }}
					aria-hidden="true"
				/>

				{/* =================================================
				    02 — FOND
				================================================= */}

				<motion.div
					className={styles.background}
					style={{
						y: backgroundY,
						scale: backgroundScale,
					}}
					aria-hidden="true"
				/>

				<div
					className={styles.backgroundShade}
					aria-hidden="true"
				/>

				<div
					className={styles.backgroundGlow}
					aria-hidden="true"
				/>

				{/* =================================================
				    03 — DÉCORS
				================================================= */}

				<motion.div
					className={styles.decorLeft}
					style={{ y: leftDecorY }}
					initial={noMotion ? false : { opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.15 }}
					transition={revealTransition(0.05)}
					aria-hidden="true"
				>
					<Image
						src="/images/projects/cabinet-hyde/hyde-decor-left.webp"
						alt=""
						fill
						sizes="45vw"
						className={styles.decorImage}
					/>
				</motion.div>

				<motion.div
					className={styles.decorRight}
					style={{ y: rightDecorY }}
					initial={noMotion ? false : { opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.15 }}
					transition={revealTransition(0.1)}
					aria-hidden="true"
				>
					<Image
						src="/images/projects/cabinet-hyde/hyde-decor-right.webp"
						alt=""
						fill
						sizes="38vw"
						className={styles.decorImage}
					/>
				</motion.div>

				{/* =================================================
				    04 — MICRO-INDICATEUR PROJET
				================================================= */}

				<motion.div
					className={styles.projectRail}
					initial={noMotion ? false : { opacity: 0, x: 8 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={revealTransition(0.2)}
					aria-hidden="true"
				>
					<span className={styles.projectRailCurrent}>01</span>
					<span className={styles.projectRailSlash}>/</span>
					<span>02</span>
					<i />
					<small>Projets</small>
				</motion.div>

				{/* =================================================
				    05 — CONTENU
				================================================= */}

				<motion.div
					className={styles.content}
					initial={
						noMotion
							? false
							: {
									opacity: 0,
									y: 24,
								}
					}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{
						once: true,
						amount: 0.18,
					}}
					transition={{
						duration: 0.8,
						ease: [0.22, 1, 0.36, 1],
					}}
				>
					<div className={styles.projectIndex}>
						<span>01</span>
						<i />
						<p>Projet sélectionné</p>
						<b />
					</div>

					<header className={styles.heading}>
						<h2>Cabinet Hyde</h2>

						<p>
							Médecins itinérants
							<span>—</span>
							1904
						</p>
					</header>

					<div className={styles.introduction}>
						<p>
							Cabinet Hyde est une expérience web narrative construite
							autour d’un cabinet de médecins itinérants en 1904.
						</p>

						<p>
							L’objectif : prolonger cet univers au-delà d’une simple
							vitrine. Archives, personnages et fragments de récit
							deviennent une navigation à explorer, pensée pour rester
							lisible, responsive et immersive.
						</p>
					</div>

					<div className={styles.separator} aria-hidden="true">
						<span />
						<i />
						<span />
					</div>

					<div className={styles.meta}>
						<div>
							<span>Rôle</span>

							<p>
								Direction visuelle
								<br />
								& Développement
							</p>
						</div>

						<div>
							<span>Stack</span>

							<p>
								Next.js · TypeScript
								<br />
								Firebase Hosting · Firestore
							</p>
						</div>

						<div>
							<span>Focus</span>

							<p>
								Narration immersive
								<br />
								Responsive & interactions
							</p>
						</div>
					</div>

					<a
						href="https://cabinet-hyde-stock.web.app/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.cta}
					>
						<span className={styles.ctaShine} aria-hidden="true" />
						<span>Découvrir le site</span>
						<i aria-hidden="true">↗</i>
					</a>

					<blockquote className={styles.quote}>
						<p>« Soigner, comprendre, transmettre. »</p>
						<footer>— Sélénia</footer>
					</blockquote>
				</motion.div>

				{/* =================================================
				    06 — SITE ENCADRÉ
				================================================= */}

				<motion.button
					type="button"
					className={styles.websiteComposition}
					style={{
						y: websiteY,
						scale: websiteScale,
					}}
					initial={noMotion ? false : { opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.15 }}
					transition={revealTransition(0.15)}
					onClick={() => setViewer("website")}
					aria-label="Agrandir la page d’accueil de Cabinet Hyde"
				>
					<div className={styles.websiteViewport}>
						<Image
							src="/images/projects/cabinet-hyde/hyde-home.webp"
							alt="Page d’accueil du site Cabinet Hyde"
							fill
							sizes="(max-width: 900px) 100vw, 56vw"
							className={styles.websiteImage}
						/>
					</div>

					<Image
						src="/images/projects/cabinet-hyde/hyde-frame.webp"
						alt=""
						fill
						sizes="(max-width: 900px) 100vw, 56vw"
						className={styles.frame}
						aria-hidden="true"
					/>

					<motion.span
						className={styles.frameSheen}
						style={{
							x: sheenX,
							opacity: sheenOpacity,
						}}
						aria-hidden="true"
					/>

					<span className={styles.imageHint}>
						Voir en grand
					</span>
				</motion.button>

				{/* =================================================
				    07 — JOURNAL
				================================================= */}

				<button
					type="button"
					className={styles.journal}
					onClick={() => setViewer("journal")}
					aria-label="Ouvrir et lire le journal de Cabinet Hyde"
				>
					<motion.div
						className={styles.journalFloat}
						style={{ y: journalY }}
						initial={noMotion ? false : { opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true, amount: 0.15 }}
						transition={revealTransition(0.25)}
					>
						<Image
							src="/images/projects/cabinet-hyde/hyde-journal.webp"
							alt="Quelques pages de ma vie en Louisiane, journal de Sélénia"
							width={1024}
							height={1448}
							sizes="(max-width: 800px) 85vw, 48vw"
							className={styles.journalImage}
						/>

						<span className={styles.journalHint}>
							Lire le journal
						</span>
					</motion.div>
				</button>

				{/* =================================================
				    08 — LUMIÈRES / FINITIONS
				================================================= */}

				<motion.div
					className={styles.lightOne}
					style={{
						x: lightX,
						opacity: lightOpacity,
					}}
					aria-hidden="true"
				/>

				<div
					className={styles.lightTwo}
					aria-hidden="true"
				/>

				<div
					className={styles.vignette}
					aria-hidden="true"
				/>

				{/* =================================================
				    09 — PROJET SUIVANT
				================================================= */}

				<a
					href="#internet-sans-piege"
					className={styles.nextProject}
					aria-label="Aller au projet suivant : Internet sans piège"
				>
					<span className={styles.nextProjectIndex}>02</span>

					<span className={styles.nextProjectText}>
						<small>Projet suivant</small>
						<strong>Internet sans piège</strong>
					</span>

					<span
						className={styles.nextProjectArrow}
						aria-hidden="true"
					>
						↓
					</span>
				</a>
			</section>

			{/* =====================================================
			    VIEWER
			===================================================== */}

			<AnimatePresence>
				{viewer && (
					<motion.div
						className={styles.viewer}
						role="dialog"
						aria-modal="true"
						aria-label={
							viewer === "journal"
								? "Journal de Cabinet Hyde"
								: "Page d’accueil de Cabinet Hyde"
						}
						initial={noMotion ? false : { opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.25, ease: "easeOut" }}
						onMouseDown={(event) => {
							if (event.target === event.currentTarget) {
								setViewer(null);
							}
						}}
					>
						<button
							type="button"
							className={styles.viewerClose}
							onClick={() => setViewer(null)}
							aria-label="Fermer"
						>
							<span>Fermer</span>
							<i>×</i>
						</button>

						<motion.div
							className={styles.viewerInner}
							initial={noMotion ? false : { opacity: 0, scale: 0.97 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.97 }}
							transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						>
							{viewer === "website" && (
								<div className={styles.viewerSite}>
									<Image
										src="/images/projects/cabinet-hyde/hyde-home.webp"
										alt="Page d’accueil complète du site Cabinet Hyde"
										width={1654}
										height={750}
										priority
										className={styles.viewerSiteImage}
									/>
								</div>
							)}

							{viewer === "journal" && (
								<div className={styles.viewerJournal}>
									<Image
										src="/images/projects/cabinet-hyde/hyde-journal.webp"
										alt="Journal Quelques pages de ma vie en Louisiane"
										width={1024}
										height={1448}
										priority
										className={styles.viewerJournalImage}
									/>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}