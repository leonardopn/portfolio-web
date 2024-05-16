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
				aria-pressed={path === href}
				className="h-full rounded-none hover:!bg-ctp-peach aria-pressed:bg-ctp-peach aria-pressed:text-ctp-mantle hover:dark:text-ctp-crust aria-pressed:dark:text-ctp-crust sm:rounded-md">
				{label}
			</Button>
		</Link>
	);
};
