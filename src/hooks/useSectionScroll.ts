"use client";

import { scroll, useMotionValue, type UseScrollOptions } from "motion/react";
import { useEffect, type RefObject } from "react";

/** Only measure scroll while the scene is near the viewport and the tab is visible. */
export function useSectionScroll(
	target: RefObject<HTMLElement | null>,
	offset: NonNullable<UseScrollOptions["offset"]>,
	disabled = false,
) {
	const scrollYProgress = useMotionValue(0);
	const start = offset[0];
	const end = offset[1];

	useEffect(() => {
		const element = target.current;
		if (!element) return;
		if (disabled) {
			scrollYProgress.jump(0);
			return;
		}
		let nearViewport = false;
		let stop: (() => void) | undefined;
		const update = () => {
			if (nearViewport && !document.hidden) {
				stop ??= scroll((progress) => scrollYProgress.set(progress), {
					target: element,
					offset: [start, end],
				});
			} else {
				stop?.();
				stop = undefined;
			}
		};
		const observer = new IntersectionObserver(([entry]) => {
			nearViewport = entry.isIntersecting;
			update();
		}, { rootMargin: "200px" });
		observer.observe(element);
		document.addEventListener("visibilitychange", update);
		return () => {
			observer.disconnect();
			stop?.();
			document.removeEventListener("visibilitychange", update);
		};
	}, [target, start, end, disabled, scrollYProgress]);

	return { scrollYProgress };
}
