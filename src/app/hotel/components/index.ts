import { HotelComponent } from './hotel/hotel.component';
import { HotelRoomsComponent } from './hotel-rooms/hotel-rooms.component';
import { HotelRoomComponent } from './hotel-room/hotel-room.component';
import { SelectedRoomsComponent } from './selected-rooms/selected-rooms.component';
import { SelectedRoomComponent } from './selected-room/selected-room.component';
import { HotelRatingComponent } from './hotel-rating/hotel-rating.component';
import { CommonSelectorComponent } from './common-selector/common-selector.component';
import { RoomPriceComponent } from './room-price/room-price.component';

export const included = [
  HotelComponent,
  HotelRoomsComponent,
  HotelRoomComponent,
  SelectedRoomsComponent,
  SelectedRoomComponent,
  HotelRatingComponent,
  CommonSelectorComponent,
  RoomPriceComponent
];

export const exported = [
  HotelComponent,
  SelectedRoomsComponent
];
