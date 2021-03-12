import { writable } from 'svelte/store';
import type { Post } from './api/types';

export let showInfo = writable(false);
export let firstPost = writable<Post>(undefined);
