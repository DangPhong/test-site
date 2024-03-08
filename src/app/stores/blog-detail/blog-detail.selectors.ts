import { createSelector } from '@ngrx/store';
import { blogDetailSelector } from './blog-detail.reducers';
import { GetBlogDetailData, RequestBodyUpsertData } from './blog-detail.model';

export const selectBlogDetail = createSelector(
  blogDetailSelector,
  (projector): GetBlogDetailData => projector.blogDetail
);

export const selectUpsertBlogData = createSelector(
  blogDetailSelector,
  (projector): RequestBodyUpsertData => projector.upsertBlogData
);

export const selectIsLoading = createSelector(
  blogDetailSelector,
  (projector): boolean => projector.isLoading
);
