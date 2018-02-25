import { Action } from '@ngrx/store';
import { Room } from './hotel.model';

export enum HotelActionTypes {
  SELECT = '[Hotel Action] Select',
  UNSELECT = '[Hotel Action] Unselect',
  RESET = '[Hotel Action] Reset',
  SORT_ROOMS = '[Hotel Action] Sort rooms'
}

export interface SelectHotelActionPayload {
  roomId: string;
  room: Room;
}

export class SelectHotelAction implements Action {
  public readonly type: string = HotelActionTypes.SELECT;
  constructor(public payload: SelectHotelActionPayload) {}
}

export class UnSelectHotelAction implements Action {
  public readonly type: string = HotelActionTypes.UNSELECT;
  constructor(public payload: string) {}
}

export class ResetHotelAction implements Action {
  public readonly type: string = HotelActionTypes.RESET;
  constructor(public payload?: any) {}
}

export class SortHotelRoomsAction implements Action {
  public readonly type: string = HotelActionTypes.SORT_ROOMS;
  constructor(public payload: number) {}
}

export type HotelActions =
  | SelectHotelAction
  | UnSelectHotelAction
  | ResetHotelAction
  | SortHotelRoomsAction;
