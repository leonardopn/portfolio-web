import { CardDefault } from "../CardDefault";
import { Navbar } from "../Navbar";
import { ThemeModeToggle } from "../ThemeModeToggle";
import { Button } from "../ui/button";

export function DefaultPageHeader() {
	return (
		<header className="flex justify-between gap-5">
			<Navbar />
			<ThemeModeToggle className="h-full w-12" />
		</header>
	);
}
