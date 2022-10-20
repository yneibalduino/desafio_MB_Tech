import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';

import { EventCard } from '../../components/EventCard';
import { Event } from '../../components/EventCard/types';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { Container } from './styles';

export function EventList() {
  const navigation = useNavigation();
  const [events, setEvents] = useState<Event[]>([]);

  function handleEventDetails(pressedEvent: Event) {
    navigation.navigate('eventDetails', {
      event: pressedEvent,
    });
  }

  useEffect(() => {
    setTimeout(() => {
      setEvents([
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
      ]);
    }, 1000);
  }, []);

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
        data={events}
        keyExtractor={event => event.eventName}
        renderItem={({ item: event }) => (
          <EventCard {...event} onPress={() => handleEventDetails(event)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
