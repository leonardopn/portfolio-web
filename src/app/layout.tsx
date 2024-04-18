import { GoToTopButton } from "@/components/GoToTopButton";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme/NextThemeProvider";
import type { Metadata } from "next";
import "./globals.css";
import { Logo } from "@/components/Logo";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";

const fontDefault = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Leonardo Petta - Portfólio",
	authors: [{ name: "Leonardo Petta do Nascimento", url: "https://github.com/leonardopn" }],
	description:
		"Descubra o mundo da programação com Leonardo Petta, um desenvolvedor apaixonado por compartilhar projetos inovadores e insights técnicos. Explore tutoriais detalhados, análises de tecnologias emergentes e uma jornada pessoal através do código.",

	twitter: {
		images: ["/banner.webp"],
		card: "summary",
		title: "Leonardo Petta - Portfólio",
		description:
			"Descubra o mundo da programação com Leonardo Petta, um desenvolvedor apaixonado por compartilhar projetos inovadores e insights técnicos. Explore tutoriais detalhados, análises de tecnologias emergentes e uma jornada pessoal através do código.",
	},
	openGraph: {
		images: ["/banner.webp"],
		title: "Leonardo Petta - Portfólio",
		description:
			"Descubra o mundo da programação com Leonardo Petta, um desenvolvedor apaixonado por compartilhar projetos inovadores e insights técnicos. Explore tutoriais detalhados, análises de tecnologias emergentes e uma jornada pessoal através do código.",
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
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<main className="mx-auto max-w-screen-xl">
						<Logo className="mb-5 hidden text-center lg:block lg:text-left" />
						{children}
					</main>
					<GoToTopButton />
				</ThemeProvider>
			</body>
			<Analytics />
			<SpeedInsights />
		</html>
	);
}
