import { BookMarked } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { Divider } from "../Divider";

interface PostIndexProps {
	headers: string[];
}

export function PostIndex({ headers }: PostIndexProps) {
	return (
		<CardDefault className="sticky top-2 hidden h-fit flex-1 flex-col gap-2 lg:flex">
			<h1 className="flex gap-2 text-base font-bold">
				<BookMarked />
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
	);
}
