/* eslint-disable @typescript-eslint/no-explicit-any */
import { get, stringToDate } from './helper';
import type { Block, CollectionResponse, PageResponse, Post } from './types';

const ENDPOINT = 'https://notion-api.splitbee.io/v1/';

/**
 * Fetch a collection of notion pages from the api
 * @param id ID of the collection
 * @returns Collection object
 */
export const getCollection = async (id: string): Promise<CollectionResponse> => {
	return await get(ENDPOINT, 'table/' + id);
};

/**
 * Fetch a notion page from the api
 * @param id ID of the page
 * @returns Page object
 */
export const getPage = async (id: string): Promise<PageResponse> => {
	return await get(ENDPOINT, 'page/' + id);
};

/**
 * Fetches and converts a notion collection in post objects
 * @param id ID of the notion collection
 * @returns Array of post objects
 */
export const getCollectionAsPosts = async (id: string): Promise<Post[]> => {
	const collection = await getCollection(id);

	return collection
		.filter((page) => !page['Draft'])
		.map((item): Post => {
			return {
				id: item.id,
				title: item['Name'],
				tags: item['Tags'] as unknown as string[],
				date: stringToDate(item['Date'])
			};
		})
		.sort((a, b) => b.date.getTime() - a.date.getTime());
};

/**
 * Extract text blocks from a given page
 * @param page The page object
 * @returns Array of blocks
 */
export const getTextBlocksFromPage = (page: PageResponse): Block[] => {
	const pageData = Object.values(page)[0].value as Record<string, any>;

	const content = pageData.content as string[];
	if (!content) return [{ type: 'text', content: '' }];

	return content
		.map((contentId) => {
			const block = page[contentId].value as Record<string, any>;
			if (block.type !== 'text') return;

			const value = block.properties?.title?.map((value) => value[0]).join('') as string;

			return {
				type: 'text',
				content: value ?? ''
			};
		})
		.filter((block) => block.content !== '');
};

/**
 * Fetch additional and optional data for a page
 * It's useful to have a different function for data that needs a individual request,
 * so the function can be called after the initial page load for post that are visible.
 * @param post Post object with required data
 * @returns Post object with added optional data, if present (otherwise the value is undefined)
 */
export const addAdditionalDataToPost = async (post: Post): Promise<Post> => {
	const page = await getPage(post.id);
	// First page block containing page data
	const pageData = Object.values(page)[0].value as Record<string, any>;
	return {
		...post,
		created: new Date(pageData.created_time),
		icon: pageData.format?.page_icon,
		image: pageData.format?.page_cover ? pageData.format?.page_cover + '&w=1400' : undefined,
		blocks: getTextBlocksFromPage(page)
	};
};
