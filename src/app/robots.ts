import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
			disallow: ["/api", "/api/", "/slice-simulator", "/slice-simulator/"],
		},
		sitemap: `${process.env.SITE_DOMAIN}/sitemap.xml`,
		host: process.env.SITE_DOMAIN,
	};
}
