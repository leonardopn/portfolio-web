import { ProjectsList } from "@/components/ProjectsList";
import { Metadata } from "next";

const title = "Projetos - Leonardo Petta";
const description =
	"Descubra os projetos de código aberto de Leonardo, desenvolvedor Fullstack. Veja soluções inovadoras e colaborativas em React, Firebase, Next.js, Typescript, Node e mais. Contribua e inspire-se com o mundo do código aberto.";

export const metadata: Metadata = {
	title,
	description,

	twitter: {
		images: ["/banner.webp"],
		card: "summary",
		title,
		description,
	},
	openGraph: {
		images: ["/banner.webp"],
		title,
		description,
	},
};

export default function BlogPage() {
	return <ProjectsList />;
}
