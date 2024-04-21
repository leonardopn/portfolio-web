"use client";
import { Input } from "@/components/ui/input";
import { debounce } from "lodash";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useCallback } from "react";

/**
 * @description Input que usa a URLSearchParams como estado para filtrar conteúdo.
 */
export function InputFilterSearchParams() {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString());
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);
	function handleChangeFilterText(e: ChangeEvent<HTMLInputElement>) {
		router.push(pathname + "?" + createQueryString("filter", e.target.value));
	}

	const debouncedHandleChangeFilterText = debounce(handleChangeFilterText, 800);

	return (
		<Input
			placeholder="Busque uma postagem por título ou descrição"
			type="text"
			defaultValue={searchParams.get("filter") || ""}
			onChange={debouncedHandleChangeFilterText}
		/>
	);
}
