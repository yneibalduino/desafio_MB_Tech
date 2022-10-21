import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, FlatList } from 'react-native';

import { Event } from '../../@types/event';
import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { useAppSelector } from '../../hooks/redux';
import { api } from '../../services/api';
import { Container } from './styles';

export function EventList() {
  const navigation = useNavigation();
  const [events, setEvents] = useState<Event[]>([]);
  const { tickets } = useAppSelector(state => state.cart);

  function handleEventDetails(pressedEvent: Event) {
    navigation.navigate('eventDetails', {
      event: pressedEvent,
    });
  }

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await api.get('/events');
        setEvents(response.data as Event[]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <Highlight
        title="Lista de Eventos"
        subtitle={`Meus eventos ${tickets.length}`}
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
