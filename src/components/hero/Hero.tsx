"use client";

import {
	motion,
	useReducedMotion,
	useScroll,
	useTransform,
} from "motion/react";
import { useRef } from "react";
import styles from "./Hero.module.css";

export function Hero() {
	const sectionRef = useRef<HTMLElement>(null);
	const reduceMotion = useReducedMotion();

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end start"],
	});

	const titleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90]);
	const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

	const planeOneY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, reduceMotion ? 0 : -140],
	);

	const planeTwoY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, reduceMotion ? 0 : 190],
	);

	const planeThreeY = useTransform(
		scrollYProgress,
		[0, 1],
		[0, reduceMotion ? 0 : -75],
	);

	const wordX = useTransform(
		scrollYProgress,
		[0, 1],
		[0, reduceMotion ? 0 : -110],
	);

	return (
		<section ref={sectionRef} className={styles.hero}>
			<div className={styles.topbar}>
				<a className={styles.name} href="/">
					Jérémie Garod
				</a>

				<a className={styles.contact} href="mailto:contact@jeremiegarod.fr">
					Me contacter
				</a>
			</div>

			<div className={styles.stage}>
				<motion.div
					className={`${styles.plane} ${styles.planeOne}`}
					style={{ y: planeOneY }}
					aria-hidden="true"
				/>

				<motion.div
					className={`${styles.plane} ${styles.planeTwo}`}
					style={{ y: planeTwoY }}
					aria-hidden="true"
				/>

				<motion.div
					className={`${styles.plane} ${styles.planeThree}`}
					style={{ y: planeThreeY }}
					aria-hidden="true"
				/>

				<motion.div
					className={styles.headline}
					style={{ y: titleY, opacity: titleOpacity }}
				>
					<p className={styles.eyebrow}>Développeur web indépendant</p>

					<h1>
						Je conçois
						<br />
						<motion.span className={styles.offsetWord} style={{ x: wordX }}>
							des univers web
						</motion.span>
						<br />
						sur mesure.
					</h1>
				</motion.div>

				<p className={styles.intro}>
					Design, développement et interactions réunis pour créer des expériences
					numériques qui ne ressemblent pas à des modèles préfabriqués.
				</p>

				<div className={styles.scrollHint} aria-hidden="true">
					<span />
					Scroll
				</div>
			</div>
		</section>
	);
}