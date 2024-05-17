import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import { ThemeModeToggle } from "../ThemeModeToggle";

export function DefaultPageHeader() {
	return (
		<header className="fixed z-10 h-fit w-full justify-between gap-5 space-y-5 border-b border-ctp-surface0 bg-ctp-base py-2 sm:relative sm:border-none sm:py-0 lg:space-y-0">
			<Logo className="mx-auto mt-5 text-center lg:hidden lg:text-left" />
			<div className="flex justify-between">
				<Navbar />
				<ThemeModeToggle className="w-12 rounded-none rounded-l-lg sm:rounded-lg" />
			</div>
		</header>
	);
}
