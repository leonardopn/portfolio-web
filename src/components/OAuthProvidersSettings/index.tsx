import { OAuthProviderSwitcher } from "./OAuthProviderSwitcher";

export function OAuthProvidersSettings() {
	return (
		<div>
			<h3 className="mb-4 text-lg font-medium">Autenticação</h3>
			<div className="space-y-4">
				<OAuthProviderSwitcher providerId="GOOGLE" />
				<OAuthProviderSwitcher providerId="GITHUB" />
			</div>
		</div>
	);
}
