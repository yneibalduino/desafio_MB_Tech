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
        <InfoWrapper>
          {new Date(dateAndHour).toLocaleString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </InfoWrapper>
      </Content>
      <Content>
        <InfoWrapper>Numero de participantes</InfoWrapper>
        <InfoWrapper>{participants}</InfoWrapper>
      </Content>
      <Content>
        <InfoWrapper>Valor unitário</InfoWrapper>
        <InfoWrapper>{formatMoney(value)}</InfoWrapper>
      </Content>
    </Container>
  );
}
