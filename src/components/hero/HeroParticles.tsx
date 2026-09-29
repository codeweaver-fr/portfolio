import type { CSSProperties } from "react";
import styles from "./HeroParticles.module.scss";

// Fixed positions keep server/client rendering identical; no per-frame React work.
const particles = Array.from({ length: 32 }, (_, index) => ({
	x: index % 2 ? 76 + ((index * 7) % 18) : 6 + ((index * 7) % 18),
	y: index < 20 ? 55 + ((index * 11) % 27) : 80 + ((index * 7) % 15),
	size: index < 20 ? 1 + (index % 3) * 0.5 : 1.5 + (index % 3) * 0.5,
	delay: -((index * 2.3) % 15),
	duration: 9 + (index % 7),
	drift: (index % 2 ? -1 : 1) * (12 + (index % 4) * 8),
}));

export function HeroParticles({ near = false }: { near?: boolean }) {
	return (
		<div className={styles.field} aria-hidden="true">
			{particles.slice(near ? 20 : 0, near ? 32 : 20).map((particle, index) => (
				<span
					key={index}
					className={`${styles.particle} ${near ? styles.near : ""}`}
					style={{
						left: `${particle.x}%`,
						top: `${particle.y}%`,
						"--size": `${particle.size}px`,
						"--delay": `${particle.delay}s`,
						"--duration": `${particle.duration}s`,
						"--drift": `${particle.drift}px`,
					} as CSSProperties}
				/>
			))}
		</div>
	);
}
