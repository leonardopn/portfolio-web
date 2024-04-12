"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItem = ({ href, label }: { href: string; label: string }) => {
	const path = usePathname();

	return (
		<Link href={href}>
			<Button
				variant={"ghost"}
				size="sm"
				aria-selected={path === href}
				className="h-full rounded-none hover:!bg-ctp-peach aria-selected:bg-ctp-peach aria-selected:text-ctp-mantle hover:dark:text-ctp-crust aria-selected:dark:text-ctp-crust sm:rounded-md">
				{label}
			</Button>
		</Link>
	);
};
