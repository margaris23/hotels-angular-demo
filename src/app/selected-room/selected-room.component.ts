import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Room } from '../hotel.model';

@Component({
  selector: 'app-selected-room',
  templateUrl: './selected-room.component.html',
  styleUrls: ['./selected-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedRoomComponent {
  @Input() public room: Room;

  @Output() public adultsSelect = new EventEmitter<number>();
  @Output() public childrenSelect = new EventEmitter<number>();

  public onAdultsSelected(adults: string): void {
    this.adultsSelect.emit(+adults);
  }

  public onChildrenSelected(children: string): void {
    this.childrenSelect.emit(+children);
  }
}
