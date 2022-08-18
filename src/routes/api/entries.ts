import { getCollectionAsPosts } from '$lib/notion.server';
import type { RequestHandler } from '@sveltejs/kit';

export const get: RequestHandler = async () => {
	return {
		body: {
			entries: (await getCollectionAsPosts('e97b96a82dd64cfeac1ae43f4314e194')) as never
		}
	};
};
