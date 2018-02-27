export interface ResultRoom {
  id: string;
  adults: number;
  children: number
  childrenAges: number[];
}

export interface Result {
  hotelId: string;
  rooms: ResultRoom[];
  totalPrice: number;
}
