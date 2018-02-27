import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  HostBinding
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Room } from '../../hotel.model';
import { SelectEvent } from '../hotel-room/hotel-room.component';
import { SelectedRooms, getSelectedRooms, getOrderBy } from '../../hotel.reducer';
import { HotelService } from '../../services/hotel.service';
import { ROOM_ORDER } from '../../pipes/room-order.pipe';
import { initialState } from '../../hotel.reducer';

export interface OrderBy {
  value: number;
  text: string;
}

@Component({
  selector: 'app-hotel-rooms',
  templateUrl: './hotel-rooms.component.html',
  styleUrls: ['./hotel-rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelRoomsComponent implements OnInit {
  @HostBinding('attr.class') public hostClass = 'hotel-rooms';
  @Input() public rooms: Room[];

  public selectedRooms$: Observable<SelectedRooms>;
  public orderValue: number = initialState.orderBy;
  public selectedOrder$: Observable<number>;
  public orderBy: OrderBy[] = [];

  constructor(
    private store: Store<any>,
    private hotelService: HotelService
  ) {}

  public ngOnInit(): void {
    this.selectedRooms$ = this.store.pipe(select(getSelectedRooms));
    this.selectedOrder$ = this.store.pipe(select(getOrderBy));
    this.initSortOptions();
  }

  public onSelected(event: SelectEvent): void {
    event.selected
      ? this.hotelService.dispatchSelectAction(event.room)
      : this.hotelService.dispatchUnselectAction(event.room.id);
  }

  public onSelectOrder(orderBy: number): void {
    this.hotelService.dispatchSortAction(orderBy);
  }

  private initSortOptions(): void {
    this.orderBy.push({
      value: ROOM_ORDER.INITIAL,
      text: 'Initial order'
    });
    this.orderBy.push({
      value: ROOM_ORDER.NAME,
      text: 'Name'
    });
    this.orderBy.push({
      value: ROOM_ORDER.PRICE,
      text: 'Price per adult'
    });
  }
}
