import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  HostBinding,
  ChangeDetectorRef
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Room } from '../hotel.model';
import { SelectEvent } from '../hotel-room/hotel-room.component';
import { State, getSelectedRooms } from '../hotel.reducer';
import { HotelService } from '../services/hotel.service';
import { ROOM_ORDER } from '../pipes/room-order.pipe';

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

  public selectedRooms$: Observable<State>;

  // TODO: transfer to store
  public orderValue = ROOM_ORDER.INITIAL;
  public readonly orderBy: OrderBy[] = [];

  constructor(
    private store: Store<any>,
    private hotelService: HotelService,
    private cdRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.selectedRooms$ = this.store.pipe(select(getSelectedRooms));
    this.initOrderBy();
  }

  public onSelected(event: SelectEvent): void {
    event.selected
      ? this.hotelService.dispatchSelectAction(event.room)
      : this.hotelService.dispatchUnselectAction(event.room.id);
  }

  public onOrderChanged(order: number): void {
    this.orderValue = order;
    this.cdRef.markForCheck();
  }

  private initOrderBy(): void {
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
