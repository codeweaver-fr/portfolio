import styles from "./PortfolioFooter.module.scss";

export function PortfolioFooter() {
	const year = new Date().getFullYear();

	return (
		<footer data-motion-scene

			className={styles.footer}
			aria-label="Pied de page"
		>
			<div className={styles.glow} aria-hidden="true" />

			<div className={styles.inner}>
				<div className={styles.top}>
					<div className={styles.identity}>
						<p className={styles.eyebrow}>
							Développeur web indépendant
						</p>

						<p className={styles.name}>
							Jérémie Garod
						</p>

						<p className={styles.location}>
							Toulon · À distance
						</p>
					</div>

					<a
						href="#top"
						className={styles.backTop}
						aria-label="Revenir en haut de la page"
					>
						<span>Retour en haut</span>
						<i aria-hidden="true">↑</i>
					</a>
				</div>

				<div
					className={styles.separator}
					aria-hidden="true"
				>
					<span />
					<i />
					<span />
				</div>

				<div className={styles.bottom}>
					<p>
						© {year} Jérémie Garod
					</p>

					<div className={styles.links}>
						<a
							href="https://github.com/codeweaver-fr"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>

						<a href="#top">
							Accueil
						</a>
					</div>

					<p className={styles.signature}>
						Conçu & développé sur mesure
					</p>
				</div>
			</div>
		</footer>
	);
}

export default PortfolioFooter;