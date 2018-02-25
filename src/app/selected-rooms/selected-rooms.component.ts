import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { SelectedRooms, getSelectedRooms } from '../hotel.reducer';
import { Room } from '../hotel.model';

@Component({
  selector: 'app-selected-rooms',
  templateUrl: './selected-rooms.component.html',
  styleUrls: ['./selected-rooms.component.css']
})
export class SelectedRoomsComponent implements OnInit {
  public selectedRooms$: Observable<Room[]>;

  private toRoomsArray = (rooms: SelectedRooms): Room[] =>
    Object.keys(rooms).map((roomId: string) => rooms[roomId])

  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
    this.selectedRooms$ = this.store
                              .pipe(select(getSelectedRooms))
                              .map(this.toRoomsArray);
  }
}
