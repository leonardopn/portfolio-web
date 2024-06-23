import { useAuthContext } from "@/contexts/AuthContext";
import { Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Button, ButtonProps } from "../ui/button";

interface GoogleLoginButtonProps extends ButtonProps {}

export function GoogleLoginButton({ ...restProps }: GoogleLoginButtonProps) {
	const { handleLoginWithGoogle, isStartingAuth, lastAuthProviderUsed } = useAuthContext();

	return (
		<Button
			{...restProps}
			onClick={handleLoginWithGoogle}
			disabled={isStartingAuth}
			className="border border-[#4e83e6] !bg-[#ffffff] !text-[#4e83e6] transition-opacity hover:opacity-60 dark:hover:opacity-100">
			{isStartingAuth && lastAuthProviderUsed === "GOOGLE" ? (
				<Loader2 className="mr-2 size-6 animate-spin" />
			) : (
				<FcGoogle className="mr-2 size-6" />
			)}
			Login com Google
		</Button>
	);
}
