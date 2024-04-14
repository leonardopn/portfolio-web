import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import dayjs from "@utils/Dayjs";

interface PostAuthorSectionProps {
	timeToRead: number;
	createdAt: string;
	updatedAt?: string;
}

export function PostAuthorSection({ timeToRead, createdAt, updatedAt }: PostAuthorSectionProps) {
	const formattedCreatedAt = dayjs(createdAt).format("MMM D, YYYY");
	const formattedUpdatedAt = updatedAt ? dayjs(updatedAt).format("MMM D, YYYY") : "";

	return (
		<section className="flex flex-col  px-3">
			<div className="flex gap-2 ">
				<Avatar>
					<AvatarImage src="/me.jpg" />
					<AvatarFallback>LP</AvatarFallback>
				</Avatar>
				<div>
					<p>Leonardo Petta do Nascimento</p>
					<p className="text-sm text-ctp-overlay0">
						{timeToRead} min. de leitura · Criado em {formattedCreatedAt}{" "}
						{formattedUpdatedAt && ` · Atualizado em ${formattedUpdatedAt}`}
					</p>
				</div>
			</div>

			<span className="mt-2 block h-1 w-1/3 rounded-full bg-ctp-peach" />
		</section>
	);
}
