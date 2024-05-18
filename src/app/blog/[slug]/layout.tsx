import { Logo } from "@/components/Logo";
import PostPageLayoutContent from "@/components/PostPageLayoutContent";
import { PostPageSkeleton } from "@/components/PostPageSkeleton";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PATHS } from "@/constants/Path";
import { CircleChevronLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

interface BlogPostLayoutProps {
	children: React.ReactNode;
	params: { slug: string };
}

export default function BlogPostLayout({ children, params }: BlogPostLayoutProps) {
	return (
		<section className="text-ctp-text">
			<Logo className="mx-auto mt-5 block text-center lg:mt-0 lg:hidden lg:text-left" />
			<header className="flex flex-col gap-2 p-2 pb-4 sm:px-0">
				<section className="flex justify-between">
					<Link
						href={PATHS.BLOG}
						className="flex items-center gap-1 transition-opacity hover:opacity-80">
						<CircleChevronLeft className="text-ctp-peach" /> Voltar
					</Link>
					<ThemeModeToggle />
				</section>
				<section>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href={PATHS.BLOG}>Blog</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{params.slug}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
				</section>
			</header>
			<Suspense fallback={<PostPageSkeleton />}>
				<PostPageLayoutContent params={params}>{children}</PostPageLayoutContent>
			</Suspense>
		</section>
	);
}
