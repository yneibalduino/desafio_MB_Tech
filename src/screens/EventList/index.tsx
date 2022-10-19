import { Container } from "./styles";

import { Header } from "../../components/Header"

import { View } from "react-native";
import { EventCard } from "../../components/EventCard";
import { Hightlight } from "../../components/Highlight";

export function EventList(){
  return(
    <Container>
      <View>
        <Header
        icon='arrow-back-ios'
        />
      </View>

      <Hightlight
      title="Lista de Eventos"
      subtitle="Meus eventos"
      isEventList={true}
      />

      <EventCard
      eventname="Marejada"
      dateandhour="10/10/2022 às 20h00"
      participants={521}
      />

      <EventCard
      eventname="Octoberfest"
      dateandhour="15/10/2022 às 20h00"
      participants={837}
      />

      <EventCard
      eventname="Volvo Ocean Race"
      dateandhour="22/11/2022 às 14h00"
      participants={784}
      />

      <EventCard
      eventname="São João"
      dateandhour="06/07/2022 a partir das 13h00"
      participants={670}
      />

    </Container>
  )
}