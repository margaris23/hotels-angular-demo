import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { SelectedRoom, ChildAge, Defaults } from '../../hotel.model';
import { range, reduceSize } from '../../../utils';

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

  private updateChildAges(newLength: number): void {
    const lengthDiff: number = this.childAges.length - newLength;
    if (lengthDiff > 0) {
      reduceSize(this.childAges, lengthDiff);
    } else {
      this.increaseChildAgesSize(lengthDiff);
    }
  }

  private increaseChildAgesSize(size: number): void {
    let index = this.childAges.length;
    for (let i = size; i < 0; ++i, ++index) {
      this.childAges.push(this.makeDefaultChildAge(index));
    }
  }

  private makeDefaultChildAge(index: number): ChildAge {
    return {
      index,
      value: Defaults.childAge
    } as ChildAge;
  }
}
