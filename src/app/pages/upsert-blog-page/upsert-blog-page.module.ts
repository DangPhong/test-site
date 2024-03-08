import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertBlogPageComponent } from './upsert-blog-page.component';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { UpsertBlogTpmlModule } from '../../templates/upsert-blog-tpml/upsert-blog-tpml.module';

@NgModule({
  declarations: [UpsertBlogPageComponent],
  imports: [
    CommonModule,
    EffectsModule,
    UpsertBlogTpmlModule,
    RouterModule.forChild([
      {
        path: '',
        component: UpsertBlogPageComponent,
      },
    ]),
  ],
})
export class UpsertBlogPageModule {}
