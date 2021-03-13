export type CollectionResponse = Record<string, string>[];
export type PageResponse = Record<string, Record<string, unknown>>;

export interface Post {
  id: string;
  title: string;
  tags: string[];
  date: Date;
  created?: Date;
  icon?: string;
  image?: string;
  blocks?: Block[];
}

export interface Block {
  type: string;
  content: string;
}
