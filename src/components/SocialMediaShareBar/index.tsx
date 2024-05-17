import { PATHS } from "@/constants/Path";
import { asText } from "@prismicio/client";
import { ComponentProps } from "react";
import { FaFacebook, FaLinkedin, FaReddit, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { BlogPostDefaultDocument } from "../../../prismicio-types";
import { SocialMediaButton } from "../SocialMediaButton";

interface SocialMediaShareBarProps extends ComponentProps<"div"> {
	post: BlogPostDefaultDocument;
}

export function SocialMediaShareBar({ post, className, ...restProps }: SocialMediaShareBarProps) {
	const postUrl = `${process.env.SITE_DOMAIN}${PATHS.BLOG}/${post.uid}`;
	const postTitle = asText(post.data.title);
	const postDescription = asText(post.data.subtitle);

	const linkedinUrl = new URL(
		`https://www.linkedin.com/shareArticle?mini=true&url=${postUrl}&title=${postTitle}&summary=${postDescription}&source=${process.env.SITE_DOMAIN}`
	);

	const facebookUrl = new URL(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`);

	const twitterUrl = new URL(
		`https://twitter.com/intent/tweet?url=${postUrl}&text=${postDescription}&hashtags=${post.tags.join()}`
	);

	const redditUrl = new URL(`https://www.reddit.com/submit?url=${postUrl}&title=${postTitle}`);

	const whatsappUrl = new URL(`https://api.whatsapp.com/send?text=${postUrl}`);

	const links = [
		{
			url: linkedinUrl.href,
			label: "LinkedIn",
			icon: FaLinkedin,
		},
		{
			url: facebookUrl.href,
			label: "Facebook",
			icon: FaFacebook,
		},
		{
			url: twitterUrl.href,
			label: "Twitter",
			icon: FaXTwitter,
		},
		{
			url: redditUrl.href,
			label: "Reddit",
			icon: FaReddit,
		},
		{
			url: whatsappUrl.href,
			label: "Whatsapp",
			icon: FaWhatsapp,
		},
	];

	return (
		<div className={twMerge("flex w-fit gap-2", className)} {...restProps}>
			{links.map(({ url, label, icon }) => (
				<SocialMediaButton
					key={label}
					icon={icon}
					href={url}
					aria-label={`Botão para compartilhar no(a) ${label}`}
					iconClassName="size-6"
					className="border border-ctp-surface0 bg-ctp-crust"
				/>
			))}
		</div>
	);
}
