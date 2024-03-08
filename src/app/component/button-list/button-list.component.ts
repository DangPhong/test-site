import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-list',
  templateUrl: './button-list.component.html',
  styleUrls: ['./button-list.component.scss'],
})
export class ButtonListComponent {
  @Input() buttons: string[] = [];

  @Input() keyDefault: string = '';

  @Output() emitSelected = new EventEmitter<string>();

  selectButton(value: string) {
    this.emitSelected.emit(value);
  }
}
