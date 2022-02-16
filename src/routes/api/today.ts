import { isToday } from '$lib/helper';
import { addAdditionalDataToPost, getCollectionAsPosts } from '$lib/notion.server';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	const allEntries = await getCollectionAsPosts('d85f75983c61439a87f132323a409d0d');
	const requestedEntries = allEntries.filter((p) => isToday(p.date));

	const posts = await Promise.all(requestedEntries.map((entry) => addAdditionalDataToPost(entry)));

	return {
		body: {
			posts: posts as never
		}
	};
};
