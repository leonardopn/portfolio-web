/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.prismic.io",
			},
		],
	},
	rewrites: async () => {
		return [
			{
				source: "/__/auth",
				destination: `https://${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
			},
		];
	},
};

export default nextConfig;
