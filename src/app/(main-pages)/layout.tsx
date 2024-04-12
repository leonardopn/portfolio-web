import { CardDefault } from "@/components/CardDefault";
import { DefaultPageHeader } from "@/components/DefaultPageHeader";
import { PageTitle } from "@/components/PageTitle";
import { ProfileResume } from "@/components/ProfileResume";

interface MainPagesLayoutProps {
	children: React.ReactNode;
}

export default function MainPagesLayout({ children }: MainPagesLayoutProps) {
	return (
		<main className=" flex gap-4">
			<ProfileResume />
			<section className="flex flex-1 flex-col gap-5">
				<DefaultPageHeader />
				<CardDefault className="flex flex-1 flex-col gap-5 rounded-none pt-16 sm:rounded-lg sm:pt-5">
					<PageTitle />
					{children}
				</CardDefault>
			</section>
		</main>
	);
}
