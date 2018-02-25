import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Room } from '../hotel.model';
import { SelectEvent } from '../hotel-room/hotel-room.component';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelRoomsComponent {
  @Input() public rooms: Room[];

  // TODO: remove local state and use redux
  private tempMap: {[roomId: string]: boolean} = {};

  public onSelected(event: SelectEvent): void {
    this.tempMap[event.roomId] = event.value;
  }
}
