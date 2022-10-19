import { Text } from "react-native";
import { Container, Content, DateAndHour, EventName, Participants } from "./styles";

type Props = {
  eventname?: string;
  dateandhour?: string;
  participants?: number;
}

export function EventCard({eventname, dateandhour, participants}: Props){
  return(
    <Container>
      <EventName>
        {eventname}
      </EventName>

      <Content>
        <DateAndHour>
          Data e hora
        </DateAndHour>
        <DateAndHour>
          {dateandhour}
        </DateAndHour>
      </Content>

      <Content>
        <Participants>
          Número de participantes
        </Participants>
        <Participants>
          {participants}
        </Participants>
      </Content>

    </Container>
  )
}