"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import styles from "./PortfolioNav.module.scss";

const mainLinks = [
	{ index: "01", label: "Accueil", href: "#top" },
	{ index: "02", label: "Projets", href: "#projects" },
	{ index: "03", label: "Prestations", href: "#prestations" },
	{ index: "04", label: "À propos", href: "#about" },
	{ index: "05", label: "Contact", href: "#contact" },
];

const projectLinks = [
	{
		index: "01",
		label: "Cabinet Hyde",
		href: "#projects",
	},
	{
		index: "02",
		label: "Internet sans piège",
		href: "#internet-sans-piege",
	},
];

export function PortfolioNav() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [currentSection, setCurrentSection] = useState("Portfolio");

	/* =====================================================
	   SCROLL NAVBAR
	===================================================== */

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 32);
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	/* =====================================================
	   SECTION COURANTE
	===================================================== */

	useEffect(() => {
		const sections = [
			{
				element: document.querySelector("#projects"),
				label: "01 — Cabinet Hyde",
			},
			{
				element: document.querySelector("#internet-sans-piege"),
				label: "02 — Internet sans piège",
			},
			{
				element: document.querySelector("#prestations"),
				label: "Prestations",
			},
			{
				element: document.querySelector("#about"),
				label: "À propos",
			},
			{
				element: document.querySelector("#contact"),
				label: "Contact",
			},
		].filter(
			(
				item,
			): item is {
				element: Element;
				label: string;
			} => Boolean(item.element),
		);

		const updateCurrentSection = () => {
			const y = window.scrollY + window.innerHeight * 0.36;

			let label = "Accueil";

			for (const section of sections) {
				const element = section.element as HTMLElement;

				if (element.offsetTop <= y) {
					label = section.label;
				}
			}

			setCurrentSection(label);
		};

		updateCurrentSection();

		window.addEventListener("scroll", updateCurrentSection, {
			passive: true,
		});

		window.addEventListener("resize", updateCurrentSection);

		return () => {
			window.removeEventListener("scroll", updateCurrentSection);
			window.removeEventListener("resize", updateCurrentSection);
		};
	}, []);

	/* =====================================================
	   FERMETURE ESC + BODY LOCK
	===================================================== */

	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	/* =====================================================
	   FIX MOBILE -> DESKTOP / ROTATION
	===================================================== */

	useEffect(() => {
		const mobileMedia = window.matchMedia("(max-width: 700px)");

		const handleBreakpointChange = () => {
			setMenuOpen(false);
		};

		mobileMedia.addEventListener("change", handleBreakpointChange);

		return () => {
			mobileMedia.removeEventListener(
				"change",
				handleBreakpointChange,
			);
		};
	}, []);

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<header
				className={[
					styles.nav,
					scrolled ? styles.navScrolled : "",
					menuOpen ? styles.navOpen : "",
				]
					.filter(Boolean)
					.join(" ")}
			>
				<div className={styles.navGlass} aria-hidden="true">
					<Image
						src="/images/hero/hero-fragments.webp"
						alt=""
						fill
						sizes="100vw"
						className={styles.navFragments}
						priority
					/>

					<span className={styles.navSweep} />

					<div className={styles.navSparkles}>
						<span />
						<span />
						<span />
						<span />
					</div>
				</div>

				<div className={styles.navInner}>
					<a
						href="#top"
						className={styles.brand}
						onClick={closeMenu}
					>
						<span className={styles.brandMark} />
						<span>Jérémie Garod</span>
					</a>

					<div
						className={styles.currentSection}
						aria-live="polite"
					>
						<span className={styles.currentDot} />
						<span>{currentSection}</span>
					</div>

					<div className={styles.navActions}>
						<a
							href="#contact"
							className={styles.contactLink}
							onClick={closeMenu}
						>
							Me contacter
						</a>

						<button
							type="button"
							className={styles.menuButton}
							onClick={() => setMenuOpen((value) => !value)}
							aria-expanded={menuOpen}
							aria-controls="portfolio-menu"
							aria-label={
								menuOpen
									? "Fermer le menu"
									: "Ouvrir le menu"
							}
						>
							<span className={styles.menuLabel}>
								{menuOpen ? "Fermer" : "Menu"}
							</span>

							<span
								className={[
									styles.menuGlyph,
									menuOpen
										? styles.menuGlyphOpen
										: "",
								]
									.filter(Boolean)
									.join(" ")}
								aria-hidden="true"
							>
								<i />
								<i />
							</span>
						</button>
					</div>
				</div>
			</header>

			<AnimatePresence>
				{menuOpen && (
					<>
						<motion.button
							type="button"
							className={styles.backdrop}
							onClick={closeMenu}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.28 }}
							aria-label="Fermer le menu"
						/>

						<motion.aside
							id="portfolio-menu"
							className={styles.menuPanel}
							initial={{ x: "104%" }}
							animate={{ x: 0 }}
							exit={{ x: "104%" }}
							transition={{
								duration: 0.58,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							<div
								className={styles.menuAtmosphere}
								aria-hidden="true"
							/>

							<div
								className={styles.menuFragments}
								aria-hidden="true"
							>
								<Image
									src="/images/hero/hero-fragments.webp"
									alt=""
									fill
									sizes="50vw"
									className={styles.menuFragmentsImage}
								/>
							</div>

							<div
								className={styles.menuGlassSweep}
								aria-hidden="true"
							/>

							<div
								className={styles.menuSparkles}
								aria-hidden="true"
							>
								<span />
								<span />
								<span />
								<span />
								<span />
								<span />
							</div>

							<div
								className={styles.glassShardOne}
								aria-hidden="true"
							/>

							<div
								className={styles.glassShardTwo}
								aria-hidden="true"
							/>

							<div
								className={styles.glassShardThree}
								aria-hidden="true"
							/>

							<div className={styles.menuContent}>
								<div className={styles.menuIntro}>
									<span>Navigation</span>
									<p>Explorer le portfolio</p>
								</div>

								<nav
									className={styles.mainNavigation}
									aria-label="Navigation principale"
								>
									{mainLinks.map((link) => (
										<a
											key={link.href}
											href={link.href}
											className={styles.menuLink}
											onClick={closeMenu}
										>
											<span
												className={styles.menuTabGlint}
												aria-hidden="true"
											/>

											<span
												className={
													styles.menuLinkIndex
												}
											>
												{link.index}
											</span>

											<span
												className={
													styles.menuLinkLabel
												}
											>
												{link.label}
											</span>

											<span
												className={
													styles.menuLinkLine
												}
												aria-hidden="true"
											/>

											<span
												className={
													styles.menuLinkArrow
												}
												aria-hidden="true"
											>
												↗
											</span>
										</a>
									))}
								</nav>

								<div className={styles.menuDivider} />

								<div className={styles.projectsBlock}>
									<div className={styles.projectsHeading}>
										<span>Projets sélectionnés</span>
										<span>02</span>
									</div>

									<div className={styles.projectLinks}>
										{projectLinks.map((project) => (
											<a
												key={project.href}
												href={project.href}
												className={styles.projectLink}
												onClick={closeMenu}
											>
												<span
													className={
														styles.projectGlint
													}
													aria-hidden="true"
												/>

												<span>
													{project.index}
												</span>

												<strong>
													{project.label}
												</strong>
											</a>
										))}
									</div>
								</div>

								<div className={styles.menuFooter}>
									<span>Jérémie Garod</span>

									<span>
										Développement web sur mesure
									</span>
								</div>
							</div>

							<div
								className={styles.menuGhostNumber}
								aria-hidden="true"
							>
								01
							</div>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
}
