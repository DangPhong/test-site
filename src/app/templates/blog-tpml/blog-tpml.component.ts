import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmitPageChange } from 'src/app/component/pagination/pagination.i';
import {
  GetBlogsData,
  ItemsBlogData,
  PaginationData,
} from 'src/app/stores/blogs';

@Component({
  selector: 'app-blog-tpml',
  templateUrl: './blog-tpml.component.html',
  styleUrls: ['./blog-tpml.component.scss'],
})
export class BlogTpmlComponent {
  _itemPagination: PaginationData = {
    page: 1,
    count: 0,
    next: 0,
    total: 0,
    prev: 0,
    offset: 0,
  };

  _dataItems: ItemsBlogData[] = [];

  inputSearch = '';

  @Input() keyDefaultSortKey: string = 'id';

  @Input() keyDefaultSortDirection: string = 'asc';

  @Input() titlePage: string = 'Blog list';

  @Input() listKeySortTpm: string[] = [];

  @Input() sortDirectionTpm: string[] = [];

  @Input() set dataItems(data: GetBlogsData) {
    if (data?.data?.items?.length) {
      this._dataItems = data.data.items;
      this._itemPagination = data.pagination;
    }
  }

  @Output() emitPagesize = new EventEmitter<IEmitPageChange>();

  @Output() emitSearch = new EventEmitter<string>();

  @Output() emitKeySort = new EventEmitter<string>();

  @Output() emitSortDirection = new EventEmitter<string>();

  @Output() emitNewBlog = new EventEmitter<{ action: string; id?: number }>();

  pageChange(pagination: IEmitPageChange) {
    this.emitPagesize.emit(pagination);
  }

  searchValue() {
    this.emitSearch.emit(this.inputSearch);
  }

  selectKeySort(value: string) {
    this.emitKeySort.emit(value);
    this.keyDefaultSortKey = value;
  }

  selectSortDirection(value: string) {
    this.emitSortDirection.emit(value);
    this.keyDefaultSortDirection = value;
  }

  clickDetail(value: string, i?: number) {
    this.emitNewBlog.emit({
      action: value,
      ...(i != null && { id: i }),
    });
  }
}
