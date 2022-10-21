import { Event } from '../../../@types/event';

export type Bought = {
  event: Event;
  ticketQuantity: number;
  userName: string;
  userEmail: string;
};

export type IBoughtStore = {
  tickets: Bought[];
};
