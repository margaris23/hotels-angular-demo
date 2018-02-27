import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { State } from '../hotel.reducer';
import { Hotel, Room, SelectedRoom, Defaults, ChildAge } from '../hotel.model';
import * as actions from '../hotel.actions';
import { transformRooms } from '../../utils';

@Injectable()
export class HotelService {
  constructor(
    private http: HttpClient,
    private store: Store<State>
  ) {}

  public hotel$(): Observable<Hotel> {
    return this.http
      .get<Hotel>('/assets/hotel-rooms.json')
      .pipe(map(transformRooms));
  }

  public dispatchSelectAction(room: Room): void {
    this.store.dispatch(new actions.SelectHotelAction({
      roomId: room.id,
      room: {
        ...room,
        adults: Defaults.adults,
        children: Defaults.children,
        childrenAges: []
      } as SelectedRoom
    } as actions.SelectHotelActionPayload));
  }

  public dispatchUnselectAction(roomId: string): void {
    this.store.dispatch(new actions.UnSelectHotelAction(roomId));
  }

  public dispatchSortAction(orderBy: number): void {
    this.store.dispatch(new actions.SortHotelRoomsAction(orderBy));
  }

  public dispatchSelectAdults(roomId: string, adults: number): void {
    this.store.dispatch(new actions.SelectAdultsRoomHotelAction({roomId, adults}));
  }

  public dispatchSelectChildren(roomId: string, children: number): void {
    this.store.dispatch(new actions.SelectChildrenRoomHotelAction({roomId, children}));
  }

  public dispatchSelectAgeForChild(roomId: string, childAge: ChildAge): void {
    this.store.dispatch(new actions.SelectAgeChildAction({ roomId, childAge }));
  }
}

