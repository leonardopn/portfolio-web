import { Settings, X } from "lucide-react";
import { OAuthProvidersSettings } from "../OAuthProvidersSettings";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerProps,
	DrawerTitle,
} from "../ui/drawer";
import { Divider } from "../Divider";

type SettingsDrawerProps = DrawerProps;

export function SettingsDrawer({ ...restProps }: SettingsDrawerProps) {
	return (
		<Drawer direction="right" {...restProps}>
			<DrawerContent className="left-auto right-0 top-0 mt-0 h-screen w-full max-w-lg rounded-none text-ctp-text">
				<DrawerClose className="absolute right-2 top-2">
					<X />
				</DrawerClose>
				<DrawerHeader>
					<DrawerTitle className="flex items-center text-ctp-peach">
						<Settings className="mr-2 size-5" />
						Configurações
					</DrawerTitle>
					<DrawerDescription>Configure seu usuário e recursos do blog.</DrawerDescription>
				</DrawerHeader>
				<Divider />
				<div className="flex flex-col gap-4 p-4">
					<OAuthProvidersSettings />
				</div>
			</DrawerContent>
		</Drawer>
	);
}
