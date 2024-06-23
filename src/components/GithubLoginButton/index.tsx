import { AUTH } from "@/services/firebase";
import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { FaGithub } from "react-icons/fa";
import { Button, ButtonProps } from "../ui/button";

interface GithubLoginButtonProps extends ButtonProps {}

export function GithubLoginButton({ ...restProps }: GithubLoginButtonProps) {
	async function handleLogin() {
		const provider = new GithubAuthProvider();

		await signInWithRedirect(AUTH, provider);
	}

	return (
		<Button {...restProps} onClick={handleLogin}>
			<FaGithub className="mr-2 size-6" /> Login com Github
		</Button>
	);
}
