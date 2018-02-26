import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { HotelActionTypes, HotelActions } from './hotel.actions';
import { SelectedRoom } from './hotel.model';
import { ROOM_ORDER } from './pipes/room-order.pipe';

export interface SelectedRooms {
  [roomId: string]: SelectedRoom;
}

export interface State {
  selectedRooms: SelectedRooms;
  orderBy: number;
}

export const initialState: State = {
  selectedRooms: {},
  orderBy: ROOM_ORDER.INITIAL
};

export function hotelReducer(
  state: State = initialState,
  action: HotelActions
): State {
  const selectedRooms: SelectedRooms = { ...state.selectedRooms };

  switch (action.type) {
    case HotelActionTypes.SELECT:
      selectedRooms[action.payload.roomId] = action.payload.room;
      return {
        ...state,
        selectedRooms
      };

    case HotelActionTypes.UNSELECT:
      delete selectedRooms[action.payload];
      return {
        ...state,
        selectedRooms
      };

    case HotelActionTypes.RESET:
      return initialState;

    case HotelActionTypes.SORT_ROOMS:
      return {
        ...state,
        orderBy: action.payload
      };

    case HotelActionTypes.SELECT_ADULTS:
      selectedRooms[action.payload.roomId].adults = action.payload.adults;
      return {
        ...state,
        selectedRooms
      };

    case HotelActionTypes.SELECT_CHILDREN:
      selectedRooms[action.payload.roomId].children = action.payload.children;
      return {
        ...state,
        selectedRooms
      };

    default:
      return state;
  }
}

const getHotelState = createFeatureSelector<State>('hotel');

export const getSelectedRooms = createSelector(
  getHotelState,
  state => state.selectedRooms
);

export const getOrderBy = createSelector(
  getHotelState,
  state => state.orderBy
);

export const hasRoomsSelected = createSelector(
  getHotelState,
  state => !!Object.keys(state.selectedRooms).length
);
