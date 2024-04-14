import { highlight } from "@/utils/HighlightJs";
import { CopyToClipboard } from "../CopyToClipboard";

interface CodeBlockProps {
	code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
	return (
		<pre className="notranslate relative rounded-lg bg-ctp-base" translate="no">
			<header className="sticky top-0 flex items-center justify-between rounded-t-lg bg-ctp-base p-3">
				<section className="flex gap-2">
					<span className="block size-4 rounded-full bg-ctp-red" />
					<span className="block size-4 rounded-full bg-ctp-yellow" />
					<span className="block size-4 rounded-full bg-ctp-green" />
				</section>
				<CopyToClipboard textToCopy={code} />
			</header>
			<main className="overflow-auto p-3">
				<code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
			</main>
		</pre>
	);
}
