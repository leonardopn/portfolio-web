import { AUTH } from "@/services/firebase";
import { CardDefault } from "../CardDefault";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";
import { LoginDrawer } from "../LoginDrawer";

export function UserAvatar() {
	const user = AUTH.currentUser;

	if (!user)
		return (
			<section className="flex items-center gap-2">
				<LoginDrawer>
					<Button variant="outline" className="text-ctp-peach">
						<LogIn className="mr-2 size-5" /> Login
					</Button>
				</LoginDrawer>
			</section>
		);

	return (
		<CardDefault className="flex items-center gap-2 rounded-full p-1">
			<Avatar>
				<AvatarImage
					src="/me.jpg"
					fetchPriority="high"
					alt="Leonardo Petta do Nascimento - Foto de perfil"
				/>
				<AvatarFallback>LP</AvatarFallback>
			</Avatar>
		</CardDefault>
	);
}
