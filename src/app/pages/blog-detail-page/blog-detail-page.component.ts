import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlogDetailService } from '../../services/blog-detail/blog-detail.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { BlogDetailData } from '../../templates/blog-detail-tpml/blog-detail-tpml.component.i';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.scss'],
})
export class BlogDetailPageComponent implements OnInit, OnDestroy {
  notifier = new Subject();
  blogDetailData!: BlogDetailData;
  blogId = 0;
  titlePage='Blog Detail Page'
  constructor(
    private route: ActivatedRoute,
    private blogDetailServices: BlogDetailService
  ) {
    this.route.params
      .pipe(takeUntil(this.notifier))
      .subscribe((data: Params) => {
        this.blogId = data?.['id'];
      });
  }
  ngOnInit(): void {
    this.blogDetailServices.fetchBlogDetailData(this.blogId);

    this.blogDetailServices
      .getBlogDetailData()
      .pipe(takeUntil(this.notifier))
      .subscribe((blogDetailData:any) => {
        if (!!blogDetailData?.data?.id) {
          
          this.blogDetailData = blogDetailData;
        }
      });
  }
  ngOnDestroy(): void {
    this.blogDetailServices.clearStore();
  }
}
