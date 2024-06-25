"use client";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/contexts/AuthContext";
import { LogIn, LogOut, Settings } from "lucide-react";
import { CardDefault } from "../CardDefault";
import { LoginDrawer } from "../LoginDrawer";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
//@ts-expect-error Módulo está com problema na tipagem
import { getNameInitials } from "toolkit-extra/string";
import { Divider } from "../Divider";
import { SettingsDrawer } from "../SettingsDrawer";
import { useState } from "react";

export function UserAvatar() {
	const [isSettingsOpen, setIsSettingsOpen] = useState(false);
	const { handleLogOut, user, isLoading } = useAuthContext();

	function handleOpenSettings() {
		setIsSettingsOpen(true);
	}

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
		<>
			<SettingsDrawer open={isSettingsOpen} onOpenChange={setIsSettingsOpen} />
			<DropdownMenu>
				<DropdownMenuTrigger>
					<CardDefault className="flex items-center gap-2 rounded-full p-1 transition-transform hover:scale-105">
						<Avatar>
							<AvatarImage
								src={user.photoURL || ""}
								fetchPriority="high"
								alt={"Foto do usuário"}
							/>
							<AvatarFallback className="text-xs">
								{getNameInitials(user.displayName) || "S/N"}
							</AvatarFallback>
						</Avatar>
					</CardDefault>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					<DropdownMenuItem onClick={handleOpenSettings}>
						<Settings className="mr-2 size-5" /> Configurações
					</DropdownMenuItem>
					<Divider className="my-1" />
					<DropdownMenuItem onClick={handleLogOut}>
						<LogOut className="mr-2 size-5" /> Sair
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</>
	);
}
