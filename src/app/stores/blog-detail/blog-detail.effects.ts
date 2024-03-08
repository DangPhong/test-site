import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import * as blogDetailActions from './blog-detail.actions';
import { BackendService } from '../../services/backend/backend.service';
import { GetBlogResponseFailure, GetBlogDetailData } from './blog-detail.model';
import { UpsertResponse } from '../../services/backend/backend.service.i';
import { paramRequest } from '../blogs';

import * as blogsActions from '../blogs/blogs.actions';

@Injectable()
export class BlogDetailEffects {
  constructor(
    private actions$: Actions,
    private backendService: BackendService
  ) {}

  public getBlogDetail = createEffect(() =>
    this.actions$.pipe(
      ofType(blogDetailActions.getBlogDetail),
      switchMap((payload) =>
        this.backendService.getBlogDetail(payload.id).pipe(
          map((res: GetBlogDetailData) => {
            return blogDetailActions.getBlogDetailSuccess({ blogDetail: res });
          }),
          catchError((err: GetBlogResponseFailure) =>
            of(blogDetailActions.getBlogDetailFailure({ payload: err }))
          )
        )
      )
    )
  );

  public upsertBlog = createEffect(() =>
    this.actions$.pipe(
      ofType(blogDetailActions.upsertBlog),
      switchMap((data) => {
        const id = data.payload.id ? data.payload.id : undefined;

        return this.backendService.upsertBlog(id, data.payload).pipe(
          map((res: UpsertResponse) => {
            return blogDetailActions.upsertBlogSuccess({
              payload: res,
            });
          }),
          catchError((err: GetBlogResponseFailure) =>
            of(blogDetailActions.upsertBlogFailure({ payload: err }))
          )
        );
      })
    )
  );

  public upsertBlogSuccess = createEffect(() => {
    return this.actions$.pipe(
      ofType(blogDetailActions.upsertBlogSuccess),
      map(() => blogsActions.getBlogs(paramRequest))
    );
  });
}
