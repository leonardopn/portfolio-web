import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface CardDefaultProps extends ComponentProps<"div"> {
	children?: React.ReactNode;
}

export function CardDefault({ children, className, ...restProps }: CardDefaultProps) {
	return (
		<div
			className={cn(
				"rounded-lg border border-ctp-surface0 bg-ctp-crust p-5 shadow-inner dark:shadow-md ",
				className
			)}
			{...restProps}>
			{children}
		</div>
	);
}
