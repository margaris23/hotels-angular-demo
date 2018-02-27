import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-common-selector',
  templateUrl: './common-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CommonSelectorComponent{
  @Input() public value: number;
  @Input() public range: number[];

  @Output() public select = new EventEmitter<number>();

  public onSelected(value: number): void {
    this.select.emit(value);
  }
}
