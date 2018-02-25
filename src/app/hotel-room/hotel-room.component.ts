import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Room } from '../hotel.model';

export interface SelectEvent {
  roomId: string;
  value: boolean;
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
  @Output() public select: EventEmitter<SelectEvent> = new EventEmitter<SelectEvent>();

  public onChanged(event: Event): void {
    this.select.emit({
      roomId: this.room.id,
      value: !!event.target['checked']
    } as SelectEvent);
  }
}
