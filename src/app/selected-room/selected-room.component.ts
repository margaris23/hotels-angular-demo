import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { SelectedRoom, ChildAge, Defaults } from '../hotel.model';
import { range } from '../utils';

@Component({
  selector: 'app-selected-room',
  templateUrl: './selected-room.component.html',
  styleUrls: ['./selected-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedRoomComponent {
  @Input() public room: SelectedRoom;

  @Output() public adultsSelect = new EventEmitter<number>();
  @Output() public childrenSelect = new EventEmitter<number>();
  @Output() public ageSelect = new EventEmitter<ChildAge>();

  public readonly ageRange: number[] = range(1, 14);
  public childAges: ChildAge[] = [];

  public onAdultsSelected(adults: number): void {
    this.adultsSelect.emit(adults);
  }

  public onChildrenSelected(children: number): void {
    this.childrenSelect.emit(children);
    this.updateChildAges(children);
  }

  public onAgeSelected(index: number, value: number): void {
    this.ageSelect.emit({ index, value } as ChildAge);
  }

  // TODO: refactor a bit
  private updateChildAges(newLength: number): void {
    const lengthDiff: number = this.childAges.length - newLength;
    if (lengthDiff > 0) {
      this.childAges.splice(0, lengthDiff);
    } else {
      let index = this.childAges.length;
      const value = Defaults.childAge;
      for (let i = lengthDiff; i < 0; ++i, ++index) {
        this.childAges.push({ index, value } as ChildAge);
      }
    }
  }
}
