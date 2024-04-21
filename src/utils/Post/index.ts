/**
 * @description Get the time to read a post in minutes;
 * @param data The content of the post as continuous string;
 * @returns a number representing the time to read in minutes;
 */
export function getTimeToReadPost(data: string) {
	// Remove HTML content
	const cleanContent = data.replace(/<[^>]*>/g, "");

	// Divide the content in words
	const words = cleanContent.split(/\s+/);

	// Get the words count
	const wordCount = words.length;

	// Average reading speed is 265 words per minute
	const wordsPerMinute = 265;

	// Calculate time to read
	return Math.ceil(wordCount / wordsPerMinute);
}
