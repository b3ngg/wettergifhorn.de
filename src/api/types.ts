export type CollectionResponse = Record<string, string>[];
export type PageResponse = Record<string, Record<string, unknown>>;

export interface Post {
  title: string;
  date: Date;
  tags: string[];
  icon: string;
  image: string;
  blocks: Block[];
}

export interface Block {
  type: string;
  content: string;
}
