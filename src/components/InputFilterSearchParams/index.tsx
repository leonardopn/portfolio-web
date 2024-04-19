"use client";
import { Input } from "@/components/ui/input";
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

	return (
		<Input
			placeholder="Busque uma postagem por título ou descrição"
			type="text"
			value={searchParams.get("filter") || ""}
			onChange={handleChangeFilterText}
		/>
	);
}
