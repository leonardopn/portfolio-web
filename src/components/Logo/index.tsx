"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import { TypeAnimation } from "react-type-animation";

interface LogoProps extends ComponentProps<"h1"> {}

export function Logo({ className, ...props }: LogoProps) {
	return (
		<Link href="/">
			<h1
				className={cn(
					"text-2xl font-bold text-ctp-peach transition-colors hover:text-ctp-text ",
					className
				)}
				{...props}>
				<TypeAnimation sequence={["<LeonardoPetta.dev />", 1000]} speed={50} repeat={1} />
			</h1>
		</Link>
	);
}
