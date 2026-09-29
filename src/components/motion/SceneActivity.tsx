"use client";

import { useEffect } from "react";

/** Pause CSS scenes without moving or unmounting their content. */
export function SceneActivity() {
	useEffect(() => {
		const scenes = document.querySelectorAll<HTMLElement>("[data-motion-scene]");
		const visible = new Set<Element>();
		const update = () => {
			for (const scene of scenes) {
				scene.dataset.motionPaused = String(document.hidden || !visible.has(scene));
			}
		};
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) visible.add(entry.target);
				else visible.delete(entry.target);
			}
			update();
		}, { rootMargin: "200px" });
		for (const scene of scenes) observer.observe(scene);
		document.addEventListener("visibilitychange", update);
		return () => {
			observer.disconnect();
			document.removeEventListener("visibilitychange", update);
			for (const scene of scenes) delete scene.dataset.motionPaused;
		};
	}, []);

	return null;
}
