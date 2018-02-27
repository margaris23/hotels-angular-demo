export enum Currency {
  EUR = 'EUR'
}

export const Defaults = {
  adults: 2,
  children: 0,
  childAge: 1
};

export interface Room {
  id: string;
  name: string;
  pricePerAdult: number;
  pricePerChild: number;
  initialIndex?: number;
}

export interface SelectedRoom extends Room {
  adults: number;
  children: number;
  childrenAges: number[];
}

export interface Hotel {
  id: string;
  stars: number;
  name: string;
  description: string;
  currency: Currency;
  rooms: Room[];
  totalPrice: number;
}

export interface ChildAge {
  index: number;
  value: number;
}
