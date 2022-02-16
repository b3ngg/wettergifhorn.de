import { getCollectionAsPosts } from '$lib/notion.server';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		body: {
			entries: (await getCollectionAsPosts('d85f75983c61439a87f132323a409d0d')) as never
		}
	};
};
