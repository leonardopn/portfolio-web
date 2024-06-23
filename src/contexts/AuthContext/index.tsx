"use client";

import { useToast } from "@/components/ui/use-toast";
import { AUTH } from "@/services/firebase";
import {
	AuthError,
	GithubAuthProvider,
	GoogleAuthProvider,
	ProviderId,
	User,
	AuthErrorCodes,
	getRedirectResult,
	signInWithRedirect,
} from "firebase/auth";
import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";

type AuthProviders = keyof typeof ProviderId;

interface AuthContextProps {
	user: User | null;
	isLoading: boolean;
	isStartingAuth: boolean;
	lastAuthProviderUsed: AuthProviders | null;

	handleLogOut: VoidFunction;
	handleLoginWithGithub: () => Promise<never>;
	handleLoginWithGoogle: () => Promise<never>;
}

interface AuthProviderProps {
	children: ReactNode;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const [isStartingAuth, setIsStartingAuth] = useState(false);
	const [lastAuthProviderUsed, setLastAuthProviderUsed] = useState<AuthProviders | null>(null);

	const { toast } = useToast();

	const getAvailableOauthProviders = useCallback((providerId: AuthProviders) => {
		switch (providerId) {
			case "GOOGLE":
				return new GoogleAuthProvider();
			case "GITHUB":
				return new GithubAuthProvider();
			default:
				throw new Error("Provider not implemented");
		}
	}, []);

	const handleProcessAuth = useCallback(async () => {
		try {
			await getRedirectResult(AUTH);
		} catch (e) {
			const error = e as AuthError;

			if (error.code === AuthErrorCodes.NEED_CONFIRMATION) {
				toast({
					title: "Conta não associada ao provedor selecionado.",
					description: `identificamos que há uma conta associada ao email "${error.customData.email}", porém o provedor selecionado não está habilitado nas configurações.`,
					variant: "destructive",
				});
			}
		}

		AUTH.onAuthStateChanged(user => {
			setIsLoading(true);
			setUser(user);
			setIsLoading(false);
		});
	}, [toast]);

	const handleLogOut = useCallback(() => {
		AUTH.signOut();
	}, []);

	const handleLoginWithGithub = useCallback(() => {
		setIsStartingAuth(true);
		setLastAuthProviderUsed("GITHUB");

		const provider = getAvailableOauthProviders("GITHUB");

		return signInWithRedirect(AUTH, provider);
	}, [getAvailableOauthProviders]);

	const handleLoginWithGoogle = useCallback(() => {
		setIsStartingAuth(true);
		setLastAuthProviderUsed("GOOGLE");

		const provider = getAvailableOauthProviders("GOOGLE");

		return signInWithRedirect(AUTH, provider);
	}, [getAvailableOauthProviders]);

	useEffect(() => {
		handleProcessAuth();
	}, [handleProcessAuth]);

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				isStartingAuth,
				lastAuthProviderUsed,
				handleLogOut,
				handleLoginWithGithub,
				handleLoginWithGoogle,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuthContext() {
	const contextState = useContext(AuthContext);

	if (!contextState) {
		throw new Error(
			"O hook não tem acesso ao contexto. Envolva os componentes necessários em um AuthProvider"
		);
	}

	return contextState;
}
