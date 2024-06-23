import { GithubLoginButton } from "../GithubLoginButton";
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
			<DrawerContent className="left-auto right-0 top-0 mt-0 h-screen w-full max-w-lg rounded-none">
				<DrawerHeader>
					<DrawerTitle>Login</DrawerTitle>
					<DrawerDescription>
						Entre com sua conta para acessar mais recursos nos blog.
					</DrawerDescription>
				</DrawerHeader>
				<div className="p-4">
					<GithubLoginButton className="w-full" />
				</div>
			</DrawerContent>
		</Drawer>
	);
}
