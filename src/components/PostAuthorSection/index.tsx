import dayjs from "@utils/Dayjs";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface PostAuthorSectionProps {
	timeToRead: number;
	createdAt: string;
	updatedAt?: string;
}

export function PostAuthorSection({ timeToRead, createdAt, updatedAt }: PostAuthorSectionProps) {
	const formattedCreatedAt = dayjs(createdAt).format("DD MMM, YYYY");
	const formattedUpdatedAt = updatedAt ? dayjs(updatedAt).format("DD MMM, YYYY") : "";
	const isUpdatedAtImportant = updatedAt && dayjs(createdAt).diff(dayjs(updatedAt), "day") > 0;

	return (
		<section className="mx-3 flex items-center gap-2">
			<Avatar>
				<AvatarImage
					src="/me.jpg"
					fetchPriority="high"
					alt="Leonardo Petta do Nascimento - Foto de perfil"
				/>
				<AvatarFallback>LP</AvatarFallback>
			</Avatar>
			<div>
				<p>Leonardo Petta do Nascimento</p>
				<p className="text-sm text-ctp-overlay0">
					{timeToRead} min. de leitura · Criado em {formattedCreatedAt}{" "}
					{isUpdatedAtImportant && ` · Atualizado em ${formattedUpdatedAt}`}
				</p>
			</div>
		</section>
	);
}
