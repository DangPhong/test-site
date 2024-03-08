import { GetBlogsData } from './blogs.model';
import { createReducer, on } from '@ngrx/store';
import {
  cancelEntry,
  deleteBlog,
  deleteBlogFailure,
  deleteBlogSuccess,
  getBlogs,
  getBlogsFailure,
  getBlogsSuccess,
} from './blogs.actions';
import { GetBlogsRqParam } from '../../services/backend/backend.service.i';

export const blogsFeatureKey = 'blogs';

// States
export interface BlogsState {
  blogs: GetBlogsData;
  isLoading: boolean;
}
export const paramRequest: GetBlogsRqParam = {};

export const initialGetBlogsData: GetBlogsData = {
  data: {
    items: [],
  },
  pagination: {
    page: 1,
    count: 0,
    next: 0,
    total: 0,
    prev: 0,
    offset: 0,
  },
};

export const initialState: BlogsState = {
  blogs: initialGetBlogsData,
  isLoading: false,
};

export const blogsReducer = createReducer<BlogsState>(
  initialState,
  on(getBlogs, deleteBlog, (state) => {
    return {
      ...state,
      isLoading: true,
    };
  }),

  on(getBlogsSuccess, (state, { blogs }) => {
    return {
      ...state,
      blogs,
      isLoading: false,
    };
  }),

  on(getBlogsFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),

  on(deleteBlogSuccess, deleteBlogFailure, (state) => {
    return {
      ...state,
      isLoading: false,
    };
  }),
  on(cancelEntry, () => {
    return {
      blogs: initialGetBlogsData,
      isLoading: false,
    };
  })
);
