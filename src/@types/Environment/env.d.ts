declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			SITE_DOMAIN: string;

			// Prismic
			PRISMIC_ENVIRONMENT: string;
			PRISMIC_ACCESS_TOKEN: string;
			PRISMIC_WEBHOOK_SECRET: string;

			// Firebase
			NEXT_PUBLIC_FIREBASE_API_KEY: string;
			NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string;
			NEXT_PUBLIC_FIREBASE_PROJECT_ID: string;
			NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: string;
			NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
			NEXT_PUBLIC_FIREBASE_APP_ID: string;
			NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID: string;
		}
	}
}

export {};
