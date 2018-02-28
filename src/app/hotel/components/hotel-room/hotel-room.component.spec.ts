import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as components from '../index';
import { RoomOrderPipe } from '../../pipes/room-order.pipe';
import { RoomSelectedPipe } from '../../pipes/room-selected.pipe';
import { HotelService } from '../../services/hotel.service';
import { HotelRoomComponent } from './hotel-room.component';
import * as mocks from '../../../mocks.spec';

describe('HotelRoomComponent', () => {
  let component: HotelRoomComponent;
  let fixture: ComponentFixture<HotelRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ components.included, RoomOrderPipe, RoomSelectedPipe ],
      providers: [
        { provide: Store , useClass: mocks.MockStore }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit event on changes', () => {
    const spy = spyOn(component.select, 'emit');
    component.room = mocks.mockHotel.rooms[0];
    component.onChanged({
      target: {
        checked: true
      }
    } as any);
    expect(spy).toHaveBeenCalledWith({
      room: component.room,
      selected: true
    });
  });
});
