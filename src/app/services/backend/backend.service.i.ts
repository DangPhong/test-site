// https://mock-api.nals.vn/api/v2

export interface GetBlogsRqParam {
  page?: number;
  offset?: number;
  search?: string;
  sort_by?: string;
  sort_direction?: string;
}

export interface ItemsBlogResponse {
  id?: number;
  title?: string;
  content?: string;
  comments_count?: number;
  image?: { url?: string };
  created_at?: string;
  updated_at?: string;
}

export interface Pagination {
  count: number;
  page: number;
  offset: number;
  total: number;
  prev: number;
  next: number;
}

export interface GetBlogsResponse {
  data: {
    items: ItemsBlogResponse[];
  };
  pagination: Pagination;
}

export interface UpsertBlogBody {
  blog: {
    title: string;
    content: string;
    image?: string;
  };
}

export interface UpsertResponse {
  id: number;
  title: string;
  content: string;
  comments_count: number;
  image: { url: string };
  created_at: string;
  updated_at: string;
}
