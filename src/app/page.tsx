import { CardDefault } from "@/components/CardDefault";
import { ProfileResume } from "@/components/ProfileResume";
import Image from "next/image";

export default function Home() {
	return (
		<main className="flex gap-4">
			<ProfileResume />
			<CardDefault className="h-[800px] flex-1" />
		</main>
	);
}
