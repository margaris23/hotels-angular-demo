import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as components from '../index';
import { RoomOrderPipe } from '../../pipes/room-order.pipe';
import { RoomSelectedPipe } from '../../pipes/room-selected.pipe';
import { HotelService } from '../../services/hotel.service';
import { HotelRoomsComponent } from './hotel-rooms.component';
import * as mocks from '../../mocks';

describe('HotelRoomsComponent', () => {
  let component: HotelRoomsComponent;
  let fixture: ComponentFixture<HotelRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ components.included, RoomOrderPipe, RoomSelectedPipe ],
      providers: [
        { provide: Store, useClass: mocks.MockStore },
        { provide: HotelService, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
