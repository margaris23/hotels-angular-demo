import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../hotel.reducer';
import { Hotel, Room } from '../hotel.model';
import * as actions from '../hotel.actions';
 import { transformRooms } from '../utils';

@Injectable()
export class HotelService {
  constructor(
    private http: HttpClient,
    private store: Store<State>
  ) {}

  public hotel$(): Observable<Hotel> {
    return this.http
               .get<Hotel>('/assets/hotel-rooms.json')
               .map(transformRooms);
  }

  public dispatchSelectAction(room: Room): void {
    this.store.dispatch(new actions.SelectHotelAction({
      roomId: room.id,
      room
    } as actions.SelectHotelActionPayload));
  }

  public dispatchUnselectAction(roomId: string): void {
    this.store.dispatch(new actions.UnSelectHotelAction(roomId));
  }

  public dispatchSortAction(orderBy: number): void {
    this.store.dispatch(new actions.SortHotelRoomsAction(orderBy));
  }
}

