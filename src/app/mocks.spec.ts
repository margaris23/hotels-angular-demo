import { Hotel } from './hotel/hotel.model';

export const mockHotel: Hotel = require('../assets/hotel-rooms.json');

export class MockStore {
  public pipe() {}
}
