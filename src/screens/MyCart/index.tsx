import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { EventCard } from '../../components/EventCard';
import { Button } from '../../components/FloatingButton';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { useAppSelector } from '../../hooks/redux';
import { formatMoney } from '../../utils/currency';
import { Container, Content, Text, Text2, TextContent } from './styles';

export function MyCart() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalTickets, setTotalTickets] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [totalPrice, setTotalPrice] = useState(0);
  const { tickets } = useAppSelector(state => state.cart);
  const navigation = useNavigation();

  function buyContinue() {
    navigation.navigate('eventList');
  }

  function buyFinish() {
    navigation.navigate('payment');
  }

  function sumTicketsPrice() {
    const sum = tickets.reduce((accumulator, cart) => {
      return accumulator + cart.event.value * cart.ticketQuantity;
    }, 0);
    setTotalPrice(sum);
  }

  function sumTicketsQuantity() {
    const sum = tickets.reduce((accumulator, cart) => {
      return accumulator + cart.ticketQuantity;
    }, 0);
    setTotalTickets(sum);
  }

  useEffect(() => {
    sumTicketsPrice();
    sumTicketsQuantity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header icon="arrow-back-ios" />
      <Highlight title="Meu Carrinho" isEventList={false} />
      <FlatList
        data={tickets}
        keyExtractor={item => item.event.eventName}
        renderItem={({ item: cart }) => (
          <>
            <EventCard {...cart.event} disabled />
            <Content>
              <TextContent>
                <Text>Comprador</Text>
                <Text2>{cart.userName}</Text2>
              </TextContent>
              <TextContent>
                <Text>email</Text>
                <Text2>{cart.userEmail}</Text2>
              </TextContent>
              <TextContent>
                <Text>Quantidade de ingressos</Text>
                <Text2>{cart.ticketQuantity}</Text2>
              </TextContent>
              <TextContent>
                <Text>Valor total</Text>
                <Text2>
                  {formatMoney(cart.event.value * cart.ticketQuantity)}
                </Text2>
              </TextContent>
            </Content>
          </>
        )}
        showsVerticalScrollIndicator={false}
      />
      <Button title="Continuar comprando" onPress={buyContinue} />
      <Button title="Finalizar compra" onPress={buyFinish} />
    </Container>
  );
}
