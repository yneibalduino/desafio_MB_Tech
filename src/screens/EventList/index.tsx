import { View, FlatList } from 'react-native';

import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container } from './styles';

export function EventList() {
  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <Highlight
        title="Lista de Eventos"
        subtitle="Meus eventos"
        isEventList={true}
      />
      <FlatList
        data={[
          {
            eventName: 'Marejada',
            dateAndHour: '10/10/2022',
            participants: 670,
          },
          {
            eventName: 'Octoberfest',
            dateAndHour: '15/10/2022',
            participants: 893,
          },
          {
            eventName: 'Volvo Ocean Race',
            dateAndHour: '23/11/2022',
            participants: 752,
          },
        ]}
        keyExtractor={item => item.eventName}
        renderItem={({ item }) => <EventCard {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
