import { CardDefault } from "@/components/CardDefault";
import { Logo } from "@/components/Logo";
import { NextAndPreviousPostSelector } from "@/components/NextAndPreviousPostSelector";
import { PostIndex } from "@/components/PostIndex";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PATHS } from "@/constants/Path";
import { PostSectionObserverProvider } from "@/contexts/PostSectionObserverContext";
import { prismicClient } from "@/prismicio";
import { asImageSrc, asText } from "@prismicio/client";
import { CircleChevronLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Article, WithContext } from "schema-dts";
import "./style.scss";
import { SocialMediaShareBar } from "@/components/SocialMediaShareBar";

interface BlogPostLayoutProps {
	children: React.ReactNode;
	params: { slug: string };
}

export default async function BlogPostLayout({ children, params }: BlogPostLayoutProps) {
	const client = prismicClient();
	const article = await client.getByUID("blog_post_default", params.slug).catch(() => notFound());

	const jsonLd: WithContext<Article> = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: asText(article.data.title),
		description: asText(article.data.subtitle),
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
			<Logo className="mx-auto mt-5 block text-center lg:mt-0 lg:hidden lg:text-left" />
			<header className="flex flex-col gap-2 p-2 pb-4">
				<section className="flex justify-between">
					<Link
						href={PATHS.BLOG}
						className="flex items-center gap-1 transition-opacity hover:opacity-80">
						<CircleChevronLeft className="text-ctp-peach" /> Voltar
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
			<PostSectionObserverProvider>
				<main className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
					<section className=" lg:col-span-2">
						<SocialMediaShareBar
							post={article}
							className="sticky top-24 float-start mr-4 hidden h-fit w-fit flex-col xl:flex"
						/>

						<CardDefault className="flex flex-col gap-5 rounded-none border-l-0 border-r-0 px-0 py-3 sm:rounded-lg sm:border-l sm:border-r">
							{children}
						</CardDefault>
					</section>

					<PostIndex headers={headers} post={article} />
					<section className="col-start-1 lg:col-span-2 xl:hidden">
						<NextAndPreviousPostSelector
							nextPost={article.data.nextpost}
							previousPost={article.data.previouspost}
						/>
					</section>
				</main>
			</PostSectionObserverProvider>
		</section>
	);
}

export async function generateStaticParams() {
	const client = prismicClient();
	const pages = await client.getAllByType("blog_post_default");

	return pages.map(page => {
		return { slug: page.uid };
	});
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const client = prismicClient();
	const article = await client.getByUID("blog_post_default", params.slug).catch(() => notFound());

	const description = asText(article.data.subtitle);
	const title = asText(article.data.title);
	const bannerUrl = asImageSrc(article.data.banner) || "";

	return {
		title,
		description,
		twitter: {
			images: [bannerUrl],
			card: "summary",
			title,
			description,
		},
		openGraph: {
			images: [bannerUrl],

			title,
			description,
		},
	};
}
