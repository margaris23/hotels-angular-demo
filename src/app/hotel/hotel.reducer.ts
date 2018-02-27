import { Action, createFeatureSelector, createSelector } from '@ngrx/store';

import { HotelActionTypes, HotelActions } from './hotel.actions';
import { SelectedRoom, Defaults } from './hotel.model';
import { ROOM_ORDER } from './pipes/room-order.pipe';
import { range } from '../utils';

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
      const children: number = action.payload.children;
      const roomId: string = action.payload.roomId;

      selectedRooms[roomId].children = children;
      selectedRooms[roomId].childrenAges =
        getUpdatedChildrenAges(selectedRooms[roomId].childrenAges, children);

      return {
        ...state,
        selectedRooms
      };

    case HotelActionTypes.SELECT_CHILD_AGE:

      selectedRooms[action.payload.roomId]
        .childrenAges[action.payload.childAge.index] = action.payload.childAge.value;

      return {
        ...state,
        selectedRooms
      };

    default:
      return state;
  }
}

export const getHotelState = createFeatureSelector<State>('hotel');

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

// TODO refactor
function getUpdatedChildrenAges(childrenAges: number[], childrenNum: number): number[] {
  const _childrenAges = [ ...childrenAges ];
  const lengthDiff: number = _childrenAges.length - childrenNum;
  if (lengthDiff > 0) {
    _childrenAges.splice(0, lengthDiff);
  } else {
    let index = _childrenAges.length;
    const value = Defaults.childAge;
    for (let i = lengthDiff; i < 0; ++i, ++index) {
      _childrenAges.push(value);
    }
  }
  return _childrenAges;
}
