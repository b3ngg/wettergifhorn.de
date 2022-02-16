import { writable } from 'svelte/store';
import type { Post } from './types';

export const lastPost = writable<Post>(null);
