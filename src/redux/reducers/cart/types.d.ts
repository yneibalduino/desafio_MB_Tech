import { Event } from '../../../@types/event';

export type Cart = {
  event: Event;
  ticketQuantity: number;
  userName: string;
  userEmail: string;
};

export type ICartStore = {
  tickets: Cart[];
};
