import { Event } from './event';

export type Routes = {
  home: undefined;
  eventList: undefined;
  eventDetails: {
    event: Event;
  };
  payment: {
    event: Event;
    ticketQuantity: number;
    userName: string;
    userEmail: string;
  };
};
export declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}
