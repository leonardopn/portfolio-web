import { CardDefault } from "../CardDefault";

interface PostIndexProps {
	headers: string[];
}

export function PostIndex({ headers }: PostIndexProps) {
	return (
		<CardDefault className="sticky top-2 hidden h-fit flex-1 flex-col lg:flex">
			<h1 className="text-base font-bold">Índice</h1>
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
