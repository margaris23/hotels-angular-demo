import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';

import { SelectedRoomComponent } from './selected-room.component';
import { CommonSelectorComponent } from '../common-selector/common-selector.component';
import { RoomPriceComponent } from '../room-price/room-price.component';

describe('SelectedRoomComponent', () => {
  let component: SelectedRoomComponent;
  let fixture: ComponentFixture<SelectedRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [
        SelectedRoomComponent,
        CommonSelectorComponent,
        RoomPriceComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
