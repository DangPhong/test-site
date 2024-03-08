import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailPageComponent } from './blog-detail-page.component';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { BlogDetailTpmlModule } from '../../templates/blog-detail-tpml/blog-detail-tpml.module';

@NgModule({
  declarations: [BlogDetailPageComponent],
  imports: [
    CommonModule,
    EffectsModule,
    BlogDetailTpmlModule,
    RouterModule.forChild([
      {
        path: '',
        component: BlogDetailPageComponent,
      },
    ]),
  ],
})
export class BlogDetailPageModule {}
