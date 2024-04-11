interface TextFocusProps {
	children: React.ReactNode;
}

export function TextFocus({ children }: TextFocusProps) {
	return <b className="text-ctp-peach">{children}</b>;
}
