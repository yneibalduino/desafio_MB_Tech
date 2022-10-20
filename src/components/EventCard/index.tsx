import { formatMoney } from '../../utils/currency';
import { Container, Content, EventName, InfoWrapper } from './styles';
import { Props } from './types';

export function EventCard({
  eventName,
  dateAndHour,
  participants,
  value,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <EventName>{eventName}</EventName>
      <Content>
        <InfoWrapper>Data e hora</InfoWrapper>
        <InfoWrapper>{dateAndHour}</InfoWrapper>
      </Content>
      <Content>
        <InfoWrapper>Numero de participantes</InfoWrapper>
        <InfoWrapper>{participants}</InfoWrapper>
      </Content>
      <Content>
        <InfoWrapper>Valor</InfoWrapper>
        <InfoWrapper>{formatMoney(value)}</InfoWrapper>
      </Content>
    </Container>
  );
}
