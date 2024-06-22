import { CardDefault } from "@/components/CardDefault";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectPageLoading() {
	const ProjectCardSkeleton = (
		<CardDefault className="flex flex-col gap-5">
			<div className="flex flex-col gap-2">
				<Skeleton className="h-7" />
				<Skeleton className="h-4" />
				<Skeleton className="h-4 w-1/2" />
			</div>
			<div className="flex flex-col gap-2">
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
				<Skeleton className="h-3" />
			</div>

			<div className="flex justify-between">
				<div className="flex gap-2">
					<Skeleton className="h-5 w-20" /> <Skeleton className="h-5 w-20" />{" "}
					<Skeleton className="h-5 w-20" />
				</div>

				<Skeleton className="h-5 w-16" />
			</div>
		</CardDefault>
	);

	return Array.from({ length: 6 }, () => <>{ProjectCardSkeleton}</>);
}
