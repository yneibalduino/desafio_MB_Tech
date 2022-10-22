import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Text } from 'react-native';

import { Event } from '../../@types/event';
import { EventCard } from '../../components/EventCard';
import { Button } from '../../components/FloatingButton';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { useAppSelector } from '../../hooks/redux';
import { api } from '../../services/api';
import { Container } from './styles';

export function EventList() {
  const navigation = useNavigation();
  const [events, setEvents] = useState<Event[]>([]);
  const { tickets } = useAppSelector(state => state.bought);
  const [checked, setChecked] = useState(false);
  const [eventsFromApi, setEventsFromApi] = useState<Event[]>([]);

  function handleEventDetails(pressedEvent: Event) {
    navigation.navigate('eventDetails', {
      event: pressedEvent,
    });
  }

  function handleMyCart() {
    navigation.navigate('myCart');
  }

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await api.get('/events');
        setEvents(response.data as Event[]);
        setEventsFromApi(response.data as Event[]);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchEvents();
  }, []);

  useEffect(() => {
    if (checked) {
      setEvents(
        tickets.map(ticket => {
          return { ...ticket.event, id: ticket.transactionId };
        }),
      );
    } else {
      setEvents(eventsFromApi);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked]);

  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <Highlight
        title="Lista de Eventos"
        subtitle={`Meu eventos ${tickets.length}`}
        isEventList={true}
        setChecked={setChecked}
        checked={checked}
      />
      <FlatList
        data={events}
        keyExtractor={event => event.id}
        renderItem={({ item: event }) => (
          <EventCard
            {...event}
            onPress={() => handleEventDetails(event)}
            disabled={checked}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Você ainda nao comprou ingressos para nenhum evento.</Text>
        )}
      />
      <Button title="Meu Carrinho" onPress={handleMyCart} />
    </Container>
  );
}
