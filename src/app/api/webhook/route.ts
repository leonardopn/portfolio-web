import { PATHS } from "@/constants/Path";
import { prismicClient } from "@/prismicio";
import { isFilled } from "@prismicio/client";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const WEBHOOK_PAYLOAD_SCHEMA = z
	.object({
		type: z.string(),
		masterRef: z.string(),
		documents: z.array(z.string()),
		domain: z.string(),
		apiUrl: z.string(),
		secret: z.string(),
	})
	.strip();

/**
 * @description Route to observe when a post is created or updated, then revalidate cache from some paths.
 */
export async function POST(request: NextRequest) {
	try {
		//NOTE: Get body from request
		const body = await request.json();

		//NOTE: Validate body using zod
		const payload = WEBHOOK_PAYLOAD_SCHEMA.parse(body);

		//NOTE: If payload has an invalid secret, return 401
		if (payload.secret !== process.env.PRISMIC_WEBHOOK_SECRET) {
			return NextResponse.json("Invalid secret", { status: 401 });
		}

		//NOTE: Get the associated post by ID
		const updatedPost = await prismicClient().getByID(payload.documents[0]);

		//NOTE: If post exists, revalidate some paths
		if (updatedPost) {
			//NOTE: Get next and previous posts
			const nextPost = updatedPost.data.nextpost;
			const previousPost = updatedPost.data.previouspost;

			//NOTE: Revalidate list posts page and the updated post page
			revalidatePath(PATHS.BLOG);
			revalidatePath(PATHS.BLOG_POST(updatedPost.uid));
			console.log("Revalidating paths: ", PATHS.BLOG, PATHS.BLOG_POST(updatedPost.uid));

			//NOTE: If the updatedPost has a next or previous post, revalidate those paths
			if (isFilled.contentRelationship(nextPost) && nextPost.uid) {
				revalidatePath(PATHS.BLOG_POST(nextPost.uid));
				console.log("Revalidating paths: ", PATHS.BLOG_POST(nextPost.uid));
			}

			if (isFilled.contentRelationship(previousPost) && previousPost.uid) {
				revalidatePath(PATHS.BLOG_POST(previousPost.uid));
				console.log("Revalidating paths: ", PATHS.BLOG_POST(previousPost.uid));
			}
		}

		//NOTE: Return OK to Prismic.
		return NextResponse.json("OK");
	} catch (error) {
		console.error(error);
		return NextResponse.json(error, { status: 500 });
	}
}
