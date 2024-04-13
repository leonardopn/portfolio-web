import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { notFound } from "next/navigation";

type Params = { slug: string };

export default async function BlogPost({ params }: { params: Params }) {
	const client = createClient();
	const page = await client.getByUID("blog_post_default", params.slug).catch(e => {
		notFound();
	});

	return (
		<main>
			{/* TODO: Add post body */}
			<PrismicRichText field={page.data.title} />
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
