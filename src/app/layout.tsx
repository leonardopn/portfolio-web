import { GoToTopButton } from "@/components/GoToTopButton";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme/NextThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import "./globals.scss";
import { UserAvatar } from "@/components/UserAvatar";
import { AuthProvider } from "@/contexts/AuthContext";

const fontDefault = JetBrains_Mono({ subsets: ["latin"] });

const title = "Portfólio - Leonardo Petta";
const description =
	"Leonardo, desenvolvedor Fullstack, com formação em Ciência da Computação e pós-graduações em Cloud Computing e Desenvolvimento de Aplicativos Móveis. Experiência com Firebase, React, Next, MongoDB, Node, e Typescript. Descubra meus projetos, leia artigos e inspire-se!";

export const metadata: Metadata = {
	title,
	authors: [{ name: "Leonardo Petta do Nascimento", url: "https://github.com/leonardopn" }],
	description,
	metadataBase: new URL(process.env.SITE_DOMAIN),
	twitter: {
		images: ["/banner.webp"],
		card: "summary",
		title,
		description,
	},
	openGraph: {
		images: ["/banner.webp"],
		title,
		description,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={cn(
					"text-text ctp-latte min-h-screen bg-ctp-base dark:ctp-mocha sm:!p-5",
					fontDefault.className
				)}>
				<AuthProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange>
						<main className="mx-auto max-w-screen-xl lg:space-y-5">
							<section className="flex items-center justify-between">
								<Logo className="hidden text-center lg:block lg:text-left" />
								<UserAvatar />
							</section>

							{children}
						</main>
						<GoToTopButton />
					</ThemeProvider>
					<PrismicPreview repositoryName={process.env.PRISMIC_ENVIRONMENT} />
				</AuthProvider>
			</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
}
