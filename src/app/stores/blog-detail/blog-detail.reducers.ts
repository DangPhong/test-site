import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import {
  cancelEntry,
  getBlogDetail,
  getBlogDetailFailure,
  getBlogDetailSuccess,
  upsertBlogFailure,
  upsertBlogSuccess,
} from './blog-detail.actions';
import { GetBlogDetailData, RequestBodyUpsertData } from './blog-detail.model';

export const blogsFeatureKey = 'blogs-detail';

export const blogDetailSelector =
  createFeatureSelector<BlogDetailState>('blogDetailStore');

// States
export interface BlogDetailState {
  blogDetail: GetBlogDetailData;

  upsertBlogData: RequestBodyUpsertData;
  isLoading: boolean;
}

export const initialUpsertBlogData: RequestBodyUpsertData = {
  id: undefined,
  blog: {
    title: '',
    content: '',
    image: '',
  },
};

export const initialGetBlogDetailData: GetBlogDetailData = {
  id: undefined,
  title: '',
  content: '',
  image: {
    url: '',
  },
  comments_count: 0,
  created_at: '',
  updated_at: '',
};

export const initialState: BlogDetailState = {
  blogDetail: initialGetBlogDetailData,
  upsertBlogData: initialUpsertBlogData,
  isLoading: false,
};

export const blogDetailReducer = createReducer<BlogDetailState>(
  initialState,
  on(getBlogDetail, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(getBlogDetailSuccess, (state, { blogDetail }) => {
    return {
      ...state,
      blogDetail,
      isLoading: false,
    };
  }),

  on(getBlogDetailFailure, upsertBlogFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(upsertBlogSuccess, (state, { payload }) => {
    return {
      ...state,
      upsertBlogData: {
        ...state.upsertBlogData,
        blog: {
          ...state.upsertBlogData.blog,
          title: payload.title,
          content: payload.content,
          image: payload.image?.url,
        },
        id: payload.id,
      },
      isLoading: false,
    };
  }),
  on(cancelEntry, () => {
    return {
      blogDetail: initialGetBlogDetailData,
      upsertBlogData: initialUpsertBlogData,
      isLoading: false,
    };
  })
);
