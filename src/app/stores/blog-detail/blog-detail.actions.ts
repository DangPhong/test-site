import { createAction, props } from '@ngrx/store';
import {
  GetBlogResponseFailure,
  GetBlogDetailData,
  GetBlogEditData,
  UpsertResponseData,
  RequestBodyUpsertData,
} from './blog-detail.model';

const prefix = '[Blogs Detail-Upsert]';

export const getBlogDetail = createAction(
  `${prefix} Get blog detail`,
  props<{ id: number }>()
);

export const getBlogDetailSuccess = createAction(
  `${getBlogDetail.type} success`,
  props<{ blogDetail: GetBlogDetailData }>()
);

export const getBlogDetailFailure = createAction(
  `${getBlogDetail.type} failure`,
  props<{ payload: GetBlogResponseFailure }>()
);

// export const getUpsertBlog = createAction(
//   `${prefix} Get blog detail`,
//   props<{ id: number }>()
// );

// export const getUpsertBlogSuccess = createAction(
//   `${getUpsertBlog.type} success`,
//   props<{ blogEditData: GetBlogEditData }>()
// );

// export const getUpsertBlogFailure = createAction(
//   `${getUpsertBlog.type} failure`,
//   props<{ payload: GetBlogResponseFailure }>()
// );

export const upsertBlog = createAction(
  `${prefix} Upsert blog`,
  props<{ payload: RequestBodyUpsertData }>()
);

export const upsertBlogSuccess = createAction(
  `${upsertBlog.type} Upsert blog success`,
  props<{ payload: UpsertResponseData }>()
);

export const upsertBlogFailure = createAction(
  `${upsertBlog.type} Upsert blog failure`,
  props<{ payload: GetBlogResponseFailure }>()
);

export const cancelEntry = createAction(`${prefix} Cancel entry`);
