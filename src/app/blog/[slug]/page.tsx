import { CodeBlock } from "@/components/CodeBlock";
import { PostAuthorSection } from "@/components/PostAuthorSection";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { asText } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText } from "@prismicio/react";
import { Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";

const sourceSerif4 = Source_Serif_4({ subsets: ["latin"] });

type Params = { slug: string };

export default async function BlogPost({ params }: { params: Params }) {
	const client = createClient();
	const post = await client.getByUID("blog_post_default", params.slug).catch(e => {
		notFound();
	});

	const components: JSXMapSerializer = {
		paragraph: ({ children }) => {
			return <p className={cn(sourceSerif4.className, "text-lg font-light")}>{children}</p>;
		},
		preformatted: ({ node }) => {
			return <CodeBlock code={node.text} />;
		},
	};

	return (
		<main className="flex flex-col gap-4">
			<section>
				<h1 className="px-3 text-2xl font-bold">{asText(post.data.title)}</h1>
				<h2 className="px-3 text-lg font-light text-ctp-overlay1">
					{asText(post.data.subtitle)}
				</h2>
			</section>

			<PrismicNextImage field={post.data.banner} />
			<PostAuthorSection />

			<main className="flex flex-col gap-4 px-3">
				{post.data.content.map((content, index) => {
					return (
						<section
							key={asText(content.heading) + `_${index}`}
							className="flex flex-col gap-2">
							{!!asText(content.heading) && (
								<h2 className="text-xl font-bold">{asText(content.heading)}</h2>
							)}
							<PrismicRichText field={content.body} components={components} />
						</section>
					);
				})}
			</main>
			<hr className="mx-3" />
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

export async function generateStaticParams() {
	const client = createClient();
	const pages = await client.getAllByType("blog_post_default");

	return pages.map(page => {
		return { slug: page.uid };
	});
}
