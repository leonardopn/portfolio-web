declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			SITE_DOMAIN: string;

			// Prismic
			PRISMIC_ENVIRONMENT: string;
			PRISMIC_ACCESS_TOKEN: string;
		}
	}
}

export {};
