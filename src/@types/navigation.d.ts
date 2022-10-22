import { Event } from './event';

export type Routes = {
  home: undefined;
  eventList: undefined;
  eventDetails: {
    event: Event;
  };
  payment: undefined;
  myCart: undefined;
};
export declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}
