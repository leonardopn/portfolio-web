"use client";

import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, ButtonProps } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ThemeModeToggleProps extends ButtonProps {}

export function ThemeModeToggle(props: ThemeModeToggleProps) {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" {...props}>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 text-ctp-peach transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 text-ctp-peach transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Mudar tema</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					<Sun className="mr-2 size-4" />
					Claro
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					<Moon className="mr-2 size-4" /> Escuro
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					<Computer className="mr-2 size-4" /> Sistema
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
