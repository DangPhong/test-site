import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { BlogDetailState, blogDetailReducer } from './blog-detail';
import { BlogsState, blogsReducer } from './blogs';
import { InjectionToken } from '@angular/core';

export interface AppState {
  readonly blogStore: BlogsState;
  readonly blogDetailStore: BlogDetailState;
}

export function getReducers(): ActionReducerMap<AppState> {
  return {
    blogStore: blogsReducer,
    blogDetailStore: blogDetailReducer,
  };
}

export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'reducers'
);

export const blogSelector = createFeatureSelector<BlogsState>('blogStore');
