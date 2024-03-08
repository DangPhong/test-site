import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/blogs', pathMatch: 'full' },
  {
    path: 'blogs',
    loadChildren: () =>
      import('./pages/blogs-page/blogs-page.module').then(
        (m) => m.BlogsPageModule
      ),
  },
  {
    path: 'blog/:id',
    loadChildren: () =>
      import('./pages/blog-detail-page/blog-detail-page.module').then(
        (m) => m.BlogDetailPageModule
      ),
  },
  {
    path: 'create-blog',
    loadChildren: () =>
      import('./pages/upsert-blog-page/upsert-blog-page.module').then(
        (m) => m.UpsertBlogPageModule
      ),
  },
  {
    path: 'edit-blog/:id',
    loadChildren: () =>
      import('./pages/upsert-blog-page/upsert-blog-page.module').then(
        (m) => m.UpsertBlogPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
