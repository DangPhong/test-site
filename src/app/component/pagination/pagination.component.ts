import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationData } from 'src/app/stores/blogs';
import { IEmitPageChange } from './pagination.i';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  paginationSize = [10, 20, 30];
  public _items!: PaginationData;

  @Input() set items(data: PaginationData) {
    if (data.total > 0) {
      this._items = {...data};
    }
  }

  @Output() emitPagesize = new EventEmitter<IEmitPageChange>();

  constructor() {}

  pageChange(page: number) {
    const pagination: IEmitPageChange = {
      page,
      pageSize: this._items.offset,
    };
    this.emitPagesize.emit(pagination);
  }

  pageSizeChange(pageSize: number) {
    const pagination: IEmitPageChange = {
      page: this._items.page,
      pageSize,
    };
    this.emitPagesize.emit(pagination);
  }
}
