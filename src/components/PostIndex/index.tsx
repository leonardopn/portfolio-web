import { BookMarked, Share2 } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { Divider } from "../Divider";
import { NextAndPreviousPostSelector } from "../NextAndPreviousPostSelector";
import { AllDocumentTypes } from "../../../prismicio-types";
import { PostIndexItem } from "./PostIndexItem";
import { SocialMediaShareBar } from "../SocialMediaShareBar";

interface PostIndexProps {
	headers: string[];
	post: AllDocumentTypes;
}

export function PostIndex({ headers, post }: PostIndexProps) {
	return (
		<section className="sticky top-4 hidden h-fit  gap-4 lg:flex lg:flex-col">
			<CardDefault className="flex flex-col gap-2">
				<h1 className="flex gap-2 text-base font-bold">
					<BookMarked className="text-ctp-peach" />
					Índice
				</h1>
				<Divider className="mt-2" />
				<ol className="list-disc">
					{headers.map(header => (
						<PostIndexItem key={header} text={header} />
					))}
				</ol>
			</CardDefault>
			<CardDefault className="flex flex-col gap-2 xl:hidden">
				<h1 className="flex gap-2 text-base font-bold">
					<Share2 className="text-ctp-peach" />
					Gostou? Compartilhe!
				</h1>
				<Divider className="my-2" />
				<SocialMediaShareBar post={post} />
			</CardDefault>
			<section className="col-start-3 ">
				<NextAndPreviousPostSelector
					nextPost={post.data.nextpost}
					previousPost={post.data.previouspost}
				/>
			</section>
		</section>
	);
}
