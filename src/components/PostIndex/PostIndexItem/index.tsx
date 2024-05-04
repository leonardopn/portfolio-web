"use client";

import { usePostSectionObserverContext } from "@/contexts/PostSectionObserverContext";
import { cva } from "class-variance-authority";
import { ChevronsRight } from "lucide-react";

interface PostIndexItemProps {
	text: string;
}

export function PostIndexItem({ text }: PostIndexItemProps) {
	const { currentPostSectionId } = usePostSectionObserverContext();
	const headingId = `heading-${text}`;
	const isIntersecting = currentPostSectionId === headingId;

	const linkClass = cva("text-sm hover:underline flex items-center", {
		variants: {
			isIntersecting: {
				true: "text-ctp-peach list-none",
			},
		},
	});

	const liClass = cva("ml-5", {
		variants: {
			isIntersecting: {
				true: "list-none ml-0",
			},
		},
	});

	return (
		<li key={text} className={liClass({ isIntersecting })}>
			<a
				href={`#heading-${text}`}
				className={linkClass({
					isIntersecting,
				})}>
				{isIntersecting && <ChevronsRight className="-ml-2 mr-1" />}
				{text}
			</a>
		</li>
	);
}
