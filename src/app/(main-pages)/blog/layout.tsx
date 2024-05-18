interface BlogPageLayoutProps {
	children: React.ReactNode;
}

export default function BlogPageLayout({ children }: BlogPageLayoutProps) {
	return (
		<div className="flex h-full flex-col justify-between gap-5 text-ctp-text">{children}</div>
	);
}
