import { PATHS } from "@/constants/Path";
import { redirect } from "next/navigation";

interface HomeProps {}

export default function Home({}: HomeProps) {
	return redirect(PATHS.ABOUT_ME);
}
