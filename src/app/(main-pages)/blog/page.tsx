import { PostCard } from "@/components/PostCard";
import { prismicClient } from "@/prismicio";

export default async function BlogPage() {
	const client = prismicClient();

	const posts = await client.getAllByType("blog_post_default");

	return (
		<div className="flex h-full flex-col justify-between gap-5 text-ctp-text">
			<header>
				<p className="text-right text-sm">{posts.length} postagem(s)</p>
			</header>
			<main className="flex flex-col gap-5">
				{posts.map(post => {
					return <PostCard key={post.uid} post={post} />;
				})}
			</main>
		</div>
	);
}
