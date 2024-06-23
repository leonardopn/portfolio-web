"use client";

import { AUTH } from "@/services/firebase";
import {
	GithubAuthProvider,
	User,
	signInWithRedirect,
	ProviderId,
	GoogleAuthProvider,
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

	useEffect(() => {
		AUTH.onAuthStateChanged(user => {
			setIsLoading(true);
			setUser(user);
			setIsLoading(false);
		});
	}, []);

	const handleLogOut = useCallback(() => {
		AUTH.signOut();
	}, []);

	const handleLoginWithGithub = useCallback(() => {
		setIsStartingAuth(true);
		setLastAuthProviderUsed("GITHUB");

		const provider = new GithubAuthProvider();

		return signInWithRedirect(AUTH, provider);
	}, []);

	const handleLoginWithGoogle = useCallback(() => {
		setIsStartingAuth(true);
		setLastAuthProviderUsed("GOOGLE");

		const provider = new GoogleAuthProvider();

		return signInWithRedirect(AUTH, provider);
	}, []);

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
