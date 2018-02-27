import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { getSelectedRooms, SelectedRooms } from '../hotel/hotel.reducer';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public result$: Observable<any>;

  constructor(private store: Store<any>) {}

  public ngOnInit(): void {
    this.result$ = this.store.pipe(
      select(getSelectedRooms)
    );
  }
}
