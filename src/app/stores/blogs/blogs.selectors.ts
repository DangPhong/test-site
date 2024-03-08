import { createSelector } from '@ngrx/store';

import { blogSelector } from '..';
import { GetBlogsData } from './blogs.model';

// export const selectBlogsState =
//   createFeatureSelector<BlogsState>(blogsFeatureKey);

export const selectBlogs = createSelector(
  blogSelector,
  (projector): GetBlogsData => {

    return projector.blogs;
  }
);

export const selectIsLoading = createSelector(
  blogSelector,
  (projector): boolean => projector.isLoading
);
