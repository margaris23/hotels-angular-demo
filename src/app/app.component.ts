import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
export class AppComponent {
  public hotel$: Observable<Hotel>;
  public noRoomsSelected$: Observable<boolean>;

  constructor(
    private store: Store<State>,
    private hotelService: HotelService
  ) {
    this.hotel$ = this.hotelService.hotel$();
    this.noRoomsSelected$ = this.store
                                .pipe(select(hasRoomsSelected))
                                .map(invert);
  }
}
