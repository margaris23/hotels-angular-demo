import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { State, getSelectedRooms } from '../hotel.reducer';
import { Room } from '../hotel.model';

@Component({
  selector: 'app-selected-rooms',
  templateUrl: './selected-rooms.component.html',
  styleUrls: ['./selected-rooms.component.css']
})
export class SelectedRoomsComponent implements OnInit {
  public selectedRooms$: Observable<Room[]>;

  private toRooms = (state: State): Room[] =>
    Object.keys(state).map((roomId: string) => state[roomId])

  constructor(private store: Store<any>) { }

  public ngOnInit(): void {
    this.selectedRooms$ = this.store
                              .pipe(select(getSelectedRooms))
                              .map(this.toRooms);
  }
}
