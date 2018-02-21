import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Hotel } from '../hotel.model';

@Injectable()
export class HotelService {
  constructor(private http: HttpClient) {}

  public hotel$(): Observable<Hotel> {
    return this.http.get<Hotel>('/assets/hotel-rooms.json');
  }
}

