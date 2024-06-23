"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/contexts/AuthContext";
import { LogIn, LogOut } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { LoginDrawer } from "../LoginDrawer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

export function UserAvatar() {
	const { handleLogOut, user, isLoading } = useAuthContext();

	if (isLoading) return <Skeleton className="h-12 w-12 rounded-full" />;

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
