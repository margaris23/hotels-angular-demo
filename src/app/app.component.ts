import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hotel } from './hotel.model';
import { HotelService } from './services/hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public hotel$: Observable<Hotel>;

  constructor(private hotelService: HotelService) {
    this.hotel$ = this.hotelService.hotel$();
  }
}
