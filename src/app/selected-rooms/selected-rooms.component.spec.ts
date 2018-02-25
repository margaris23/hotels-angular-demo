import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedRoomsComponent } from './selected-rooms.component';

describe('SelectedRoomsComponent', () => {
  let component: SelectedRoomsComponent;
  let fixture: ComponentFixture<SelectedRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedRoomsComponent ]
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
