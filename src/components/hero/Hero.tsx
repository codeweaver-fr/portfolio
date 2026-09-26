"use client";

import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";
import { useRef, type PointerEvent } from "react";

import styles from "./Hero.module.scss";

export function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	const stageRef = useRef<HTMLDivElement>(null);

	const reduceMotion = useReducedMotion();

	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end end"],
	});

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 400,
		damping: 40,
		mass: 1,
		restDelta: 0.0005,
	});

	const progress = reduceMotion ? scrollYProgress : smoothProgress;

	const timeline = [0, 0.03, 0.64, 1];

	const sceneY = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -68, -96],
	);

	const depthX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -8, -18],
	);

	const depthY = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, 12, 25],
	);

	const depthScale = useTransform(
		progress,
		timeline,
		reduceMotion ? [1.05, 1.05, 1.05, 1.05] : [1.05, 1.05, 1.068, 1.09],
	);

	const depthOpacity = useTransform(
		progress,
		[0, 0.03, 0.66, 0.86, 1],
		[1, 1, 1, 0.76, 0.45],
	);

	const fragmentsX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, 17, 34],
	);

	const fragmentsY = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -18, -36],
	);

	const fragmentsRotate = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, 0.45, 0.9],
	);

	const fragmentsScale = useTransform(
		progress,
		timeline,
		reduceMotion ? [1.02, 1.02, 1.02, 1.02] : [1.02, 1.02, 1.035, 1.052],
	);

	const fragmentsOpacity = useTransform(
		progress,
		[0, 0.03, 0.64, 0.88, 1],
		[0.16, 0.16, 0.19, 0.07, 0],
	);

	const titleX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -4, -9],
	);

	const titleOpacity = useTransform(
		progress,
		[0, 0.03, 0.67, 0.86, 1],
		[1, 1, 1, 0.42, 0],
	);

	const shardOneX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -10, -20],
	);

	const shardOneRotate = useTransform(
		progress,
		timeline,
		reduceMotion ? [-4, -4, -4, -4] : [-4, -4, -4.65, -5.4],
	);

	const shardOneScale = useTransform(
		progress,
		timeline,
		reduceMotion ? [1, 1, 1, 1] : [1, 1, 1.01, 1.02],
	);

	const shardTwoX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, 10, 22],
	);

	const shardTwoRotate = useTransform(
		progress,
		timeline,
		reduceMotion ? [3, 3, 3, 3] : [3, 3, 3.7, 4.4],
	);

	const shardTwoScale = useTransform(
		progress,
		timeline,
		reduceMotion ? [1, 1, 1, 1] : [1, 1, 1.009, 1.018],
	);

	const shardThreeX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, 14, 26],
	);

	const shardThreeRotate = useTransform(
		progress,
		timeline,
		reduceMotion ? [-2, -2, -2, -2] : [-2, -2, -1.1, 0],
	);

	const shardThreeScale = useTransform(
		progress,
		timeline,
		reduceMotion ? [1, 1, 1, 1] : [1, 1, 1.012, 1.022],
	);

	const sweepX = useTransform(
		progress,
		timeline,
		reduceMotion
			? ["55vw", "55vw", "55vw", "55vw"]
			: ["55vw", "55vw", "2vw", "-38vw"],
	);

	const sweepY = useTransform(
		progress,
		timeline,
		reduceMotion
			? ["25vh", "25vh", "25vh", "25vh"]
			: ["25vh", "25vh", "10vh", "-3vh"],
	);

	const sweepRotate = useTransform(
		progress,
		timeline,
		reduceMotion ? [-15, -15, -15, -15] : [-15, -15, -12.5, -10],
	);

	const sweepScale = useTransform(
		progress,
		timeline,
		reduceMotion ? [0.8, 0.8, 0.8, 0.8] : [0.8, 0.8, 1.05, 1.22],
	);

	const sweepOpacity = useTransform(
		progress,
		[0, 0.025, 0.1, 0.58, 0.78, 1],
		[0, 0, 0.55, 0.6, 0.16, 0],
	);

	const fractureX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -15, -30],
	);

	const fractureY = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -7, -14],
	);

	const fractureScaleX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0.85, 0.85, 0.85, 0.85] : [0.85, 0.85, 1.02, 1.1],
	);

	const fractureOpacity = useTransform(
		progress,
		[0, 0.03, 0.62, 0.82, 1],
		[0.45, 0.45, 0.82, 0.18, 0],
	);

	const exitWashOpacity = useTransform(
		progress,
		[0, 0.7, 0.88, 1],
		[0, 0, 0.34, 1],
	);

	const kickerOpacity = useTransform(
		progress,
		[0, 0.03, 0.66, 0.82],
		[1, 1, 0.65, 0],
	);

	const railOpacity = useTransform(
		progress,
		[0, 0.03, 0.69, 0.86],
		[1, 1, 0.68, 0],
	);

	const scrollOpacity = useTransform(progress, [0, 0.025, 0.1], [1, 0.7, 0]);

	/* ======================================================
	   TILT 3D DE LA SCÈNE — profondeur caméra au scroll + souris
	   (angle volontairement très faible, max ~2.6°)
	====================================================== */

	const stageTiltX = useTransform(
		progress,
		timeline,
		reduceMotion ? [0, 0, 0, 0] : [0, 0, -1.4, -2.6],
	);

	const tiltPointerX = useSpring(0, {
		stiffness: 120,
		damping: 18,
		mass: 0.4,
	});

	const tiltPointerY = useSpring(0, {
		stiffness: 120,
		damping: 18,
		mass: 0.4,
	});

	/* ======================================================
	   ENTRÉE AU MONTAGE
	====================================================== */

	const easeOut = [0.16, 1, 0.3, 1] as const;

	const fadeUp = {
		hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
		show: (delay: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: reduceMotion ? 0 : 1, delay, ease: easeOut },
		}),
	};

	const fadeIn = {
		hidden: { opacity: 0 },
		show: (delay: number) => ({
			opacity: 1,
			transition: { duration: reduceMotion ? 0 : 1.2, delay, ease: easeOut },
		}),
	};

	function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
		if (!stageRef.current || reduceMotion) {
			return;
		}

		const rect = stageRef.current.getBoundingClientRect();

		const x = ((event.clientX - rect.left) / rect.width) * 100;
		const y = ((event.clientY - rect.top) / rect.height) * 100;

		const dx = (x - 50) * 0.085;
		const dy = (y - 50) * 0.07;

		stageRef.current.style.setProperty("--pointer-x", `${x}%`);
		stageRef.current.style.setProperty("--pointer-y", `${y}%`);
		stageRef.current.style.setProperty("--pointer-dx", `${dx}px`);
		stageRef.current.style.setProperty("--pointer-dy", `${dy}px`);

		tiltPointerY.set((x - 50) * -0.03);
		tiltPointerX.set((y - 50) * 0.025);
	}

	function handlePointerLeave() {
		if (!stageRef.current) {
			return;
		}

		stageRef.current.style.setProperty("--pointer-x", "70%");
		stageRef.current.style.setProperty("--pointer-y", "38%");
		stageRef.current.style.setProperty("--pointer-dx", "0px");
		stageRef.current.style.setProperty("--pointer-dy", "0px");

		tiltPointerX.set(0);
		tiltPointerY.set(0);
	}

	return (
		<section ref={heroRef} className={styles.hero}>
			<div
				ref={stageRef}
				className={styles.stage}
				onPointerMove={handlePointerMove}
				onPointerLeave={handlePointerLeave}
			>
				<motion.div
					style={{
						rotateX: reduceMotion ? 0 : stageTiltX,
						rotateY: reduceMotion ? 0 : tiltPointerY,
						transformPerspective: 1400,
						transformStyle: "preserve-3d",
						width: "100%",
						height: "100%",
					}}
				>
					<motion.div
						className={styles.depthLayer}
						initial="hidden"
						animate="show"
						custom={0}
						variants={fadeIn}
						style={{
							x: depthX,
							y: depthY,
							scale: depthScale,
							opacity: depthOpacity,
						}}
						aria-hidden="true"
					/>

					<motion.div
						className={styles.fragmentsLayer}
						style={{
							x: fragmentsX,
							y: fragmentsY,
							rotate: fragmentsRotate,
							scale: fragmentsScale,
							opacity: fragmentsOpacity,
						}}
						aria-hidden="true"
					/>

					<div className={styles.atmosphere} aria-hidden="true" />
					<div className={styles.readability} aria-hidden="true" />

					<motion.div
						className={styles.kicker}
						initial="hidden"
						animate="show"
						custom={0.15}
						variants={fadeUp}
						style={{ opacity: kickerOpacity }}
					>
						<span />
						Création & refonte de sites web
					</motion.div>

					<motion.div
						className={styles.statement}
						initial="hidden"
						animate="show"
						custom={0.3}
						variants={fadeUp}
						style={{ x: titleX, y: sceneY, opacity: titleOpacity }}
					>
						<h1>
							<span className={styles.line}>Je conçois et développe</span>
							<span className={`${styles.line} ${styles.lineTwo}`}>
								des sites web{" "}
								<strong className={styles.inlineAccent}>sur mesure,</strong>
							</span>
							<span className={`${styles.line} ${styles.lineThree}`}>
								pensés comme de vraies
							</span>
							<span className={`${styles.line} ${styles.lineAccent}`}>
								expériences numériques.
							</span>
						</h1>
					</motion.div>

					<motion.div
						className={`${styles.glassShard} ${styles.shardOne}`}
						initial="hidden"
						animate="show"
						custom={0.45}
						variants={fadeIn}
						style={{
							x: shardOneX,
							y: sceneY,
							rotate: shardOneRotate,
							scale: shardOneScale,
						}}
						aria-hidden="true"
					>
						<div className={styles.glassSurface}>
							<div className={styles.glassReflection} />
							<div className={styles.glassEdge} />
						</div>
					</motion.div>

					<motion.div
						className={`${styles.glassShard} ${styles.shardTwo}`}
						initial="hidden"
						animate="show"
						custom={0.55}
						variants={fadeIn}
						style={{
							x: shardTwoX,
							y: sceneY,
							rotate: shardTwoRotate,
							scale: shardTwoScale,
						}}
						aria-hidden="true"
					>
						<div className={styles.glassSurface}>
							<div className={styles.glassReflection} />
							<div className={styles.glassEdge} />
						</div>
					</motion.div>

					<motion.div
						className={`${styles.glassShard} ${styles.shardThree}`}
						initial="hidden"
						animate="show"
						custom={0.65}
						variants={fadeIn}
						style={{
							x: shardThreeX,
							y: sceneY,
							rotate: shardThreeRotate,
							scale: shardThreeScale,
						}}
						aria-hidden="true"
					>
						<div className={styles.glassSurface}>
							<div className={styles.glassReflection} />
							<div className={styles.glassEdge} />
						</div>
					</motion.div>

					<motion.div
						className={styles.lightSweep}
						style={{
							x: sweepX,
							y: sweepY,
							rotate: sweepRotate,
							scale: sweepScale,
							opacity: sweepOpacity,
						}}
						aria-hidden="true"
					/>

					<motion.div
						className={styles.orangeFracture}
						style={{
							x: fractureX,
							y: fractureY,
							scaleX: fractureScaleX,
							opacity: fractureOpacity,
						}}
						aria-hidden="true"
					>
						<span />
					</motion.div>

					<motion.aside
						className={styles.sideRail}
						initial="hidden"
						animate="show"
						custom={0.75}
						variants={fadeUp}
						style={{ opacity: railOpacity }}
					>
						<div className={styles.steps}>
							<span className={styles.active}>01</span>
							<span>02</span>
							<span>03</span>
							<span>04</span>
						</div>

						<a href="#projects" className={styles.projectsLink}>
							<span>Vers</span>
							<span>les projets</span>
							<i />
						</a>
					</motion.aside>

					<motion.div
						className={styles.scrollHint}
						initial="hidden"
						animate="show"
						custom={0.9}
						variants={fadeUp}
						style={{ opacity: scrollOpacity }}
						aria-hidden="true"
					>
						<span className={styles.scrollWord}>Scroll</span>
						<span className={styles.scrollLine} />
						<span className={styles.arrow}>↓</span>
					</motion.div>

					<motion.div
						className={styles.exitWash}
						style={{ opacity: exitWashOpacity }}
						aria-hidden="true"
					/>

					<div className={styles.vignette} aria-hidden="true" />
					<div className={styles.grain} aria-hidden="true" />
				</motion.div>
			</div>
		</section>
	);
}