import { PATHS } from "@/constants/Path";
import { CardDefault } from "../CardDefault";
import { NavItem } from "./NavItem";

export function Navbar() {
	return (
		<CardDefault className="flex overflow-hidden rounded-none rounded-r-lg p-0 sm:rounded-lg sm:p-1 md:gap-2">
			<NavItem href={PATHS.ABOUT} label="Sobre mim" />
			<NavItem href={PATHS.PROJECTS} label="Projetos" />
			<NavItem href={PATHS.BLOG} label="Blog" />
		</CardDefault>
	);
}
