import { get } from './helper';
import type { CollectionResponse, PageResponse } from './types';

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
