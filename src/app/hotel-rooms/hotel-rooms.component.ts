import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  HostBinding
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Room } from '../hotel.model';
import { SelectEvent } from '../hotel-room/hotel-room.component';
import { State, getSelectedRooms } from '../hotel.reducer';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelRoomsComponent implements OnInit {
  @HostBinding('attr.class') public hostClass = 'hotel-rooms';
  @Input() public rooms: Room[];

  public selectedRooms$: Observable<State>;

  constructor(
    private store: Store<any>,
    private hotelService: HotelService
  ) {}

  public ngOnInit(): void {
    this.selectedRooms$ = this.store.pipe(select(getSelectedRooms));
  }

  public onSelected(event: SelectEvent): void {
    event.selected
      ? this.hotelService.dispatchSelectAction(event.room)
      : this.hotelService.dispatchUnselectAction(event.room.id);
  }
}
