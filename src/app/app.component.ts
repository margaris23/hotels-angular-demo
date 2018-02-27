import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, first } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';

import { Hotel, SelectedRoom } from './hotel/hotel.model';
import { HotelService } from './hotel/services/hotel.service';
import {
  State,
  hasRoomsSelected, 
  getSelectedRooms,
  SelectedRooms
} from './hotel/hotel.reducer';
import { invert, priceSum } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hotel$: Observable<Hotel>;
  public noRoomsSelected$: Observable<boolean>;
  public total$: Observable<number>;
  public showError = false;

  private toSelectedRoomsArray = (rooms: SelectedRooms): SelectedRoom[] =>
    Object.keys(rooms).map((roomId: string) => rooms[roomId])

  constructor(
    private store: Store<State>,
    private hotelService: HotelService,
    private router: Router
  ) {
    this.noRoomsSelected$ = this.store.pipe(
      select(hasRoomsSelected),
      map(invert)
    );
    this.total$ = this.store.pipe(
      select(getSelectedRooms),
      map(this.toSelectedRoomsArray),
      map(priceSum)
    );
  }

  public ngOnInit(): void {
    this.hotel$ = this.hotelService.hotel$();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    console.log(this.router.navigate(['/result']));
    // this.store.pipe(
    //   select(getSelectedRooms),
    //   first(),
    //   map((selectedRooms: SelectedRooms) => {
        
    //   })
    // ).subscribe();
  }
}
