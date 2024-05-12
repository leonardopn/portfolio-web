import { EmptyAreaMessage } from "@/components/EmptyAreaMessage";
import { PostCard } from "@/components/PostCard";
import { prismicClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { Metadata } from "next";
import { AllDocumentTypes } from "../../../../prismicio-types";
import { InputFilterSearchParams } from "../../../components/InputFilterSearchParams";

const title = "Blog - Leonardo Petta";
const description =
	"Explore o blog de Leonardo para insights e análises detalhadas sobre desenvolvimento Fullstack, inovações em tecnologia e melhores práticas com o ecossistema do Javascript, e mais. Mantenha-se atualizado com as últimas tendências e soluções em desenvolvimento de software.";

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

interface BlogPageProps {
	searchParams: { filter?: string };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
	const client = prismicClient();

	const posts: AllDocumentTypes[] = await client.getAllByType("blog_post_default", {
		orderings: [{ field: "document.first_publication_date", direction: "desc" }],
	});

	const filteredPosts = posts.filter(post => {
		const filter = searchParams?.filter?.toLowerCase();

		if (!filter) return true;

		const title = asText(post.data.title).toLowerCase();
		const description = asText(post.data.subtitle).toLowerCase();

		return title.includes(filter) || description.includes(filter);
	});

	return (
		<div className="flex h-full flex-col justify-between gap-5 text-ctp-text">
			{!!posts.length && (
				<header className="flex flex-col gap-5">
					<p className="text-right text-sm">
						{filteredPosts.length}/{posts.length} postagem(s)
					</p>
					<InputFilterSearchParams />
				</header>
			)}
			{filteredPosts.length === 0 && <EmptyAreaMessage className="h-full min-h-96" />}
			<main className="flex flex-col gap-5">
				{filteredPosts.map(post => {
					return <PostCard key={post.uid} post={post} />;
				})}
			</main>
		</div>
	);
}
