import { BookMarked } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { Divider } from "../Divider";
import { NextAndPreviousPostSelector } from "../NextAndPreviousPostSelector";
import { AllDocumentTypes } from "../../../prismicio-types";
import { PostIndexItem } from "./PostIndexItem";

interface PostIndexProps {
	headers: string[];
	post: AllDocumentTypes;
}

export function PostIndex({ headers, post }: PostIndexProps) {
	return (
		<section className="sticky top-2 hidden h-fit  gap-4 lg:flex lg:flex-col">
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
			<section className="col-start-3 ">
				<NextAndPreviousPostSelector
					nextPost={post.data.nextpost}
					previousPost={post.data.previouspost}
				/>
			</section>
		</section>
	);
}
