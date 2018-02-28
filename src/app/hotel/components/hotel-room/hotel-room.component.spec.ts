import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as components from '../index';
import { RoomOrderPipe } from '../../pipes/room-order.pipe';
import { RoomSelectedPipe } from '../../pipes/room-selected.pipe';
import { HotelService } from '../../services/hotel.service';
import { HotelRoomComponent } from './hotel-room.component';

describe('HotelRoomComponent', () => {
  let component: HotelRoomComponent;
  let fixture: ComponentFixture<HotelRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ components.included, RoomOrderPipe, RoomSelectedPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
