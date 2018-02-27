import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../hotel.model';

export enum ROOM_ORDER {
  INITIAL = 0,
  NAME,
  PRICE
}

export type OrderByFunction = (r1: Room, r2: Room) => number;

@Pipe({ name: 'roomOrder' })
export class RoomOrderPipe implements PipeTransform {
  transform(value: Room[], orderBy: number = ROOM_ORDER.INITIAL): any {
    return value && value.sort(this.by(orderBy));
  }

  private by(orderBy: number): OrderByFunction {
    return (r1: Room, r2: Room) => {
      if (!r1 || !r2) {
        return 0;
      }
      switch (orderBy) {
        case ROOM_ORDER.PRICE:
          return r1.pricePerAdult - r2.pricePerAdult;
        case ROOM_ORDER.NAME:
          return r1.name.localeCompare(r2.name);
        default:
          return r1.initialIndex - r2.initialIndex;
      }
    };
  }
}
