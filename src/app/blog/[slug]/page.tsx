import { CodeBlock } from "@/components/CodeBlock";
import { Divider } from "@/components/Divider";
import { ImageZoom } from "@/components/ImageZoom";
import { PostAuthorSection } from "@/components/PostAuthorSection";
import { SocialMediaShareBar } from "@/components/SocialMediaShareBar";
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
	const post = await client.getByUID("blog_post_default", params.slug).catch(() => {
		notFound();
	});

	const components: JSXMapSerializer = {
		preformatted: ({ node }) => {
			return <CodeBlock code={node.text} />;
		},
		image: ({ node }) => {
			return (
				<ImageZoom
					image={{
						src: node.url,
						alt: node.alt || "",
						width: node.dimensions.width,
						height: node.dimensions.height,
						unoptimized: true,
						className: "self-center rounded-lg",
					}}
				/>
			);
		},
	};

	const stringContent = post.data.content
		.map(content => {
			return asText(content.body);
		})
		.join(" ");

	const timeToRead = getTimeToReadPost(stringContent);

	return (
		<main className="flex list-disc flex-col gap-4">
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
			<Divider className="lg:hidden" />
			<section className="mb-2 flex flex-col items-center justify-center gap-2 lg:hidden">
				<h3 className="font-medium">Gostou? Compartilhe!</h3>
				<SocialMediaShareBar post={post} />
			</section>
			<Divider></Divider>
			<main className="post-main-content flex flex-col gap-4 px-3">
				{post.data.content.map((content, index) => {
					const hasHeading = !!asText(content.heading);
					return (
						<section
							id={hasHeading ? `heading-${asText(content.heading)}` : undefined}
							key={asText(content.heading) + `_${index}`}
							className={`${hasHeading ? "heading-post" : ""} flex flex-col gap-2`}>
							{hasHeading && (
								<h2 className=" text-xl font-bold">{asText(content.heading)}</h2>
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
			<Divider className="lg:hidden" />
			<section className="mb-2 flex flex-col items-center justify-center gap-2 lg:hidden">
				<h3 className="font-medium">Gostou? Compartilhe!</h3>
				<SocialMediaShareBar post={post} />
			</section>
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
