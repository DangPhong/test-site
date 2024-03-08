import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpsertBlogTpmlComponent } from './upsert-blog-tpml.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpsertBlogTpmlComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UpsertBlogTpmlComponent],
})
export class UpsertBlogTpmlModule {}
