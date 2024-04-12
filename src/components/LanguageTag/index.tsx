import { ProgrammingLanguages } from "@/@types/ProgrammingLanguages";
import { cva } from "class-variance-authority";
import { IconType } from "react-icons";
import { BiLogoTypescript, BiLogoJava, BiLogoJavascript } from "react-icons/bi";

export function LanguageTag({ language }: { language: ProgrammingLanguages }) {
	const className = cva(
		"rounded-full bg-ctp-peach p-1 px-2 font-medium text-white text-xs flex gap-1 items-center",
		{
			variants: {
				language: {
					Typescript: "!bg-blue-400 ",
					Javascript: "!bg-yellow-600",
					Java: "!bg-red-400 ",
				},
			},
		}
	);

	const icons: Record<ProgrammingLanguages, IconType> = {
		Typescript: BiLogoTypescript,
		Java: BiLogoJava,
		Javascript: BiLogoJavascript,
	};

	const Icon = icons[language];

	return (
		<span className={className({ language })}>
			<Icon className="text-lg" />
			{language}
		</span>
	);
}
