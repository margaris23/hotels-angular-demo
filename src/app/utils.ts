import { Room, Hotel, SelectedRoom } from './hotel.model';

export const getRoomWithIndex = (room: Room, initialIndex: number) => ({
  ...room,
  initialIndex
});

export const getRoomsIndexed = (rooms: Room[] = []): Room[] =>
  rooms.map(this.getRoomWithIndex);

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

export const add = (a: number, b: number): number => a + b;

export const priceSum = (rooms: SelectedRoom[] = []): number =>
  rooms
    .map(roomPrice)
    .reduce(add, 0);
