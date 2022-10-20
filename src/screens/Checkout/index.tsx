import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Routes } from '../../@types/navigation';
import { Button } from '../../components/Button';
import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import {
  ButtonContent,
  Container,
  Content,
  QuantityButton,
  Text,
} from './styles';

export function Checkout() {
  const navigation = useNavigation();

  const {
    params: { event },
  } = useRoute<RouteProp<Routes, 'checkout'>>();

  function handlePayment(pressedEvent: Event) {
    navigation.navigate('payment', {
      event: pressedEvent,
    });
  }

  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <Highlight title="Checkout" isEventList={false} />
      <EventCard {...event} disabled />
      <Content>
        <QuantityButton>
          <Text>-</Text>
        </QuantityButton>
        <Text>0</Text>
        <QuantityButton>
          <Text>+</Text>
        </QuantityButton>
      </Content>
      <ButtonContent>
        <Button
          title="Ir para pagamento"
          onPress={() => handlePayment(event)}
        />
      </ButtonContent>
    </Container>
  );
}
