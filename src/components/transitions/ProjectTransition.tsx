import styles from "./ProjectTransition.module.scss";

export function ProjectTransition() {
	return (
		<div data-motion-scene

			className={styles.transition}
			aria-hidden="true"
		>
			<div className={styles.burgundyGlow} />
			<div className={styles.cyanGlow} />
			<div className={styles.grid} />
			<div className={styles.beam} />
		</div>
	);
}