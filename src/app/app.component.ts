import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, first, tap, take } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';

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
  public hasErrors = false;
  public submitted = false;

  private toSelectedRoomsArray = (rooms: SelectedRooms): SelectedRoom[] =>
    Object.keys(rooms).map((roomId: string) => rooms[roomId]);
  
  private checkErrors = (arr: any[] = []) => this.hasErrors = arr.length > 3;

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
      tap(this.checkErrors),
      map(priceSum)
    );
  }

  public ngOnInit(): void {
    this.hotel$ = this.hotelService.hotel$();
    this.setupRouteReuseStrategy();
  }

  public onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted = true;
    this.hotel$.pipe(
      take(1)
    ).subscribe((hotel: Hotel) => {
      this.router.navigate(['/result', hotel.id]);
    });
  }

  private setupRouteReuseStrategy(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
  }
}
