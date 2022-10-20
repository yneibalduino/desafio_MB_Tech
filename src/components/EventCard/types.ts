import { TouchableOpacityProps } from 'react-native';

export type Props = TouchableOpacityProps & Event;

export type Event = {
  eventName: string;
  dateAndHour?: string;
  participants?: number;
};
