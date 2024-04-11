import { ThemeModeToggle } from "../ThemeModeToggle";

export function DefaultPageHeader() {
	return (
		<header className="flex justify-end ">
			<ThemeModeToggle />
		</header>
	);
}
