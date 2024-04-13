import { PATHS } from "@/constants/Path";
import { createClient } from "@/prismicio";
import { asImageSrc, asText } from "@prismicio/client";
import { notFound } from "next/navigation";
import { Article, WithContext } from "schema-dts";

interface BlogPostLayoutProps {
	children: React.ReactNode;
	params: { slug: string };
}

export default async function BlogPostLayout({ children, params }: BlogPostLayoutProps) {
	const client = createClient();
	const article = await client.getByUID("blog_post_default", params.slug).catch(() => notFound());

	const jsonLd: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: asText(article.data.title),
		author: {
			"@type": "Person",
			name: asText(article.data.author),
			url: process.env.SITE_DOMAIN,
		},
		image: asImageSrc(article.data.banner) || "",
		datePublished: article.first_publication_date,
		dateModified: article.last_publication_date,
		url: `${process.env.SITE_DOMAIN}${PATHS.BLOG}/${params.slug}`,
	};

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			{children}
		</section>
	);
}
