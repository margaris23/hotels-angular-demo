export enum Currency {
  EUR = 'EUR'
}

export interface Room {
  id: string;
  name: string;
  pricePerAdult: number;
  pricePerChild: number;
  initialIndex?: number;
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
