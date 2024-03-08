export interface ItemsBlogData {
  id?: number;
  title?: string;
  content?: string;
  comments_count?: number;
  image?: { url?: string };
  created_at?: string;
  updated_at?: string;
}

export interface PaginationData {
  count: number;
  page: number;
  offset: number;
  total: number;
  prev: number;
  next: number;
}

export interface GetBlogsData {
  data: {
    items: ItemsBlogData[];
  };
  pagination: PaginationData;
}
export interface FailedReason {
  code?: number;
  reason?: string;
}
