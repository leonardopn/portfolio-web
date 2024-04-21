import { CodeBlock } from "@/components/CodeBlock";
import { Divider } from "@/components/Divider";
import { PostAuthorSection } from "@/components/PostAuthorSection";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { prismicClient } from "@/prismicio";
import { getTimeToReadPost } from "@/utils/Post";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

type Params = { slug: string };

export default async function BlogPost({ params }: { params: Params }) {
	const client = prismicClient();
	const post = await client.getByUID("blog_post_default", params.slug).catch(e => {
		notFound();
	});

	const components: JSXMapSerializer = {
		preformatted: ({ node }) => {
			return <CodeBlock code={node.text} />;
		},
	};

	const stringContent = post.data.content
		.map(content => {
			return asText(content.body);
		})
		.join(" ");

	const timeToRead = getTimeToReadPost(stringContent);

	return (
		<main className="post-container flex list-disc flex-col gap-4">
			<section>
				<h1 className="px-3 text-2xl font-bold">{asText(post.data.title)}</h1>
				<h2 className="px-3 text-base font-light text-ctp-overlay1">
					{asText(post.data.subtitle)}
				</h2>
			</section>
			<PrismicNextImage field={post.data.banner} priority />
			<PostAuthorSection
				timeToRead={timeToRead}
				createdAt={post.first_publication_date}
				updatedAt={post.last_publication_date}
			/>
			<Divider />
			<main className="flex flex-col gap-4 px-3">
				{post.data.content.map((content, index) => {
					return (
						<section
							key={asText(content.heading) + `_${index}`}
							className="flex flex-col gap-2">
							{!!asText(content.heading) && (
								<h2
									className="text-xl font-bold"
									id={`heading-${asText(content.heading)}`}>
									{asText(content.heading)}
								</h2>
							)}
							<div
								className={cn(
									sourceSerif4.className,
									"flex flex-col gap-2 text-lg font-light"
								)}>
								<PrismicRichText field={content.body} components={components} />
							</div>
						</section>
					);
				})}
			</main>
			<Divider />
			<footer className="flex flex-wrap gap-2 px-3">
				{post.tags.map(tag => {
					return (
						<Badge key={tag} className="cursor-pointer">
							{tag}
						</Badge>
					);
				})}
			</footer>
		</main>
	);
}
