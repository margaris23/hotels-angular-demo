import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SelectedRoomsComponent } from './selected-rooms.component';
import { SelectedRoomComponent } from '../selected-room/selected-room.component';
import { CommonSelectorComponent } from '../common-selector/common-selector.component';
import { RoomPriceComponent } from '../room-price/room-price.component';
import { HotelService } from '../../services/hotel.service';
import * as mocks from '../../../mocks.spec';

describe('SelectedRoomsComponent', () => {
  let component: SelectedRoomsComponent;
  let fixture: ComponentFixture<SelectedRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, CommonModule],
      declarations: [
        SelectedRoomsComponent,
        SelectedRoomComponent,
        CommonSelectorComponent,
        RoomPriceComponent
      ],
      providers: [
        { provide: HotelService, useValue: {} },
        { provide: Store, useClass: mocks.MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
