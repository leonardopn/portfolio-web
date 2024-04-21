import { PATHS } from "@/constants/Path";
import { prismicClient } from "@/prismicio";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const client = prismicClient();
	const pages = await client.getAllByType("blog_post_default");

	const now = new Date();

	const blogPostsSitemap: MetadataRoute.Sitemap = pages.map(page => {
		return {
			url: `${process.env.SITE_DOMAIN}${PATHS.BLOG_POST(page.uid)}`,
			lastModified: new Date(page.last_publication_date),
			changeFrequency: "monthly",
			priority: 0.8,
		};
	});

	return [
		{
			url: process.env.SITE_DOMAIN,
			lastModified: now,
			changeFrequency: "yearly",
			priority: 1,
		},
		{
			url: process.env.SITE_DOMAIN.concat("/blog"),
			lastModified: now,
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: process.env.SITE_DOMAIN.concat("/projects"),
			lastModified: now,
			changeFrequency: "monthly",
			priority: 0.6,
		},
		...blogPostsSitemap,
	];
}
