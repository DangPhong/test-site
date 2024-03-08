import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  GetBlogEditData,
  RequestBodyUpsertData,
} from 'src/app/stores/blog-detail';

@Component({
  selector: 'app-upsert-blog-tpml',
  templateUrl: './upsert-blog-tpml.component.html',
  styleUrls: ['./upsert-blog-tpml.component.scss'],
})
export class UpsertBlogTpmlComponent implements OnChanges {
  formGroup!: FormGroup;
  _item!: GetBlogEditData;

  @Input() titlePage: string = 'Blog Detail';

  @Input() set item(data: GetBlogEditData | any) {
    if (!!data.data?.id) {
      this.formGroup.setValue({
        id: data.data?.id,
        title: data.data.title,
        content: data.data.content,
        comments_count: data.data.comments_count,
        image: data.data?.image?.url,
      });
    } else {
      this.formGroup = this.fb.group({
        id: ['', []],
        title: ['', Validators.required],
        content: ['', [Validators.required]],
        comments_count: [''],
        image: ['', Validators.required],
      });
    }
  }

  @Output() emitActionSubmit = new EventEmitter<{
    action: string;
    value: RequestBodyUpsertData;
  }>();

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      id: ['', []],
      title: ['', Validators.required],
      content: ['', [Validators.required]],
      comments_count: [''],
      image: ['', Validators.required],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  askSave() {
    const payload: {
      action: string;
      value: RequestBodyUpsertData | any;
    } = {
      action: !!this.formGroup.value.id ? 'edit' : 'create',
      value: {
        id: this.formGroup.value.id || null,
        blog: {
          title: this.formGroup.value.title,
          content: this.formGroup.value.title,
          image: this.formGroup.value.image,
        },
      },
    };
    this.emitActionSubmit.emit(payload);
  }
}
