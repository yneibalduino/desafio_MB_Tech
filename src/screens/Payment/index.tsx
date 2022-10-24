import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { Alert, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../components/FloatingButton';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { boughtTickets } from '../../redux/reducers/bought';
import { removeTicketFromCart } from '../../redux/reducers/cart';
import { formatMoney } from '../../utils/currency';
import {
  ButtonContent,
  Container,
  Content,
  Text,
  Text2,
  TextContent,
} from './styles';

export function Payment() {
  const navigation = useNavigation();
  const { tickets } = useAppSelector(state => state.cart);
  const [totalTickets, setTotalTickets] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  function finishPayment() {
    dispatch(
      boughtTickets(
        tickets.map(ticket => {
          return { ...ticket, transactionId: uuidv4() };
        }),
      ),
    );
    dispatch(removeTicketFromCart());
    Alert.alert('Parabéns! Você adquiriu seus ingressos!');
    navigation.navigate('eventList');
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
      <ScreenContainer>
        <View>
          <Header icon="arrow-back-ios" />
        </View>
        <Highlight
          title={t('PROFILES.TITLE.CARTDETAILS')}
          isEventList={false}
        />
        <Content>
          <TextContent>
            <Text>Forma de pagamento</Text>
            <Text2>PIX</Text2>
          </TextContent>
          <TextContent>
            <Text>Chave PIX</Text>
            <Text2>08932988919</Text2>
          </TextContent>
          <TextContent>
            <Text>Beneficiário</Text>
            <Text2>Ynei Francisco Balduino</Text2>
          </TextContent>
          <TextContent>
            <Text>Instituição</Text>
            <Text2>NU Pagamentos S.A.</Text2>
          </TextContent>
        </Content>
        <Content>
          <TextContent>
            <Text>Quantidade de ingressos</Text>
            <Text2>{totalTickets}</Text2>
          </TextContent>
          <TextContent>
            <Text>Valor total</Text>
            <Text2>{formatMoney(totalPrice)}</Text2>
          </TextContent>
        </Content>
        <ButtonContent>
          <Button
            type="CAN_CONTINUE"
            title={t('PROFILES.BUTTON.BUYFINISH')}
            onPress={finishPayment}
          />
        </ButtonContent>
      </ScreenContainer>
    </Container>
  );
}
