import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { HotelComponent } from './hotel.component';
import * as components from '../index';
import { RoomOrderPipe } from '../../pipes/room-order.pipe';
import { RoomSelectedPipe } from '../../pipes/room-selected.pipe';
import { HotelService } from '../../services/hotel.service';
import * as mocks from '../../mocks';

describe('HotelComponent', () => {
  let component: HotelComponent;
  let fixture: ComponentFixture<HotelComponent>;

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
    fixture = TestBed.createComponent(HotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
