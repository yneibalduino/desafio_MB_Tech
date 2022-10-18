import { Container, SubTitle, Title } from "./styles";

export function EventCard(){
  return(
    <Container>
      <Title>
        Evento A
      </Title>
      <SubTitle>
        Data e hora
      </SubTitle>
      <SubTitle>
        Número de Participantes
      </SubTitle>
    </Container>
  )
}