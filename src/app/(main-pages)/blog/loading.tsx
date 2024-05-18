import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPageLoading() {
	const falsePosts = Array(5).fill(0);

	return (
		<>
			<header className="flex flex-col items-end gap-5">
				<Skeleton className="h-6 w-36 " />
				<Skeleton className="h-10  w-full" />
			</header>
			<main className="flex flex-col gap-5">
				{falsePosts.map((_, index) => (
					<Skeleton key={index} className="h-48 w-full rounded-lg" />
				))}
			</main>
		</>
	);
}
