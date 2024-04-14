import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface DividerProps extends ComponentProps<"hr"> {}

export function Divider(props: DividerProps) {
	return <hr {...props} className={cn("border-ctp-surface0", props.className)} />;
}
