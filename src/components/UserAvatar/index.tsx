"use client";

import { AUTH } from "@/services/firebase";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "firebase/auth";
import { LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { CardDefault } from "../CardDefault";
import { LoginDrawer } from "../LoginDrawer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export function UserAvatar() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		AUTH.onAuthStateChanged(user => {
			setUser(user);
		});
	}, []);

	function handleLogOut() {
		AUTH.signOut();
	}

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
		<DropdownMenu>
			<DropdownMenuTrigger>
				<CardDefault className="flex items-center gap-2 rounded-full p-1">
					<Avatar>
						<AvatarImage
							src={user.photoURL || ""}
							fetchPriority="high"
							alt={"Foto do usuário"}
						/>
						<AvatarFallback>{user.displayName || "S/N"}</AvatarFallback>
					</Avatar>
				</CardDefault>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={handleLogOut}>
					<LogOut className="mr-2 size-5" /> Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
