import { get, stringToDate } from './helper';
import type { CollectionResponse, PageResponse, Post } from './types';

const ENDPOINT = 'https://notion-api.splitbee.io/v1/';

/**
 * Fetch a collection of notion pages from the api
 * @param id ID of the collection
 * @returns Collection object
 */
export const getCollection = async (
  id: string
): Promise<CollectionResponse> => {
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

  return collection.map(
    (item): Post => {
      return {
        id: item.id,
        title: item['Name'],
        date: stringToDate(item['Date']),
        tags: (item['Tags'] as unknown) as string[],
      };
    }
  );
};
