"use client";
import { CircleChevronUp } from "lucide-react";
import { Button } from "../ui/button";
import { useMemo } from "react";
import { useWindowScroll } from "react-use";

export function GoToTopButton() {
	const { y } = useWindowScroll();

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	if (y <= 20) {
		return null;
	}

	return (
		<Button
			aria-label="Voltar para o topo"
			variant="outline"
			className="fixed bottom-3 right-3 z-10 text-ctp-text xl:bottom-5 xl:right-5"
			size="icon"
			onClick={handleScrollToTop}>
			<CircleChevronUp />
		</Button>
	);
}
