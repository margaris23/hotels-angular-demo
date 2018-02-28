import { TestBed, inject } from '@angular/core/testing';

import { HotelService } from './hotel.service';

let hotelService: HotelService;

describe('HotelService', () => {
  beforeEach(() => {
    hotelService = new HotelService({} as any, {} as any);
  });

  it('should be created', () => {
    expect(hotelService).toBeTruthy();
  });
});
