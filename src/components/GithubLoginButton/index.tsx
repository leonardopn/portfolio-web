import { useAuthContext } from "@/contexts/AuthContext";
import { FaGithub } from "react-icons/fa";
import { Button, ButtonProps } from "../ui/button";
import { Loader2 } from "lucide-react";

interface GithubLoginButtonProps extends ButtonProps {}

export function GithubLoginButton({ ...restProps }: GithubLoginButtonProps) {
	const { handleLoginWithGithub, isStartingAuth, lastAuthProviderUsed } = useAuthContext();

	return (
		<Button {...restProps} onClick={handleLoginWithGithub} disabled={isStartingAuth}>
			{isStartingAuth && lastAuthProviderUsed ? (
				<Loader2 className="mr-2 size-6 animate-spin" />
			) : (
				<FaGithub className="mr-2 size-6" />
			)}
			Login com Github
		</Button>
	);
}
