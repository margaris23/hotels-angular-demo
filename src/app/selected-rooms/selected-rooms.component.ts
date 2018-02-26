import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { SelectedRooms, getSelectedRooms } from '../hotel.reducer';
import { HotelService } from '../services/hotel.service';
import { Room } from '../hotel.model';

@Component({
  selector: 'app-selected-rooms',
  templateUrl: './selected-rooms.component.html',
  styleUrls: ['./selected-rooms.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedRoomsComponent implements OnInit {
  public selectedRooms$: Observable<Room[]>;

  private toRoomsArray = (rooms: SelectedRooms): Room[] =>
    Object.keys(rooms).map((roomId: string) => rooms[roomId])

  constructor(
    private store: Store<any>,
    private hotelService: HotelService
  ) {}

  public ngOnInit(): void {
    this.selectedRooms$ = this.store.pipe(
      select(getSelectedRooms),
      map(this.toRoomsArray)
    );
  }

  public onAdultsSelected(roomId: string, adults: number): void {
    this.hotelService.dispatchSelectAdults(roomId, adults);
  }

  public onChildrenSelected(roomId: string, children: number): void {
    this.hotelService.dispatchSelectChildren(roomId, children);
  }
}
