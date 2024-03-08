import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogsPageComponent } from './blogs-page.component';
import { EffectsModule } from '@ngrx/effects';
import { BlogTpmlModule } from 'src/app/templates/blog-tpml/blog-tpml.module';
import { StoreModule } from '@ngrx/store';
import { blogsFeatureKey, blogsReducer } from 'src/app/stores/blogs';
import { LoadingModule } from 'src/app/component/loading/loading.module';
const routes: Routes = [
  {
    path: '',
    component: BlogsPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogsRoutingModule {}

@NgModule({
  declarations: [BlogsPageComponent],
  imports: [
    LoadingModule,
    CommonModule,
    BlogsRoutingModule,
    EffectsModule,
    BlogTpmlModule,
    // StoreModule.forFeature(blogsFeatureKey, blogsReducer),
  ],
})
export class BlogsPageModule {}
