import { PATHS } from "@/constants/Path";
import { CardDefault } from "../CardDefault";
import { NavItem } from "./NavItem";

interface NavbarProps {}

export function Navbar({}: NavbarProps) {
	return (
		<CardDefault className="flex gap-2 overflow-hidden rounded-none rounded-br-lg p-0 sm:rounded-lg sm:p-1">
			<NavItem href={PATHS.ABOUT} label="Sobre mim" />
			<NavItem href={PATHS.PROJECTS} label="Projetos" />
			<NavItem href={PATHS.BLOG} label="Blog" />
		</CardDefault>
	);
}
