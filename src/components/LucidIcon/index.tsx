import { icons, LucideProps } from "lucide-react";

interface LucidIconProps extends LucideProps {
	icon: keyof typeof icons;
}

export function LucidIcon({ icon, ...restProps }: LucidIconProps) {
	const Icon = icons[icon];

	return <Icon {...restProps} />;
}
