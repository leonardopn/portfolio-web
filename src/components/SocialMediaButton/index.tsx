import { icons } from "lucide-react";

interface SocialMediaButtonProps {
	icon: keyof typeof icons;
	href: string;
}

export function SocialMediaButton({ icon, href }: SocialMediaButtonProps) {
	const LucideIcon = icons[icon];

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className=" h-fit w-fit rounded-lg bg-ctp-surface0 p-2 transition-all  hover:scale-105 hover:opacity-80">
			<LucideIcon className="text-ctp-text" />
		</a>
	);
}
