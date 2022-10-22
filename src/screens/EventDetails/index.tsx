import { useEffect, useState } from 'react';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

import { Routes } from '../../@types/navigation';
import { EventCard } from '../../components/EventCard';
import { Button } from '../../components/FloatingButton';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { ScreenContainer } from '../../components/ScreenContainer';
import { useAppDispatch } from '../../hooks/redux';
import { addTicketToCart } from '../../redux/reducers/cart';
import { formatMoney } from '../../utils/currency';
import { userValidationSchema } from '../../validation/user.validation';
import {
  ButtonContent,
  Container,
  Content,
  Input,
  QuantityButton,
  QuantityButtonText,
  QuantityContent,
  Text,
  TotalPrice,
} from './styles';

export function EventDetails() {
  const navigation = useNavigation();
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [canContinue, setCanContinue] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const dispatch = useAppDispatch();

  const {
    params: { event },
  } = useRoute<RouteProp<Routes, 'eventDetails'>>();

  function validation(onSuccessCallback: () => void) {
    if (canContinue) {
      userValidationSchema
        .validate({
          userName: userName,
          userEmail: userEmail,
        })
        .then(onSuccessCallback)
        .catch(e => {
          Alert.alert(e.errors[0]);
        });
    }
  }

  function handleAddCart() {
    validation(() => {
      dispatch(
        addTicketToCart({
          event: event,
          ticketQuantity: ticketQuantity,
          userName: userName,
          userEmail: userEmail,
        }),
      );
      navigation.navigate('myCart');
    });
  }

  function handlePayment() {
    validation(() => {
      dispatch(
        addTicketToCart({
          event: event,
          ticketQuantity: ticketQuantity,
          userName: userName,
          userEmail: userEmail,
        }),
      );
      navigation.navigate('payment');
    });
  }

  function sumTicket() {
    setTicketQuantity(ticketQuantity + 1);
  }

  function decreaseTicket() {
    if (ticketQuantity > 1) {
      setTicketQuantity(ticketQuantity - 1);
    }
  }

  useEffect(() => {
    if (userEmail && userName) {
      setCanContinue(true);
    } else {
      setCanContinue(false);
    }
  }, [userEmail, userName]);

  return (
    <Container>
      <ScreenContainer>
        <Header icon="arrow-back-ios" />
        <Highlight title="Detalhes do Evento" isEventList={false} />
        <EventCard {...event} disabled />
        <Content>
          <Text>{event.details.clothing}</Text>
          <Text>{event.details.pets}</Text>
          <Text>{event.details.drink}</Text>
          <Text>{event.details.age}</Text>
        </Content>
        <Highlight title="Dados do comprador" isEventList={false} />
        <Input
          value={userName}
          onChangeText={setUserName}
          placeholder="nome do usuário"
        />
        <Input
          value={userEmail}
          onChangeText={setUserEmail}
          placeholder="email"
        />
        <Highlight title="Quantidade de ingressos" isEventList={false} />
        <QuantityContent>
          <QuantityButton onPress={decreaseTicket}>
            <QuantityButtonText>-</QuantityButtonText>
          </QuantityButton>
          <QuantityButtonText>{ticketQuantity}</QuantityButtonText>
          <QuantityButton onPress={sumTicket}>
            <QuantityButtonText>+</QuantityButtonText>
          </QuantityButton>
        </QuantityContent>
        <TotalPrice>
          Total {formatMoney(event.value * ticketQuantity)}
        </TotalPrice>
        <ButtonContent>
          <Button
            disabled={!canContinue}
            type={canContinue ? 'CAN_CONTINUE' : 'CANT_CONTINUE'}
            title="Adicionar ao carrinho"
            onPress={handleAddCart}
          />
          <Button
            disabled={!canContinue}
            type={canContinue ? 'CAN_CONTINUE' : 'CANT_CONTINUE'}
            title="Ir para pagamento"
            onPress={handlePayment}
          />
        </ButtonContent>
      </ScreenContainer>
    </Container>
  );
}
