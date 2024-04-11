"use client";

import { PATHS } from "@/constants/Path";
import { usePathname } from "next/navigation";

export function PageTitle() {
	const pageNames = {
		[PATHS.ABOUT]: "Sobre mim",
		[PATHS.PROJECTS]: "Projetos",
		[PATHS.BLOG]: "Blog",
	};

	const path = usePathname();

	const title = pageNames[path];

	if (!title) return null;

	return (
		<header className="w-fit">
			<h1 className="text-2xl font-semibold">{title}</h1>
			<span className="mt-2 block h-1 w-1/2 rounded-full bg-ctp-peach" />
		</header>
	);
}
