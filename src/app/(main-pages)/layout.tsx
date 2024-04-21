import { CardDefault } from "@/components/CardDefault";
import { DefaultPageHeader } from "@/components/DefaultPageHeader";
import { PageTitle } from "@/components/PageTitle";
import { ProfileResume } from "@/components/ProfileResume";
import { ProfileResumeHided } from "@/components/ProfileResumeHided";

interface MainPagesLayoutProps {
	children: React.ReactNode;
}

export default function MainPagesLayout({ children }: MainPagesLayoutProps) {
	return (
		<main className=" flex gap-4">
			<ProfileResume className="hidden lg:flex" />
			<section className="flex flex-1 flex-col gap-5">
				<DefaultPageHeader />
				<section className="flex flex-1 flex-col gap-5 pt-32 sm:pt-0">
					<ProfileResumeHided />
					<CardDefault className="flex flex-1 flex-col gap-5 rounded-none border-l-0 border-r-0 sm:rounded-lg sm:border-l sm:border-r ">
						<PageTitle />
						{children}
					</CardDefault>
				</section>
			</section>
		</main>
	);
}
