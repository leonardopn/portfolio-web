import { CardDefault } from "../CardDefault";
import { Divider } from "../Divider";
import { Skeleton } from "../ui/skeleton";

export function PostPageSkeleton() {
	return (
		<main className=" grid grid-cols-1 gap-4 lg:grid-cols-3">
			<section className=" lg:col-span-2">
				<section className="sticky top-24 float-start mr-4 hidden h-fit w-fit flex-col gap-2 xl:flex">
					<Skeleton className="size-11" />
					<Skeleton className="size-11" />
					<Skeleton className="size-11" />
					<Skeleton className="size-11" />
					<Skeleton className="size-11" />
				</section>

				<CardDefault className="flex flex-col gap-5 rounded-none border-l-0 border-r-0 px-0 py-3 sm:rounded-lg sm:border-l sm:border-r">
					<main className="flex list-disc flex-col gap-4">
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
					</main>
				</CardDefault>
			</section>
			<section className="sticky top-4 flex h-fit flex-col gap-4">
				<CardDefault className="hidden  gap-4 lg:flex lg:flex-col">
					<Skeleton className="h-10 " />
					<Divider />
					<Skeleton className="h-4 w-full" />
					<Skeleton className="h-4 w-full max-w-32" />
					<Skeleton className="h-4 w-full max-w-64" />
					<Skeleton className="h-4 w-full" />
				</CardDefault>

				<CardDefault className="hidden gap-4 lg:flex lg:flex-col">
					<Skeleton className="h-10 " />
					<Divider />
					<section className="flex flex-wrap gap-2">
						<Skeleton className="size-11" />
						<Skeleton className="size-11" />
						<Skeleton className="size-11" />
						<Skeleton className="size-11" />
						<Skeleton className="size-11" />
					</section>
				</CardDefault>
				<section className="flex  justify-between">
					<Skeleton className="h-8 w-32 " />
					<Skeleton className="h-8 w-32" />
				</section>
			</section>
		</main>
	);
}
