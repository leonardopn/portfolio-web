import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface PostAuthorSectionProps {}

export function PostAuthorSection({}: PostAuthorSectionProps) {
	return (
		<section className="flex flex-col  px-3">
			<div className="flex gap-2 ">
				<Avatar>
					<AvatarImage src="/me.jpg" />
					<AvatarFallback>LP</AvatarFallback>
				</Avatar>
				<div>
					<p>Leonardo Petta do Nascimento</p>
					<p className="text-sm text-ctp-overlay0">3 min de leitura · Abr 13, 2024</p>
				</div>
			</div>

			<span className="mt-2 block h-1 w-1/3 rounded-full bg-ctp-peach" />
		</section>
	);
}
