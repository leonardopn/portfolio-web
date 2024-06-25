import { Divider } from "../Divider";
import { GithubLoginButton } from "../GithubLoginButton";
import { GoogleLoginButton } from "../GoogleLoginButton";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "../ui/drawer";

interface LoginDrawerProps {
	children: React.ReactNode;
}

export function LoginDrawer({ children }: LoginDrawerProps) {
	return (
		<Drawer direction="right">
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent className="left-auto right-0 top-0 mt-0 h-screen w-full max-w-sm rounded-none">
				<DrawerHeader>
					<DrawerTitle>Login</DrawerTitle>
					<DrawerDescription>
						Entre com sua conta para acessar mais recursos nos blog.
					</DrawerDescription>
				</DrawerHeader>
				<Divider />
				<div className="flex flex-col gap-4 p-4">
					<GithubLoginButton className="w-full" />
					<GoogleLoginButton className="w-full" />
				</div>
			</DrawerContent>
		</Drawer>
	);
}
