"use client";

import { useToast } from "@/components/ui/use-toast";
import { AUTH } from "@/services/firebase";
import {
	AuthError,
	AuthErrorCodes,
	GithubAuthProvider,
	GoogleAuthProvider,
	ProviderId,
	User,
	UserCredential,
	getRedirectResult,
	linkWithPopup,
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
	handleLoginOauth: (providerId: AuthProviders) => Promise<UserCredential>;
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

	const handleLoginOauth = useCallback(
		(providerId: AuthProviders) => {
			try {
				setIsStartingAuth(true);
				setLastAuthProviderUsed(providerId);

				const provider = getAvailableOauthProviders(providerId);

				if (user) {
					return linkWithPopup(user, provider);
				}

				return signInWithRedirect(AUTH, provider);
			} finally {
				setIsStartingAuth(false);
			}
		},
		[getAvailableOauthProviders, user]
	);

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
				handleLoginOauth,
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
