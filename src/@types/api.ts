export type API = {
  eventName: string;
  dateAndHour: string;
  participants: number;
  event_rules: {
    rules: string;
    hour: string;
    drink: string;
  };
};
