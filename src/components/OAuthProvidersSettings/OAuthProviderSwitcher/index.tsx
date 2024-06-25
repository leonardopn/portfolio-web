import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { useAuthContext } from "@/contexts/AuthContext";
import { ProviderId, unlink } from "firebase/auth";
import { useMemo, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface OAuthProviderSwitcherProps {
	providerId: keyof typeof ProviderId;
}

export function OAuthProviderSwitcher({ providerId }: OAuthProviderSwitcherProps) {
	const [isLoading, setIsLoading] = useState(false);

	const { user, handleLoginWithGithub, handleLoginWithGoogle } = useAuthContext();
	const { toast } = useToast();

	const { Icon, label, linkFn } = useMemo(() => {
		switch (providerId) {
			case "GITHUB":
				return { Icon: FaGithub, label: "Github", linkFn: handleLoginWithGithub };
			case "GOOGLE":
				return { Icon: FcGoogle, label: "Google", linkFn: handleLoginWithGoogle };
			default:
				throw new Error(`Provider "${providerId}" not implemented`);
		}
	}, [handleLoginWithGithub, handleLoginWithGoogle, providerId]);

	const switcherInitialValue = useMemo(() => {
		return (
			user?.providerData.some(provider => provider.providerId === ProviderId[providerId]) ||
			false
		);
	}, [user?.providerData, providerId]);

	async function handleLinkUnlink(linkStatus: boolean) {
		try {
			setIsLoading(true);
			if (linkStatus) {
				await linkFn();
			} else {
				user && (await unlink(user, ProviderId[providerId]));
			}
		} catch (error) {
			console.error(error);
			toast({
				title: "Erro ao realizar a operação",
				description: "Por favor, tente novamente mais tarde.",
				variant: "destructive",
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="flex items-center justify-between gap-1 rounded-lg border border-ctp-surface0 bg-ctp-crust p-4">
			<header className="space-y-1">
				<h1 className="flex items-center font-bold">
					<Icon className="mr-2 size-6" /> Login com {label}
				</h1>
				<h2 className="text-xs text-ctp-subtext1">
					Habilite/desabilite a autenticação com {label}.
				</h2>
			</header>

			<Switch
				disabled={isLoading}
				onCheckedChange={handleLinkUnlink}
				checked={switcherInitialValue}
			/>
		</div>
	);
}
