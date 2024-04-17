"use client";

import { usePathname } from "next/navigation";
import { ProfileResume } from "../ProfileResume";

interface ProfileResumeHidedProps {}

export function ProfileResumeHided({}: ProfileResumeHidedProps) {
	const path = usePathname();

	if (path !== "/") return null;

	return (
		<ProfileResume
			className="relative top-0 max-w-none sm:flex-row lg:hidden"
			photoContainerClassName="rounded-none border-l-0 border-r-0 sm:border-l sm:border-r sm:rounded-lg sm:flex-1"
			basicInformationContainerClassName="rounded-none border-l-0 border-r-0 sm:border-l sm:border-r sm:rounded-lg"
		/>
	);
}
