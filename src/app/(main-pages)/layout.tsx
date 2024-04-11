import { CardDefault } from "@/components/CardDefault";
import { DefaultPageHeader } from "@/components/DefaultPageHeader";
import { ProfileResume } from "@/components/ProfileResume";

interface HomeLayoutProps {
	children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
	return (
		<main className="flex gap-4">
			<ProfileResume />
			<section className="flex flex-1 flex-col gap-5">
				<DefaultPageHeader />
				<CardDefault className="h-[800px] flex-1">{children}</CardDefault>
			</section>
		</main>
	);
}
