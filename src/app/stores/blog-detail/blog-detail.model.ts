export interface GetBlogDetailData {
  id?: number;
  title?: string;
  content?: string;
  comments_count?: number;
  image?: { url?: string };
  created_at?: string;
  updated_at?: string;
}

export interface GetBlogResponseFailure {
  message: string;
  type: string;
  status: string;
  path: string;
  error_code: string;
  errors: {
    field: string;
    code: string;
    message: string;
  }[];
}

export interface GetBlogEditData {
  id?: number;
  title?: string;
  content?: string;
  comments_count?: number;
  image?: { url?: string };
  created_at?: string;
  updated_at?: string;
}

export interface RequestBodyUpsertData {
  id?: number;
  blog: {
    title: string;
    content: string;
    image?: string;
  };
}

export interface UpsertResponseData {
  id: number;
  title: string;
  content: string;
  comments_count: number;
  image: { url: string };
  created_at: string;
  updated_at: string;
}
