/**
 * Fetch a URL and return the response
 */
export const get = async (endpoint: string, uri: string) => {
  const res = await fetch(endpoint + uri);
  return await res.json();
};
