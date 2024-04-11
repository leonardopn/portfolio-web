import { isString } from "lodash";
import { icons } from "lucide-react";

interface ProfileBasicInformationProps {
	icon: keyof typeof icons;
	title: string;
	info: string | React.ReactNode;
}

export function ProfileBasicInformation({ icon, info, title }: ProfileBasicInformationProps) {
	const LucideIcon = icons[icon];

	return (
		<section className="flex items-center gap-2">
			<span className=" rounded-lg bg-ctp-surface0 p-2">
				<LucideIcon className="text-ctp-text" />
			</span>
			<div>
				<h3 className="text-sm font-medium text-ctp-peach">{title}</h3>
				{isString(info) ? <p className="text-ctp-text">{info}</p> : info}
			</div>
		</section>
	);
}
