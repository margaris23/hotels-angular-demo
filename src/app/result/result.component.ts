import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';

import { getSelectedRooms, SelectedRooms } from '../hotel/hotel.reducer';
import { Result, ResultRoom } from './result.model';
import { priceSum } from '../utils';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {
  public result$: Observable<Result>;

  private toResult = (rooms: SelectedRooms): Result => {
    return {
      hotelId: '',
      rooms: Object
              .keys(rooms)
              .map(this.toRoom(rooms)),
      totalPrice: 0
    };
  }

  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    this.result$ = this.store.pipe(
      select(getSelectedRooms),
      take(1),
      map(this.toResult)
    );
  }

  private toRoom(rooms: SelectedRooms): (string) => ResultRoom {
    return (key: string) => ({
      id: rooms[key].id,
      adults: rooms[key].adults,
      children: rooms[key].children,
      childrenAges: rooms[key].childrenAges
    });
  }
}
