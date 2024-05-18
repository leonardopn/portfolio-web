import { Skeleton } from "@/components/ui/skeleton";

export default function AboutPageLoading() {
	return (
		<div className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-1/2" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-1/2" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[85%]" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[45%]" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[70%]" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-[65%]" />
			</div>
		</div>
	);
}
