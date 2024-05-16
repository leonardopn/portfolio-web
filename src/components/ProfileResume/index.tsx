import Image from "next/image";
import { CardDefault } from "../CardDefault";
import { ProfileBasicInformation } from "../ProfileBasicInformation";
import { SocialMediaButton } from "../SocialMediaButton";
import { cn } from "@/lib/utils";

interface ProfileResumeProps {
	className?: string;
	photoContainerClassName?: string;
	basicInformationContainerClassName?: string;
}

export function ProfileResume({
	className,
	photoContainerClassName,
	basicInformationContainerClassName,
}: ProfileResumeProps) {
	return (
		<div className={cn("sticky top-5 flex h-fit w-full max-w-96 flex-col gap-5", className)}>
			<CardDefault className={cn("flex flex-col items-center", photoContainerClassName)}>
				<Image
					src="/me.jpg"
					alt="Leonardo Petta do Nascimento - Foto de perfil"
					width={120}
					height={120}
					className="mb-2 rounded-lg"
				/>
				<h1 className="text-center text-xl font-semibold text-ctp-text">
					Leonardo Petta do Nascimento
				</h1>
				<h2 className="text-md text-center font-medium text-ctp-peach">
					Desenvolvedor Fullstack
				</h2>
				<section className="mt-2 flex flex-wrap justify-center gap-2">
					<SocialMediaButton icon="Github" href="https://github.com/leonardopn" />
					<SocialMediaButton
						icon="Linkedin"
						href="https://www.linkedin.com/in/leonardo-petta-do-nascimento-75674015b/"
					/>
				</section>
			</CardDefault>

			<CardDefault className={cn("flex flex-col gap-2", basicInformationContainerClassName)}>
				<ProfileBasicInformation
					icon="Mail"
					title="Email"
					info={
						<a
							href="mailto:leonardocps9@gmail.com"
							target="_blank"
							rel="noreferrer"
							className="text-ctp-text hover:underline">
							leonardocps9@gmail.com
						</a>
					}
				/>
				<ProfileBasicInformation
					icon="MapPin"
					title="Localização"
					info="Santa Maria/RS - Brasil"
				/>
			</CardDefault>
		</div>
	);
}
