import { BookMarked } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { Divider } from "../Divider";
import { NextAndPreviousPostSelector } from "../NextAndPreviousPostSelector";
import { AllDocumentTypes } from "../../../prismicio-types";

interface PostIndexProps {
	headers: string[];
	post: AllDocumentTypes;
}

export function PostIndex({ headers, post }: PostIndexProps) {
	return (
		<section className="sticky top-2 hidden h-fit gap-4 lg:flex lg:flex-col">
			<CardDefault className="flex-col gap-2">
				<h1 className="flex gap-2 text-base font-bold">
					<BookMarked className="text-ctp-peach" />
					Índice
				</h1>
				<Divider className="mt-2" />
				<ol>
					{headers.map((header, index) => (
						<li key={header}>
							<a href={`#heading-${header}`} className="text-sm hover:underline">
								{header}
							</a>
						</li>
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
