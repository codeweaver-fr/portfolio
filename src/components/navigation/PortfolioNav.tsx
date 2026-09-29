"use client";

import Image from "next/image";
import { AnimatePresence, m as motion } from "motion/react";
import { useEffect, useState } from "react";

import styles from "./PortfolioNav.module.scss";

/* =========================================================
   NAVIGATION PRINCIPALE
========================================================= */

const mainLinks = [
	{
		index: "01",
		label: "Accueil",
		href: "/",
	},
	{
		index: "02",
		label: "Projets",
		href: "/#projects",
	},
	{
		index: "03",
		label: "Prestations",
		href: "/prestations",
	},
	{
		index: "04",
		label: "Technologies",
		href: "/technologies",
	},
	{
		index: "05",
		label: "À propos",
		href: undefined,
	},
	{
		index: "06",
		label: "Contact",
		href: "/#contact",
	},
];

/* =========================================================
   PROJETS
========================================================= */

const projectLinks = [
	{
		index: "01",
		label: "Cabinet Hyde",
		href: "/#projects",
	},
	{
		index: "02",
		label: "Internet sans piège",
		href: "/#internet-sans-piege",
	},
];

/* =========================================================
   SECTIONS SUIVIES PAR LA NAVBAR

   Les sections qui n'existent pas encore sont simplement
   ignorées jusqu'à leur création.
========================================================= */

const trackedSections = [
	{
		selector: "#projects",
		label: "01 — Cabinet Hyde",
	},
	{
		selector: "#internet-sans-piege",
		label: "02 — Internet Sans Piège",
	},
	{
		selector: "#approach",
		label: "03 — Approche",
	},
	{
		selector: "#prestations",
		label: "04 — Prestations",
	},
	{
		selector: "#technologies",
		label: "05 — Technologies",
	},
	{
		selector: "#about",
		label: "06 — À propos",
	},
	{
		selector: "#contact",
		label: "07 — Contact",
	},
];

