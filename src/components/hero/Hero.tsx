"use client";

import Image from "next/image";
import {
	m as motion,
	useReducedMotion,
	useSpring,
	useTransform,
} from "motion/react";
import {
	useEffect,
	useRef,
	type PointerEvent,
} from "react";

import { useSectionScroll } from "@/hooks/useSectionScroll";

import { HeroParticles } from "./HeroParticles";

import styles from "./Hero.module.scss";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	const stageRef = useRef<HTMLDivElement>(null);

	const pointerFrame = useRef(0);

	const pointerPosition = useRef({
		x: 0,
		y: 0,
	});

	const reduceMotion = useReducedMotion();

	useEffect(() => {
		return () => {
			cancelAnimationFrame(
				pointerFrame.current,
			);
		};
	}, []);

	const { scrollYProgress } =
		useSectionScroll(
			heroRef,
			[
				"start start",
				"end end",
			],
			Boolean(reduceMotion),
		);

	const smoothProgress =
		useSpring(
			scrollYProgress,
			{
				stiffness: 180,
				damping: 30,
				mass: 0.45,
				restDelta: 0.0005,
			},
		);

	const progress = reduceMotion
		? scrollYProgress
		: smoothProgress;

	/* =====================================================
	   FOND
	===================================================== */

	const backgroundY =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? [0, 0, 0]
				: [0, -14, -32],
		);

	const backgroundScale =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [1.04, 1.04]
				: [1.04, 1.16],
		);

	/* =====================================================
	   SECOND PLAN — GAUCHE
	===================================================== */

	const depthLeftX =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? ["0vw", "0vw", "0vw"]
				: ["0vw", "-3vw", "-8vw"],
		);

	const depthLeftY =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? [0, 0, 0]
				: [0, 16, 34],
		);

	const depthLeftScale =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [1.02, 1.02]
				: [1.02, 1.07],
		);

	/* =====================================================
	   SECOND PLAN — DROITE
	===================================================== */

	const depthRightX =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? ["0vw", "0vw", "0vw"]
				: ["0vw", "3vw", "8vw"],
		);

	const depthRightY =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? [0, 0, 0]
				: [0, 12, 28],
		);

	const depthRightScale =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [1.02, 1.02]
				: [1.02, 1.065],
		);

	const depthOpacity =
		useTransform(
			progress,
			[
				0,
				0.65,
				0.86,
				1,
			],
			[
				0.72,
				0.72,
				0.42,
				0.1,
			],
		);

	/* =====================================================
	   PREMIER PLAN — GAUCHE
	===================================================== */

	const frontLeftX =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? ["0vw", "0vw", "0vw"]
				: ["0vw", "-7vw", "-16vw"],
		);

	const frontLeftY =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? [0, 0, 0]
				: [0, -24, -58],
		);

	const frontLeftScale =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [1.03, 1.03]
				: [1.03, 1.2],
		);

	const frontLeftRotate =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [0, 0]
				: [0, -0.8],
		);

	/* =====================================================
	   PREMIER PLAN — DROITE
	===================================================== */

	const frontRightX =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? ["0vw", "0vw", "0vw"]
				: ["0vw", "7vw", "16vw"],
		);

	const frontRightY =
		useTransform(
			progress,
			[0, 0.65, 1],
			reduceMotion
				? [0, 0, 0]
				: [0, -28, -64],
		);

	const frontRightScale =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [1.03, 1.03]
				: [1.03, 1.2],
		);

	const frontRightRotate =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [0, 0]
				: [0, 0.8],
		);

	const frontOpacity =
		useTransform(
			progress,
			[
				0,
				0.62,
				0.84,
				1,
			],
			[
				0.9,
				0.9,
				0.48,
				0.06,
			],
		);

	/* =====================================================
	   PARTICULES
	===================================================== */

	const particlesY =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [0, 0]
				: [0, -160],
		);

	const particlesX =
		useTransform(
			progress,
			[0, 1],
			reduceMotion
				? [0, 0]
				: [0, 18],
		);

	const particlesNearY = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [0, -280]);
    const particlesScale = useTransform(progress, [0, 1], reduceMotion ? [1, 1] : [1, 1.18]);
    const headlineLeft = useTransform(progress, [0, 0.25, 1], reduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "0vw", "-3vw"]);
    const headlineRight = useTransform(progress, [0, 0.25, 1], reduceMotion ? ["0vw", "0vw", "0vw"] : ["0vw", "0vw", "3vw"]);
    const contentScale = useTransform(progress, [0, 0.3, 1], reduceMotion ? [1, 1, 1] : [1, 1, 0.96]);

    const particlesOpacity =
		useTransform(
			progress,
			[
				0,
				0.68,
				0.9,
				1,
			],
			[
				1,
				1,
				0.65,
				0,
			],
		);

	/* =====================================================
	   CONTENU
	===================================================== */

	const contentY =
		useTransform(
			progress,
			[0, 0.4, 1],
			reduceMotion
				? [0, 0, 0]
				: [0, -18, -130],
		);

	const contentOpacity =
		useTransform(
			progress,
			[
				0,
				0.62,
				0.82,
				1,
			],
			[
				1,
				1,
				0.48,
				0,
			],
		);

	const kickerOpacity =
		useTransform(
			progress,
			[
				0,
				0.64,
				0.83,
			],
			[
				1,
				1,
				0,
			],
		);

	const railOpacity =
		useTransform(
			progress,
			[
				0,
				0.68,
				0.88,
			],
			[
				1,
				1,
				0,
			],
		);

	const scrollOpacity =
		useTransform(
			progress,
			[
				0,
				0.03,
				0.12,
			],
			[
				1,
				0.75,
				0,
			],
		);

	const exitOpacity =
		useTransform(
			progress,
			[
				0,
				0.74,
				0.9,
				1,
			],
			[
				0,
				0,
				0.42,
				1,
			],
		);

	/* =====================================================
	   ENTRÉE
	===================================================== */

	const fadeUp = {
		hidden: {
			opacity: 0,
			y: reduceMotion
				? 0
				: 28,
		},

		show: (delay: number) => ({
			opacity: 1,
			y: 0,

			transition: {
				duration:
					reduceMotion
						? 0
						: 1,

				delay,

				ease: easeOut,
			},
		}),
	};

	const fadeIn = {
		hidden: {
			opacity: 0,
		},

		show: (delay: number) => ({
			opacity: 1,

			transition: {
				duration:
					reduceMotion
						? 0
						: 1.25,

				delay,

				ease: easeOut,
			},
		}),
	};

	/* =====================================================
	   SOURIS
	===================================================== */

	function handlePointerMove(
		event: PointerEvent<HTMLDivElement>,
	) {
		if (
			!stageRef.current ||
			reduceMotion ||
			event.pointerType !== "mouse"
		) {
			return;
		}

		pointerPosition.current = {
			x: event.clientX,
			y: event.clientY,
		};

		if (pointerFrame.current) {
			return;
		}

		pointerFrame.current =
			requestAnimationFrame(
				() => {
					pointerFrame.current = 0;

					if (!stageRef.current) {
						return;
					}

					const rect =
						stageRef.current.getBoundingClientRect();

					const x =
						((pointerPosition.current.x -
							rect.left) /
							rect.width) *
						100;

					const y =
						((pointerPosition.current.y -
							rect.top) /
							rect.height) *
						100;

					const dx =
						(x - 50) * 0.09;

					const dy =
						(y - 50) * 0.07;

					stageRef.current.style.setProperty(
						"--pointer-x",
						`${x}%`,
					);

					stageRef.current.style.setProperty(
						"--pointer-y",
						`${y}%`,
					);

					stageRef.current.style.setProperty(
						"--pointer-dx",
						`${dx}px`,
					);

					stageRef.current.style.setProperty(
						"--pointer-dy",
						`${dy}px`,
					);
				},
			);
	}

	function handlePointerLeave() {
		cancelAnimationFrame(
			pointerFrame.current,
		);

		pointerFrame.current = 0;

		if (!stageRef.current) {
			return;
		}

		stageRef.current.style.setProperty(
			"--pointer-x",
			"65%",
		);

		stageRef.current.style.setProperty(
			"--pointer-y",
			"42%",
		);

		stageRef.current.style.setProperty(
			"--pointer-dx",
			"0px",
		);

		stageRef.current.style.setProperty(
			"--pointer-dy",
			"0px",
		);
	}

	return (
		<section
			ref={heroRef}
			data-motion-scene
			className={styles.hero}
		>
			<div
				ref={stageRef}
				className={styles.stage}
				onPointerMove={handlePointerMove}
				onPointerLeave={handlePointerLeave}
			>
				{/* =================================================
				    FOND
				================================================= */}

				<motion.div
					className={styles.backgroundLayer}
					initial="hidden"
					animate="show"
					custom={0}
					variants={fadeIn}
					style={{
						y: backgroundY,
						scale: backgroundScale,
					}}
					aria-hidden="true"
				>
					<Image
						src="/images/hero/hero-bg.webp"
						alt=""
						fill
						preload
						sizes="(max-width: 760px) 164vw, 108vw"
						className={
							styles.backgroundImage
						}
					/>
				</motion.div>

				{/* =================================================
				    SECOND PLAN GAUCHE
				================================================= */}

				<motion.div
					className={`${styles.depthLayer} ${styles.depthLeft}`}
					initial="hidden"
					animate="show"
					custom={0.08}
					variants={fadeIn}
					style={{
						x: depthLeftX,
						y: depthLeftY,
						scale: depthLeftScale,
						opacity: depthOpacity,
					}}
					aria-hidden="true"
				>
					<Image
						src="/images/hero/hero-depth-left.webp"
						alt=""
						fill
						loading="eager"
						sizes="(max-width: 760px) 110vw, (max-width: 1100px) 62vw, 43vw"
						className={styles.depthImage}
					/>
				</motion.div>

				{/* =================================================
				    SECOND PLAN DROITE
				================================================= */}

				<motion.div
					className={`${styles.depthLayer} ${styles.depthRight}`}
					initial="hidden"
					animate="show"
					custom={0.12}
					variants={fadeIn}
					style={{
						x: depthRightX,
						y: depthRightY,
						scale: depthRightScale,
						opacity: depthOpacity,
					}}
					aria-hidden="true"
				>
					<Image
						src="/images/hero/hero-depth-right.webp"
						alt=""
						fill
						loading="eager"
						sizes="(max-width: 760px) 110vw, (max-width: 1100px) 62vw, 43vw"
						className={styles.depthImage}
					/>
				</motion.div>

				{/* =================================================
				    PARTICULES CSS
				================================================= */}

				<motion.div
                    className={styles.particlesLayer}
                    style={{ x: particlesX, y: particlesY, opacity: particlesOpacity }}
                    aria-hidden="true"
                >
                    <HeroParticles />
                </motion.div>
                <motion.div
                    className={styles.particlesLayer}
                    style={{ y: particlesNearY, scale: particlesScale, opacity: particlesOpacity }}
                    aria-hidden="true"
                >
                    <HeroParticles near />
                </motion.div>

				{/* =================================================
				    PREMIER PLAN GAUCHE
				================================================= */}

				<motion.div
					className={`${styles.frontLayer} ${styles.frontLeft}`}
					initial="hidden"
					animate="show"
					custom={0.16}
					variants={fadeIn}
					style={{
						x: frontLeftX,
						y: frontLeftY,
						scale: frontLeftScale,
						rotate: frontLeftRotate,
						opacity: frontOpacity,
					}}
					aria-hidden="true"
				>
					<Image
						src="/images/hero/hero-front-left.webp"
						alt=""
						fill
						loading="eager"
						sizes="(max-width: 760px) 122vw, (max-width: 1100px) 68vw, 48vw"
						className={styles.frontImage}
					/>
				</motion.div>

				{/* =================================================
				    PREMIER PLAN DROITE
				================================================= */}

				<motion.div
					className={`${styles.frontLayer} ${styles.frontRight}`}
					initial="hidden"
					animate="show"
					custom={0.2}
					variants={fadeIn}
					style={{
						x: frontRightX,
						y: frontRightY,
						scale: frontRightScale,
						rotate: frontRightRotate,
						opacity: frontOpacity,
					}}
					aria-hidden="true"
				>
					<Image
						src="/images/hero/hero-front-right.webp"
						alt=""
						fill
						loading="eager"
						sizes="(max-width: 760px) 122vw, (max-width: 1100px) 68vw, 48vw"
						className={styles.frontImage}
					/>
				</motion.div>

				{/* =================================================
				    ATMOSPHÈRE
				================================================= */}

				<div
					className={styles.atmosphere}
					aria-hidden="true"
				/>

				<div
					className={styles.readability}
					aria-hidden="true"
				/>

				{/* =================================================
				    KICKER
				================================================= */}

				<motion.div
					className={styles.kicker}
					initial="hidden"
					animate="show"
					custom={0.16}
					variants={fadeUp}
					style={{
						opacity: kickerOpacity,
					}}
				>
					<span />

					Création & refonte de
					sites web sur mesure
				</motion.div>

				{/* =================================================
				    TITRE
				================================================= */}

				<motion.div
					className={styles.statement}
					style={{
						y: contentY,
                        scale: contentScale,
						opacity: contentOpacity,
					}}
				>
					<motion.h1
						initial="hidden"
						animate="show"
						custom={0.28}
						variants={fadeUp}
					>
						<motion.span style={{ x: headlineLeft }}
 className={styles.line}
						>
							Votre activité évolue.
						</motion.span>

						<motion.span style={{ x: headlineRight }}
 className={`${styles.line} ${styles.lineTwo}`}
						>
							Votre site{" "}
							<strong
								className={
									styles.inlineAccent
								}
							>
								doit suivre.
							</strong>
						</motion.span>

						<motion.span style={{ x: headlineLeft }}
 className={`${styles.line} ${styles.lineThree}`}
						>
							Je crée et refonds
						</motion.span>

						<motion.span style={{ x: headlineRight }}
 className={styles.line}
						>
							des sites web{" "}
							<strong
								className={
									styles.inlineAccent
								}
							>
								sur mesure,
							</strong>
						</motion.span>

						<motion.span style={{ x: headlineLeft }}
 className={`${styles.line} ${styles.lineAccent}`}
						>
							pensés pour vous
							ressembler.
						</motion.span>
					</motion.h1>
				</motion.div>

				{/* =================================================
				    RAIL DROIT
				================================================= */}

				<motion.aside
					className={styles.sideRail}
					initial="hidden"
					animate="show"
					custom={0.65}
					variants={fadeUp}
					style={{
						opacity: railOpacity,
					}}
				>
					<div className={styles.steps}>
						<span
							className={
								styles.active
							}
						>
							01
						</span>

						<span>02</span>
						<span>03</span>
						<span>04</span>
					</div>

					<a
						href="#projects"
						className={
							styles.projectsLink
						}
					>
						<span>Vers</span>

						<span>
							les projets
						</span>

						<i />
					</a>
				</motion.aside>

				{/* =================================================
				    SCROLL
				================================================= */}

				<motion.div
					className={styles.scrollHint}
					initial="hidden"
					animate="show"
					custom={0.82}
					variants={fadeUp}
					style={{
						opacity: scrollOpacity,
					}}
					aria-hidden="true"
				>
					<span
						className={
							styles.scrollWord
						}
					>
						Scroll
					</span>

					<span
						className={
							styles.scrollLine
						}
					/>

					<span
						className={styles.arrow}
					>
						↓
					</span>
				</motion.div>

				{/* =================================================
				    SORTIE
				================================================= */}

				<motion.div
					className={styles.exitWash}
					style={{
						opacity: exitOpacity,
					}}
					aria-hidden="true"
				/>

                <div className={styles.scrollProgress} aria-hidden="true">
                    <motion.span style={{ scaleX: progress }} />
                </div>

				<div
					className={styles.vignette}
					aria-hidden="true"
				/>

				<div
					className={styles.grain}
					aria-hidden="true"
				/>
			</div>
		</section>
	);
}