import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take, combineLatest } from 'rxjs/operators';

import { getSelectedRooms, SelectedRooms } from '../hotel/hotel.reducer';
import { Result, ResultRoom } from './result.model';
import { priceSum, roomPrice } from '../utils';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {
  public result$: Observable<Result>;

  private toResult = ([hotelId, rooms]: [string, SelectedRooms]): Result => {
    let totalPrice = 0;

    const calculateTotal = (key: string) => {
      totalPrice += roomPrice(rooms[key]);
      return key;
    };

    return {
      hotelId,
      rooms: Object
              .keys(rooms)
              .map(calculateTotal)
              .map(this.toRoom(rooms)),
      totalPrice
    };
  }

  private getHotelId = (params: ParamMap) => params.get('hotelId');

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.result$ =
      this.route.paramMap.pipe(
        map(this.getHotelId),
        combineLatest(
          this.store.pipe(
            select(getSelectedRooms),
            take(1)
          ),
        ),
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
