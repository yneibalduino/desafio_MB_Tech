import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Routes } from '../../@types/navigation';
import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container } from './styles';

export function EventDetails() {
  const {
    params: { event },
  } = useRoute<RouteProp<Routes, 'eventDetails'>>();
  console.log(event);

  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <Highlight title="Detalhes do Evento" isEventList={false} />
      <EventCard {...event} disabled />
      <View />
    </Container>
  );
}
