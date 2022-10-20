import { Event } from '../components/EventCard/types';

export type Routes = {
  home: undefined;
  eventList: undefined;
  eventDetails: {
    event: Event;
  };
  checkout: {
    event: Event;
  };
  payment: {
    event: Event;
  };
};
export declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}
