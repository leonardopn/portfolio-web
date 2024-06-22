import { PATHS } from "@/constants/Path";
import { cn } from "@/lib/utils";
import { prismicClient } from "@/prismicio";
import {
	ContentRelationshipField,
	FilledContentRelationshipField,
	asText,
	isFilled,
} from "@prismicio/client";
import { cva } from "class-variance-authority";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Link from "next/link";
import { CardDefault, CardDefaultProps } from "../CardDefault";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface NextAndPreviousPostSelectorProps {
	previousPost: ContentRelationshipField<"blog_post_default">;
	nextPost: ContentRelationshipField<"blog_post_default">;
}

export function NextAndPreviousPostSelector({
	nextPost,
	previousPost,
}: NextAndPreviousPostSelectorProps) {
	if (!isFilled.contentRelationship(nextPost) && !isFilled.contentRelationship(previousPost)) {
		return null;
	}

	return (
		<div className="grid grid-cols-2 gap-2">
			{isFilled.contentRelationship(previousPost) && <RelatedPost post={previousPost} />}
			{isFilled.contentRelationship(nextPost) && <RelatedPost post={nextPost} isNext />}
		</div>
	);
}

interface RelatedPostProps extends CardDefaultProps {
	post: FilledContentRelationshipField<"blog_post_default">;
	isNext?: boolean;
}

async function RelatedPost({ post, className, isNext = false, ...props }: RelatedPostProps) {
	const client = prismicClient();

	const article = await client.getByID(post.id).catch(() => null);

	const linkClass = cva("text-ctp-text", {
		variants: {
			isNext: {
				true: "justify-self-end col-start-2",
				false: "justify-self-start col-start-1",
			},
		},
	});

	const cardDefaultClass = cva(
		"flex w-fit items-center gap-2 p-2 sm:rounded-lg hover:bg-opacity-10 transition-colors",
		{
			variants: {
				isNext: {
					true: "rounded-r-none rounded-bl-none ",
					false: "rounded-l-none rounded-br-none ",
				},
			},
		}
	);

	if (!post.uid) return null;

	return (
		<Link href={PATHS.BLOG_POST(post.uid)} className={linkClass({ isNext })}>
			<TooltipProvider>
				<Tooltip delayDuration={0} open={article ? undefined : false}>
					<TooltipTrigger asChild>
						<CardDefault
							className={cn(cardDefaultClass({ isNext }), className)}
							{...props}>
							{!isNext && <CircleArrowLeft className="size-5 text-ctp-peach" />}
							<h1 className="text-xs">{isNext ? "Proximo" : "Anterior"}</h1>
							{isNext && <CircleArrowRight className="size-5 text-ctp-peach" />}
						</CardDefault>
					</TooltipTrigger>
					<TooltipContent>
						{!!article && (
							<div className="max-w-80">
								<h1>{asText(article.data.title)}</h1>
								<h2 className="text-xs text-ctp-overlay1">
									{asText(article.data.subtitle)}
								</h2>
							</div>
						)}
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</Link>
	);
}
