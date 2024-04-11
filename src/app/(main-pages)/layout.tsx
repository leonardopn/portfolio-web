import { CardDefault } from "@/components/CardDefault";
import { DefaultPageHeader } from "@/components/DefaultPageHeader";
import { PageTitle } from "@/components/PageTitle";
import { ProfileResume } from "@/components/ProfileResume";
import { PATHS } from "@/constants/Path";

interface MainPagesLayoutProps {
	children: React.ReactNode;
}

export default function MainPagesLayout({ children }: MainPagesLayoutProps) {
	return (
		<main className="flex gap-4">
			<ProfileResume />
			<section className="flex flex-1 flex-col gap-5">
				<DefaultPageHeader />
				<CardDefault className="flex h-[800px] flex-1 flex-col gap-5">
					<PageTitle />
					{children}
				</CardDefault>
			</section>
		</main>
	);
}
