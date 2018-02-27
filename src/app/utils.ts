import { Room, Hotel, SelectedRoom } from './hotel/hotel.model';

export function getRoomWithIndex(room: Room, initialIndex: number) {
  return {
    ...room,
    initialIndex
  };
}

export function getRoomsIndexed(rooms: Room[] = []): Room[] {
  return rooms.map(getRoomWithIndex);
}

export function transformRooms(hotel: Hotel): Hotel {
  return {
    ...hotel,
    rooms: getRoomsIndexed(hotel.rooms)
  };
}

export function invert(value: boolean): boolean {
  return !value;
}

export function roomPrice(room: SelectedRoom): number {
  return room.adults * room.pricePerAdult + room.children * room.pricePerChild;
}

export function add(a: number, b: number): number {
  return a + b;
}

export function priceSum(rooms: SelectedRoom[] = []): number {
  return rooms
    .map(roomPrice)
    .reduce(add, 0);
}

// Creates an array of max-min elements with default value if applicable
export function range(min: number, max: number, value?: number): number[] {
  if (!max || min > max) {
    return [];
  }
  const reply = new Array(max);
  for (let val = min, index = 0; val <= max; ++val, ++index) {
    reply[index] = value || val;
  }
  return reply;
}
