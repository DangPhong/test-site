import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  GetBlogsResponse as GetBlogsResponse,
  GetBlogsRqParam,
  ItemsBlogResponse,
  UpsertBlogBody,
  UpsertResponse,
} from './backend.service.i';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor(private httpClient: HttpClient) {}

  private get endPointApi() {
    return 'https://mock-api.nals.vn/api/v2';
  }

  public getBlogs(params?: GetBlogsRqParam): Observable<any> {
    const endPoint = `${this.endPointApi}/${'blogs'}`;
    // const paramsObj = new HttpParams({
    //   fromObject: {
    //     ...params,
    //   },
    // });

    let queryParams = new HttpParams();

    if (params?.offset != null) {
      queryParams = queryParams.append('offset', params.offset);
    }
    if (params?.page != null) {
      queryParams = queryParams.append('page', params.page);
    }
    if (params?.search != null) {
      queryParams = queryParams.append('search', params.search);
    }
    if (params?.sort_by != null) {
      queryParams = queryParams.append('sort_by', params.sort_by);
    }
    if (params?.sort_direction != null) {
      queryParams = queryParams.append('sort_direction', params.sort_direction);
    }

    return this.httpClient.get<GetBlogsResponse>(endPoint, {
      params: queryParams,
    });
  }

  public getBlogDetail(id: number): Observable<ItemsBlogResponse> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;
    return this.httpClient.get<ItemsBlogResponse>(endPoint);
  }

  public upsertBlog(
    id: number | undefined,
    body: UpsertBlogBody
  ): Observable<UpsertResponse> {
    const endPoint = `${this.endPointApi}/${'blogs'}`;
    const rqBody: UpsertBlogBody = {
      blog: {
        content: body.blog.content,
        title: body.blog.title,
        image: body.blog.image,
      },
    };

    if (!!id) {
      return this.httpClient.put<UpsertResponse>(`blogs/${id}`, rqBody);
    }
    return this.httpClient.post<UpsertResponse>(endPoint, rqBody);
  }

  public deleteBlog(id: number): Observable<null> {
    const endPoint = `${this.endPointApi}/${`blogs/${id}`}`;
    return this.httpClient.delete<null>(endPoint);
  }
}
