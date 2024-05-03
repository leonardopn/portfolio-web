"use client";

import { useEffect } from "react";

interface PostIndexItemProps {
	text: string;
}

export function PostIndexItem({ text }: PostIndexItemProps) {
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (text === "O que é um CMS?") {
						if (entry.isIntersecting) {
							console.log("is Intersecting");
						} else {
							console.log("not Intersecting");
						}
					}
				});
			},
			{ rootMargin: "-50% 0px -50% 0px", threshold: 0.5 }
		);

		// Observar os elementos
		const title = document.getElementById(`heading-${text}`);

		if (title) observer.observe(title);

		// Cleanup
		return () => {
			if (title) observer.unobserve(title);
		};
	}, [text]);

	return (
		<li key={text}>
			<a href={`#heading-${text}`} className="list-disc text-sm hover:underline">
				{text}
			</a>
		</li>
	);
}
