"use client";
import { FaGithub } from "react-icons/fa";
import { Button, ButtonProps } from "../ui/button";
import { GithubAuthProvider, signInWithRedirect } from "firebase/auth";
import { AUTH } from "@/services/firebase";

interface GithubLoginButtonProps extends ButtonProps {}

export function GithubLoginButton({ ...restProps }: GithubLoginButtonProps) {
	function handleLogin() {
		const provider = new GithubAuthProvider();

		signInWithRedirect(AUTH, provider)
			.then(result => {
				// This gives you a GitHub Access Token. You can use it to access the GitHub API.
				const credential = GithubAuthProvider.credentialFromResult(result);

				if (credential) {
					const token = credential.accessToken;

					// The signed-in user info.
					const user = result.user;
				}
			})
			.catch(error => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GithubAuthProvider.credentialFromError(error);
				// ...
			});
	}

	return (
		<Button {...restProps} onClick={handleLogin}>
			<FaGithub className="mr-2 size-6" /> Login com Github
		</Button>
	);
}