export function PortfolioNav({
	pageLabel,
}: {
	pageLabel?: string;
} = {}) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [currentSection, setCurrentSection] =
		useState("Accueil");

	/* =====================================================
	   NAVBAR AU SCROLL
	===================================================== */

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 32);
		};

		handleScroll();

		window.addEventListener(
			"scroll",
			handleScroll,
			{
				passive: true,
			},
		);

		return () => {
			window.removeEventListener(
				"scroll",
				handleScroll,
			);
		};
	}, []);

	/* =====================================================
	   SECTION ACTIVE

	   Plusieurs sections peuvent se chevaucher visuellement.
	   On choisit donc la section qui vient de franchir
	   le plus récemment le point de lecture.
	===================================================== */

	useEffect(() => {
		if (pageLabel) return;

		let frame = 0;

		const sections = trackedSections.map(
			(item) => ({
				...item,
				element:
					document.querySelector<HTMLElement>(
						item.selector,
					),
			}),
		);

		const updateCurrentSection = () => {
			if (frame) return;

			frame = requestAnimationFrame(() => {
				frame = 0;

				const marker =
					window.innerHeight * 0.35;

				let activeLabel = "Accueil";

				let closestDistance =
					Number.POSITIVE_INFINITY;

				for (const item of sections) {
					const element = item.element;

					if (!element) {
						continue;
					}

					const rect =
						element.getBoundingClientRect();

					/*
					 * La section n'a pas encore atteint
					 * le point de lecture.
					 */
					if (rect.top > marker) {
						continue;
					}

					const distance =
						marker - rect.top;

					/*
					 * On prend le début de section
					 * le plus proche du marqueur.
					 *
					 * Cela évite qu'ISP reste actif
					 * alors qu'Approche est déjà visible.
					 */
					if (
						distance <
						closestDistance
					) {
						closestDistance =
							distance;

						activeLabel =
							item.label;
					}
				}

				setCurrentSection(
					(previous) =>
						previous ===
						activeLabel
							? previous
							: activeLabel,
				);
			});
		};

		updateCurrentSection();

		window.addEventListener(
			"scroll",
			updateCurrentSection,
			{
				passive: true,
			},
		);

		window.addEventListener(
			"resize",
			updateCurrentSection,
		);

		return () => {
			cancelAnimationFrame(frame);

			window.removeEventListener(
				"scroll",
				updateCurrentSection,
			);

			window.removeEventListener(
				"resize",
				updateCurrentSection,
			);
		};
	}, [pageLabel]);

	/* =====================================================
	   ESC + VERROUILLAGE DU SCROLL
	===================================================== */

	useEffect(() => {
		document.body.style.overflow =
			menuOpen ? "hidden" : "";

		const handleKeyDown = (
			event: KeyboardEvent,
		) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};

		window.addEventListener(
			"keydown",
			handleKeyDown,
		);

		return () => {
			window.removeEventListener(
				"keydown",
				handleKeyDown,
			);

			document.body.style.overflow =
				"";
		};
	}, [menuOpen]);

	/* =====================================================
	   MOBILE <-> DESKTOP
	===================================================== */

	useEffect(() => {
		const media =
			window.matchMedia(
				"(max-width: 700px)",
			);

		const handleBreakpointChange =
			() => {
				setMenuOpen(false);
			};

		media.addEventListener(
			"change",
			handleBreakpointChange,
		);

		return () => {
			media.removeEventListener(
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
					scrolled
						? styles.navScrolled
						: "",
					menuOpen
						? styles.navOpen
						: "",
				]
					.filter(Boolean)
					.join(" ")}
			>
				{/* =============================================
				    VERRE NAVBAR
				============================================= */}

				<div
					className={styles.navGlass}
					aria-hidden="true"
				>
					<Image
						src="/images/hero/hero-bg.webp"
						alt=""
						fill
						sizes="100vw"
						className={
							styles.navFragments
						}
						loading="eager"
					/>

					<span
						className={
							styles.navSweep
						}
					/>

					<div
						className={
							styles.navSparkles
						}
					>
						<span />
						<span />
						<span />
						<span />
					</div>
				</div>

				{/* =============================================
				    CONTENU NAVBAR
				============================================= */}

				<div className={styles.navInner}>
					<a
						href="/"
						className={styles.brand}
						onClick={closeMenu}
					>
						<span
							className={
								styles.brandMark
							}
						/>

						<span>
							Jérémie Garod
						</span>
					</a>

					<div
						className={
							styles.currentSection
						}
						aria-live="polite"
					>
						<span
							className={
								styles.currentDot
							}
						/>

						<span>
							{pageLabel ??
								currentSection}
						</span>
					</div>

					<div
						className={
							styles.navActions
						}
					>
						<a
							href="/#contact"
							className={
								styles.contactLink
							}
							onClick={closeMenu}
						>
							Me contacter
						</a>

						<button
							type="button"
							className={
								styles.menuButton
							}
							onClick={() =>
								setMenuOpen(
									(value) =>
										!value,
								)
							}
							aria-expanded={
								menuOpen
							}
							aria-controls="portfolio-menu"
							aria-label={
								menuOpen
									? "Fermer le menu"
									: "Ouvrir le menu"
							}
						>
							<span
								className={
									styles.menuLabel
								}
							>
								{menuOpen
									? "Fermer"
									: "Menu"}
							</span>

							<span
								className={[
									styles.menuGlyph,
									menuOpen
										? styles.menuGlyphOpen
										: "",
								]
									.filter(
										Boolean,
									)
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

			{/* =================================================
			    MENU
			================================================= */}

			<AnimatePresence>
				{menuOpen && (
					<>
						<motion.button
							type="button"
							className={
								styles.backdrop
							}
							onClick={closeMenu}
							initial={{
								opacity: 0,
							}}
							animate={{
								opacity: 1,
							}}
							exit={{
								opacity: 0,
							}}
							transition={{
								duration: 0.28,
							}}
							aria-label="Fermer le menu"
						/>

						<motion.aside
							id="portfolio-menu"
							className={
								styles.menuPanel
							}
							initial={{
								x: "104%",
							}}
							animate={{
								x: 0,
							}}
							exit={{
								x: "104%",
							}}
							transition={{
								duration: 0.58,
								ease: [
									0.22,
									1,
									0.36,
									1,
								],
							}}
						>
							{/* =================================
							    ATMOSPHÈRE
							================================= */}

							<div
								className={
									styles.menuAtmosphere
								}
								aria-hidden="true"
							/>

							<div
								className={
									styles.menuFragments
								}
								aria-hidden="true"
							>
								<Image
									src="/images/hero/hero-bg.webp"
									alt=""
									fill
									sizes="50vw"
									className={
										styles.menuFragmentsImage
									}
								/>
							</div>

							<div
								className={
									styles.menuGlassSweep
								}
								aria-hidden="true"
							/>

							<div
								className={
									styles.menuSparkles
								}
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
								className={
									styles.glassShardOne
								}
								aria-hidden="true"
							/>

							<div
								className={
									styles.glassShardTwo
								}
								aria-hidden="true"
							/>

							<div
								className={
									styles.glassShardThree
								}
								aria-hidden="true"
							/>

							{/* =================================
							    CONTENU
							================================= */}

							<div
								className={
									styles.menuContent
								}
							>
								<div
									className={
										styles.menuIntro
									}
								>
									<span>
										Navigation
									</span>

									<p>
										Explorer le
										portfolio
									</p>
								</div>

								<nav
									className={
										styles.mainNavigation
									}
									aria-label="Navigation principale"
								>
									{mainLinks.map(
										(link) => {
											const isCurrentPage =
												(pageLabel ===
													"Prestations" &&
													link.href ===
														"/prestations") ||
												(pageLabel ===
													"Technologies" &&
													link.href ===
														"/technologies");

											return (
												<a
													key={
														link.index
													}
													aria-disabled={
														!link.href ||
														undefined
													}
													tabIndex={
														link.href
															? undefined
															: -1
													}
													title={
														link.href
															? undefined
															: "Page À propos à venir"
													}
													aria-current={
														isCurrentPage
															? "page"
															: undefined
													}
													href={
														link.href
													}
													className={
														styles.menuLink
													}
													onClick={
														closeMenu
													}
												>
													<span
														className={
															styles.menuTabGlint
														}
														aria-hidden="true"
													/>

													<span
														className={
															styles.menuLinkIndex
														}
													>
														{
															link.index
														}
													</span>

													<span
														className={
															styles.menuLinkLabel
														}
													>
														{
															link.label
														}
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
											);
										},
									)}
								</nav>

								<div
									className={
										styles.menuDivider
									}
								/>

								{/* =================================
								    PROJETS
								================================= */}

								<div
									className={
										styles.projectsBlock
									}
								>
									<div
										className={
											styles.projectsHeading
										}
									>
										<span>
											Projets
											sélectionnés
										</span>

										<span>
											02
										</span>
									</div>

									<div
										className={
											styles.projectLinks
										}
									>
										{projectLinks.map(
											(
												project,
											) => (
												<a
													key={
														project.href
													}
													href={
														project.href
													}
													className={
														styles.projectLink
													}
													onClick={
														closeMenu
													}
												>
													<span
														className={
															styles.projectGlint
														}
														aria-hidden="true"
													/>

													<span>
														{
															project.index
														}
													</span>

													<strong>
														{
															project.label
														}
													</strong>
												</a>
											),
										)}
									</div>
								</div>

								{/* =================================
								    FOOTER MENU
								================================= */}

								<div
									className={
										styles.menuFooter
									}
								>
									<span>
										Jérémie Garod
									</span>

									<span>
										Développement
										web sur mesure
									</span>
								</div>
							</div>

							<div
								className={
									styles.menuGhostNumber
								}
								aria-hidden="true"
							>
								07
							</div>
						</motion.aside>
					</>
				)}
			</AnimatePresence>
		</>
	);
}