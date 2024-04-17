import { EmptyAreaMessage } from "@/components/EmptyAreaMessage";
import { PostCard } from "@/components/PostCard";
import { prismicClient } from "@/prismicio";
import { AllDocumentTypes } from "../../../../prismicio-types";

export default async function BlogPage() {
	const client = prismicClient();

	const posts: AllDocumentTypes[] = await client.getAllByType("blog_post_default");

	return (
		<div className="flex h-full flex-col justify-between gap-5 text-ctp-text">
			{!!posts.length && (
				<header>
					<p className="text-right text-sm">{posts.length} postagem(s)</p>
				</header>
			)}
			{posts.length === 0 && <EmptyAreaMessage className="h-full" />}
			<main className="flex flex-col gap-5">
				{posts.map(post => {
					return <PostCard key={post.uid} post={post} />;
				})}
			</main>
		</div>
	);
}
