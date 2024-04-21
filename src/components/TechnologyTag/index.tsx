import { ProgrammingLanguages } from "@/@types/ProgrammingLanguages";
import { Technologies } from "@/@types/Technologies";
import { cva } from "class-variance-authority";
import { IconType } from "react-icons";
import {
	BiLogoFirebase,
	BiLogoJava,
	BiLogoJavascript,
	BiLogoMongodb,
	BiLogoNodejs,
	BiLogoReact,
	BiLogoTypescript,
} from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { RiNpmjsFill } from "react-icons/ri";
import { SiElectron, SiExpo, SiNextdotjs, SiPrismic } from "react-icons/si";

export function TechnologyTag({
	languageOrTechnology,
}: {
	languageOrTechnology: ProgrammingLanguages | Technologies;
}) {
	const className = cva(
		"rounded-full bg-ctp-peach p-1 px-2 font-medium text-white text-xs flex gap-1 items-center",
		{
			variants: {
				language: {
					Typescript: "!bg-blue-400 ",
					Javascript: "!bg-yellow-600",
					Java: "!bg-red-400 ",
					Node: "!bg-green-500",
					NPM: "!bg-red-500",
					React: "!bg-cyan-400",
					Next: "!bg-black",
					JavaFX: "!bg-orange-400",
					MongoDB: "!bg-green-500",
					MySQL: "!bg-sky-700",
					Electron: "!bg-cyan-400",
					Firebase: "!bg-orange-400",
					"React Native": "!bg-cyan-400",
					Expo: "!bg-slate-900",
					Prismic: "!bg-[#314392]",
				},
			},
		}
	);

	const icons: Record<ProgrammingLanguages | Technologies, IconType> = {
		Typescript: BiLogoTypescript,
		Java: BiLogoJava,
		Javascript: BiLogoJavascript,
		JavaFX: BiLogoJava,
		MongoDB: BiLogoMongodb,
		MySQL: GrMysql,
		Next: SiNextdotjs,
		Node: BiLogoNodejs,
		NPM: RiNpmjsFill,
		React: BiLogoReact,
		Electron: SiElectron,
		Firebase: BiLogoFirebase,
		"React Native": BiLogoReact,
		Expo: SiExpo,
		Prismic: SiPrismic,
	};

	const Icon = icons[languageOrTechnology];

	return (
		<span className={className({ language: languageOrTechnology })}>
			<Icon className="text-lg" />
			{languageOrTechnology}
		</span>
	);
}
