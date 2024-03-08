export interface BlogDetailData {
    id?: number;
    title?: string;
    content?: string;
    comments_count?: number;
    image?: { url?: string };
    created_at?: string;
    updated_at?: string;
  }