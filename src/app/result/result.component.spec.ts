import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { ResultComponent } from './result.component';
import { HotelService } from '../hotel/services/hotel.service';

class MockStore {
  public pipe() {}
}

class MockRoute {
  public paramMap = {
    pipe: () => {}
  };
}

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComponent ],
      providers: [
        { provide: HotelService, useValue: {} },
        { provide: Store, useClass: MockStore },
        { provide: ActivatedRoute, useClass: MockRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
