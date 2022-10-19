import {
  Container,
  Content,
  DateAndHour,
  EventName,
  Participants,
} from './styles';
import { Props } from './types';

export function EventCard({
  eventName,
  dateAndHour,
  participants,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <EventName>{eventName}</EventName>

      <Content>
        <DateAndHour>Data e hora</DateAndHour>
        <DateAndHour>{dateAndHour}</DateAndHour>
      </Content>

      <Content>
        <Participants>Numero de participantes</Participants>
        <Participants>{participants}</Participants>
      </Content>
    </Container>
  );
}
