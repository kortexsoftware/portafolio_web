export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  summary: string;
  imageUrl: string;
  tags: string[];
  url: string | null;
  publishedAt: Date;
}
