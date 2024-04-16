import { CardDefault } from "@/components/CardDefault";
import { Logo } from "@/components/Logo";
import { PostIndex } from "@/components/PostIndex";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { PATHS } from "@/constants/Path";
import { createClient } from "@/prismicio";
import { asImageSrc, asText } from "@prismicio/client";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
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

	const headers = article.data.content
		.map(content => {
			return asText(content.heading);
		})
		.filter(Boolean);

	return (
		<section className="text-ctp-text">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Logo className="mt-5 block text-center lg:hidden lg:text-left" />
			<header className="flex flex-col gap-2 p-2 pb-4">
				<section className="flex justify-between">
					<Link
						href={PATHS.BLOG}
						className="flex items-center gap-1 transition-opacity hover:opacity-80">
						<CircleChevronLeft /> Voltar
					</Link>
					<ThemeModeToggle />
				</section>
				<section>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href={PATHS.BLOG}>Blog</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{params.slug}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</section>
			</header>
			<main className="grid  grid-cols-1 gap-2 lg:grid-cols-3">
				<CardDefault className="flex flex-col gap-5 rounded-none border-l-0 border-r-0 px-0 py-3 sm:rounded-lg sm:border-l sm:border-r lg:col-span-2">
					{children}
				</CardDefault>
				<PostIndex headers={headers} />
			</main>
		</section>
	);
}
