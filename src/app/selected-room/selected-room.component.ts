import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Room } from '../hotel.model';

@Component({
  selector: 'app-selected-room',
  templateUrl: './selected-room.component.html',
  styleUrls: ['./selected-room.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedRoomComponent {
  @Input() public room: Room;
}
