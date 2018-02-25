import { Room, Hotel } from './hotel.model';

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
