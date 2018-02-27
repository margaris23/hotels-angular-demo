import { Action } from '@ngrx/store';
import { SelectedRoom, ChildAge } from './hotel.model';

export enum HotelActionTypes {
  SELECT = '[Hotel Action] Select',
  UNSELECT = '[Hotel Action] Unselect',
  RESET = '[Hotel Action] Reset',
  SORT_ROOMS = '[Hotel Action] Sort rooms',
  SELECT_ADULTS = '[Hotel Action] Select adults for room',
  SELECT_CHILDREN = '[Hotel Action] Select children for room',
  SELECT_CHILD_AGE = '[Hotel Action] Select age for child'
}

export interface SelectHotelActionPayload {
  roomId: string;
  room: SelectedRoom;
}

export interface SelectCommonPayload {
  roomId: string;
  adults?: number;
  children?: number;
  childAge?: ChildAge;
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

export class SelectAdultsRoomHotelAction implements Action {
  public readonly type: string = HotelActionTypes.SELECT_ADULTS;
  constructor(public payload: SelectCommonPayload) {}
}

export class SelectChildrenRoomHotelAction implements Action {
  public readonly type: string = HotelActionTypes.SELECT_CHILDREN;
  constructor(public payload: SelectCommonPayload) {}
}

export class SelectAgeChildAction implements Action {
  public readonly type: string = HotelActionTypes.SELECT_CHILD_AGE;
  constructor(public payload: SelectCommonPayload) {}
}

export type HotelActions =
  | SelectHotelAction
  | UnSelectHotelAction
  | ResetHotelAction
  | SortHotelRoomsAction
  | SelectAdultsRoomHotelAction
  | SelectChildrenRoomHotelAction
  | SelectAgeChildAction;
