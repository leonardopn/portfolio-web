import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
const routes: prismic.ClientConfig["routes"] = [
	{
		type: "blog_post_default",
		uid: "blog",
		path: "/blog",
	},
	{
		type: "blog_post_default",
		path: "/blog/:uid",
	},
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const prismicClient = (config: prismicNext.CreateClientConfig = {}) => {
	const client = prismic.createClient(process.env.PRISMIC_ENVIRONMENT, {
		routes,
		fetchOptions:
			process.env.NODE_ENV === "production"
				? { next: { tags: ["prismic"] }, cache: "force-cache" }
				: { next: { revalidate: 5 } },
		accessToken: process.env.PRISMIC_ACCESS_TOKEN,
		...config,
	});

	prismicNext.enableAutoPreviews({
		client,
		previewData: config.previewData,
		req: config.req,
	});

	return client;
};
