import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIsLoading } from '../../stores/blogs';
import * as blogDetailActions from '../../stores/blog-detail/blog-detail.actions';
import {
  GetBlogDetailData,
  RequestBodyUpsertData,
  selectBlogDetail,
  selectUpsertBlogData,
} from '../../stores/blog-detail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogDetailService {
  constructor(private store: Store) {}

  getBlogDetailData(): Observable<GetBlogDetailData> {
    return this.store.select(selectBlogDetail);
  }

  fetchBlogDetailData(id: number) {
    this.store.dispatch(blogDetailActions.getBlogDetail({ id }));
  }

  upsertBlog(data: RequestBodyUpsertData) {
    this.store.dispatch(blogDetailActions.upsertBlog({ payload: data }));
  }

  getIsLoading() {
    return this.store.select(selectIsLoading);
  }

  clearStore() {
    this.store.dispatch(blogDetailActions.cancelEntry());
  }
}
