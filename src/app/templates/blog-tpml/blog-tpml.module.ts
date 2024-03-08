import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogTpmlComponent } from './blog-tpml.component';
import { PaginationModule } from 'src/app/component/pagination/pagination.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonListModule } from 'src/app/component/button-list/button-list.module';

@NgModule({
  declarations: [BlogTpmlComponent],
  imports: [
    PaginationModule,
    FormsModule,
    ButtonListModule,
    CommonModule,
  ],
  exports: [BlogTpmlComponent],
})
export class BlogTpmlModule {}
