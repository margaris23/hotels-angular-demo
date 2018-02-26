import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {  map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import { Hotel } from './hotel.model';
import { HotelService } from './services/hotel.service';
import { State, hasRoomsSelected } from './hotel.reducer';
import { invert } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public hotel$: Observable<Hotel>;
  public noRoomsSelected$: Observable<boolean>;

  constructor(
    private store: Store<State>,
    private hotelService: HotelService
  ) {
    this.noRoomsSelected$ = this.store.pipe(
      select(hasRoomsSelected),
      map(invert)
    );
  }

  public ngOnInit(): void {
    this.hotel$ = this.hotelService.hotel$();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
  }
}
