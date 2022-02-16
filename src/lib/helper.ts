import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/de';

dayjs.locale('de');
dayjs.extend(relativeTime);

/**
 * Convert a date string safe to date object
 */
export const stringToDate = (string: string): Date => {
	const parts = string.split('-').map((part) => parseInt(part));

	return new Date(parts[0], parts[1] - 1, parts[2]);
};

/**
 * Fetch a URL and return the response
 */
export const get = async (endpoint: string, uri: string) => {
	const res = await fetch(endpoint + uri);
	return await res.json();
};

/**
 * Returns true if the date is on the current day
 */
export const isToday = (date: Date) => dayjs().isSame(date, 'day');

export const getRelativeTime = (date: Date) => dayjs(date).fromNow();

export const isWeekend = () => {
	const currentDate = new Date();
	return currentDate.getDay() === 0 || currentDate.getDay() === 6;
};
