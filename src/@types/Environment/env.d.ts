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
			FIREBASE_API_KEY: string;
			FIREBASE_AUTH_DOMAIN: string;
			FIREBASE_PROJECT_ID: string;
			FIREBASE_STORAGE_BUCKET: string;
			FIREBASE_MESSAGING_SENDER_ID: string;
			FIREBASE_APP_ID: string;
			FIREBASE_MEASUREMENT_ID: string;
		}
	}
}

export {};
