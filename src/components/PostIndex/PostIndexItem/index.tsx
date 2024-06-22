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

	const linkClass = cva("text-sm  flex items-center transition-colors hover:text-ctp-peach", {
		variants: {
			isIntersecting: {
				true: "text-ctp-peach list-none",
			},
		},
	});

	const liClass = cva("ml-5", {
		variants: {
			isIntersecting: {
				true: "list-none",
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
				{isIntersecting && <ChevronsRight className="-ml-7 mr-1" />}
				{text}
			</a>
		</li>
	);
}
