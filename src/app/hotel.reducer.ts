import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { HotelActionTypes, HotelActions } from './hotel.actions';
import { Room } from './hotel.model';

export interface State {
  [roomId: string]: Room;
}

export function hotelReducer(
  state: State = {},
  action: HotelActions
): State {
  const newState: State = { ...state };

  switch (action.type) {
    case HotelActionTypes.SELECT:
      newState[action.payload.roomId] = action.payload.room;
      return newState;

    case HotelActionTypes.UNSELECT:
      delete newState[action.payload];
      return newState;

    case HotelActionTypes.RESET:
      return {};

    default:
      return state;
  }
}

const getHotelState = createFeatureSelector<State>('hotel');

export const getSelectedRooms = createSelector(
  getHotelState,
  state => state
);
