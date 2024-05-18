import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import { Divider } from "../Divider";

interface PostPageSkeletonProps {
	children?: React.ReactNode;
}

export function PostPageSkeleton({ children }: PostPageSkeletonProps) {
	return (
		<Suspense
			fallback={
				<>
					<section>
						<Skeleton className="mx-3 mb-2 h-10" />
						<Skeleton className="mx-3 h-8 " />
					</section>
					<Skeleton className="h-96 rounded-none" />
					<section className="mx-3 flex gap-2">
						<Skeleton className="size-10 rounded-full" />
						<div className="flex w-full flex-col justify-center gap-2">
							<Skeleton className="h-4 w-full max-w-60" />
							<Skeleton className="h-4 w-full max-w-96" />
						</div>
					</section>
					<Divider className="lg:hidden" />
					<section className="mx-3 flex flex-col items-center gap-4 lg:hidden ">
						<Skeleton className="h-4 w-full max-w-32 " />
						<div className="flex gap-2">
							<Skeleton className="size-9" />
							<Skeleton className="size-9" />
							<Skeleton className="size-9" />
							<Skeleton className="size-9" />
							<Skeleton className="size-9" />
						</div>
					</section>
					<Divider />
					<section className="mx-3 flex  flex-col gap-4">
						<section className="flex flex-col gap-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full max-w-2xl" />
							<Skeleton className="h-4 w-full max-w-sm" />
						</section>

						<section className="flex flex-col gap-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full max-w-xl" />
							<Skeleton className="h-4 w-full max-w-sm" />
						</section>

						<section className="flex flex-col gap-2">
							<Skeleton className="h-4 w-full max-w-md" />
							<Skeleton className="h-4 w-full " />
							<Skeleton className="h-4 w-full max-w-md" />
						</section>
						<Skeleton className="h-96 rounded-lg" />
						<section className="flex flex-col gap-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full max-w-2xl" />
							<Skeleton className="h-4 w-full max-w-sm" />
						</section>
						<section className="flex flex-col gap-2">
							<Skeleton className="h-4 w-full" />
							<Skeleton className="h-4 w-full max-w-xl" />
							<Skeleton className="h-4 w-full max-w-sm" />
						</section>
					</section>
					<Divider />
					<section className="mx-3 flex flex-wrap gap-2">
						<Skeleton className="h-4 w-full max-w-20 " />
						<Skeleton className="h-4 w-full max-w-20 " />
						<Skeleton className="h-4 w-full max-w-20 " />
						<Skeleton className="h-4 w-full max-w-20 " />
						<Skeleton className="h-4 w-full max-w-20 " />
						<Skeleton className="h-4 w-full max-w-20 " />
					</section>
				</>
			}>
			{children}
		</Suspense>
	);
}
