export type PostEntry = {
  title: string;
  content: string;
  createdAt: string;
  visibility: 'public' | 'url' | 'author';
  readingTime: string;
  rkey: string;
};
