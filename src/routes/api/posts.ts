import { addAdditionalDataToPost, getCollectionAsPosts } from '$lib/notion.server';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async ({ url }) => {
	const start = +url.searchParams.get('start') || 0;
	const end = +url.searchParams.get('end') || 4;

	const allEntries = await getCollectionAsPosts('e97b96a82dd64cfeac1ae43f4314e194');
	const requestedEntries = allEntries.slice(start, end);

	const posts = await Promise.all(requestedEntries.map((entry) => addAdditionalDataToPost(entry)));

	return {
		body: {
			posts: posts as never
		}
	};
};
