"use client";
import { CircleChevronUp } from "lucide-react";
import { useWindowScroll } from "react-use";
import { Button } from "../ui/button";

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
			className="lg:border-b-1 fixed bottom-0 right-1/2 z-10 size-9 translate-x-1/2 rounded-b-none text-ctp-text lg:bottom-3 lg:right-3 lg:translate-x-0 lg:rounded-lg"
			size="icon"
			onClick={handleScrollToTop}>
			<CircleChevronUp className="size-5" />
		</Button>
	);
}
