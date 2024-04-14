"use client";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Check, Copy } from "lucide-react";
import { Button } from "../ui/button";

interface CopyToClipboardProps {
	textToCopy: string;
}

export function CopyToClipboard({ textToCopy }: CopyToClipboardProps) {
	const [copied, setCopied] = useState(false);

	function handleCopyToClipboard() {
		if (copied) return;

		navigator.clipboard.writeText(textToCopy);

		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	if (!textToCopy) {
		return null;
	}

	return (
		<TooltipProvider>
			<Tooltip delayDuration={0} open={copied ? true : undefined}>
				<TooltipTrigger asChild>
					<Button
						variant="ghost"
						className="size-5"
						size={"icon"}
						onClick={handleCopyToClipboard}>
						{copied ? <Check className="size-5" /> : <Copy className="size-5" />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>{copied ? "Copiado!" : "Copiar?"}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
