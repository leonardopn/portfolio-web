import { cn } from "@/lib/utils";

interface CardDefaultProps {
	children?: React.ReactNode;
	className?: string;
}

export function CardDefault({ children, className }: CardDefaultProps) {
	return (
		<div
			className={cn(
				"rounded-lg border border-ctp-surface0 bg-ctp-crust p-5 shadow-md ",
				className
			)}>
			{children}
		</div>
	);
}
