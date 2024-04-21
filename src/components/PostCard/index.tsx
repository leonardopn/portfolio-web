import { asText } from "@prismicio/client";
import { AllDocumentTypes } from "../../../prismicio-types";
import { Badge } from "../ui/badge";
import dayjs from "@/utils/Dayjs";
import { getTimeToReadPost } from "@/utils/Post";
import { Calendar, Clock10 } from "lucide-react";
import Link from "next/link";
import { CardDefault } from "../CardDefault";
import { PrismicNextImage } from "@prismicio/next";

interface PostCardProps {
	post: AllDocumentTypes;
}

export function PostCard({ post }: PostCardProps) {
	const formattedCreatedAt = dayjs(post.first_publication_date).format("DD/MM/YYYY");

	const stringContent = post.data.content
		.map(content => {
			return asText(content.body);
		})
		.join(" ");

	const timeToRead = getTimeToReadPost(stringContent);

	return (
		<CardDefault className="flex flex-col gap-2 bg-ctp-base transition-transform hover:scale-[101%]">
			{!!post.tags.length && (
				<header className="flex flex-wrap gap-2">
					{post.tags.map(tag => {
						return (
							<Badge key={tag} className="cursor-pointer">
								{tag}
							</Badge>
						);
					})}
				</header>
			)}
			<Link href={`/blog/${post.uid}`} className="flex justify-between gap-4">
				<div className="flex flex-1 flex-col justify-center gap-2">
					<main>
						<h1 className="text-lg text-ctp-peach">{asText(post.data.title)}</h1>
						<h2 className="text-base text-ctp-overlay1">
							{asText(post.data.subtitle)}
						</h2>
					</main>
					<footer className="flex items-center gap-2">
						<p className="flex items-center gap-2 text-xs">
							<Calendar className="size-4 text-ctp-peach" />
							{formattedCreatedAt}
						</p>
						·
						<p className="flex items-center gap-2 text-sm">
							<Clock10 className="size-4 text-ctp-peach" /> {timeToRead} min. de
							leitura
						</p>
					</footer>
				</div>

				<PrismicNextImage
					field={post.data.banner}
					className="hidden h-fit self-center rounded-lg shadow-md md:flex md:w-44 lg:w-56"
				/>
			</Link>
		</CardDefault>
	);
}
