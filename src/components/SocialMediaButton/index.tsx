import { icons } from "lucide-react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type LucideIconType = keyof typeof icons;

type ReactIconType = IconType;

interface SocialMediaButtonProps {
	icon: LucideIconType | ReactIconType;
	href: string;
	className?: string;
	iconClassName?: string;
}

export function SocialMediaButton({
	icon,
	href,
	className,
	iconClassName,
}: SocialMediaButtonProps) {
	function isLucideIcon(icon: LucideIconType | ReactIconType): icon is LucideIconType {
		return typeof icon === "string";
	}

	const Icon = isLucideIcon(icon) ? icons[icon] : icon;

	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className={twMerge(
				"h-fit w-fit rounded-lg bg-ctp-surface0 p-2 text-ctp-text transition-all hover:scale-105 hover:text-ctp-peach hover:opacity-80",
				className
			)}>
			<Icon className={iconClassName} />
		</a>
	);
}
