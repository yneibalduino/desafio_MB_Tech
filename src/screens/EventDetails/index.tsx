import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Routes } from '../../@types/navigation';
import { Button } from '../../components/Button';
import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { ButtonContent, Container, Content, Text } from './styles';

export function EventDetails() {
  const navigation = useNavigation();

  const {
    params: { event },
  } = useRoute<RouteProp<Routes, 'eventDetails'>>();

  function handleCheckout(pressedEvent: Event) {
    navigation.navigate('checkout', {
      event: pressedEvent,
    });
  }

  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <Highlight title="Detalhes do Evento" isEventList={false} />
      <EventCard {...event} disabled />
      <Content>
        <Text>Regras do evento:</Text>
        <Text>Traje livre (no dress code).</Text>
        <Text>Permitida a entrada de pets.</Text>
        <Text>Proibida a entrada de qualquer tipo de comida ou bebida.</Text>
        <Text>Evento livre para todas as idades.</Text>
      </Content>
      <ButtonContent>
        <Button
          title="Comprar ingressos"
          onPress={() => handleCheckout(event)}
        />
      </ButtonContent>
    </Container>
  );
}
