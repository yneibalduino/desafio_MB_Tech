import { EventCard } from '@components/EventCard';
import { Button } from '@components/FloatingButton';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { useNavigation } from '@react-navigation/native';
import { removeTicketFromCart } from '@redux/reducers/cart';
import { formatMoney } from '@utils/currency';
import { useTranslation } from 'react-i18next';
import { Alert, FlatList } from 'react-native';

import { Container, Content, Text, Text2, TextContent } from './styles';

export function MyCart() {
  const { tickets } = useAppSelector(state => state.cart);
  const navigation = useNavigation();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  function buyContinue() {
    navigation.navigate('eventList');
  }

  function buyFinish() {
    navigation.navigate('payment');
  }

  function handleRemoveTickets(index: number) {
    Alert.alert('Remover', 'Deseja remover este evento?', [
      {
        text: 'Sim',
        onPress: () => dispatch(removeTicketFromCart(index)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  }

  return (
    <Container>
      <Header icon="arrow-back-ios" />
      <Highlight title={t('PROFILES.TITLE.MYCART')} isEventList={false} />
      <FlatList
        data={tickets}
        keyExtractor={item => item.event.eventName}
        renderItem={({ item: cart, index }) => (
          <>
            <EventCard
              {...cart.event}
              onPress={() => handleRemoveTickets(index)}
            />
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
      <Button title={t('PROFILES.BUTTON.BUYCONTINUE')} onPress={buyContinue} />
      <Button title={t('PROFILES.BUTTON.BUYFINISH')} onPress={buyFinish} />
    </Container>
  );
}
