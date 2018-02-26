import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Room } from '../hotel.model';

export interface SelectEvent {
  room: Room;
  selected: boolean;
}

@Component({
  selector: 'app-hotel-room',
  templateUrl: './hotel-room.component.html',
  styleUrls: ['./hotel-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelRoomComponent {
  @Input() public room: Room;
  @Input() public isFirst: boolean;
  @Input() public isSelected: boolean;
  @Output() public select = new EventEmitter<SelectEvent>();

  public onChanged(event: Event): void {
    const selected = !!event.target['checked'];
    this.select.emit({
      room: this.room,
      selected
    } as SelectEvent);
  }
}
