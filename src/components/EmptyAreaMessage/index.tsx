import { cn } from "@/lib/utils";
import { PackageOpen } from "lucide-react";
import { ComponentProps } from "react";

interface EmptyAreaMessageProps extends ComponentProps<"div"> {}

export function EmptyAreaMessage({ className, ...props }: EmptyAreaMessageProps) {
	return (
		<div
			className={cn("flex flex-col items-center justify-center text-center", className)}
			{...props}>
			<PackageOpen strokeWidth={1.25} className="size-28" />
			<h1 className="text-xl font-bold">Não há nada aqui...</h1>
			<h2 className="font-thin">Volte mais tarde, ainda não há conteúdo.</h2>
		</div>
	);
}
