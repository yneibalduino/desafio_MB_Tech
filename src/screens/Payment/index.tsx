import { RouteProp, useRoute } from '@react-navigation/native';
import { Alert, View } from 'react-native';

import { Routes } from '../../@types/navigation';
import { EventCard } from '../../components/EventCard';
import { Button } from '../../components/FloatingButton';
import { Header } from '../../components/Header';
import { Highlight } from '../../components/Highlight';
import { ScreenContainer } from '../../components/ScreenContainer';
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
  const {
    params: { event, ticketQuantity, userName, userEmail },
  } = useRoute<RouteProp<Routes, 'payment'>>();

  function finishPayment() {
    if (event.eventName === 'Contratar Ynei') {
      Alert.alert(
        'Contratação concluída.',
        'Você acabou de me contratar! Muito obrigado! Será um prazer fazer parte da equipe.',
      );
    } else {
      Alert.alert('Parabéns! Você adquiriu seus ingressos!');
    }
  }

  return (
    <Container>
      <ScreenContainer>
        <View>
          <Header icon="arrow-back-ios" />
        </View>
        <Highlight title="Detalhes da compra" isEventList={false} />
        <EventCard {...event} disabled />
        <Content>
          <TextContent>
            <Text>Quantidade de ingressos</Text>
            <Text2>{ticketQuantity}</Text2>
          </TextContent>
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
          <TextContent>
            <Text>Valor</Text>
            <Text2>{formatMoney(event.value * ticketQuantity)}</Text2>
          </TextContent>
        </Content>
        <Highlight title="Dados do comprador" isEventList={false} />
        <Content>
          <TextContent>
            <Text>Usuário</Text>
            <Text2>{userName}</Text2>
          </TextContent>
          <TextContent>
            <Text>Email</Text>
            <Text2>{userEmail}</Text2>
          </TextContent>
        </Content>
        <ButtonContent>
          <Button
            type="CAN_CONTINUE"
            title="Finalizar compra"
            onPress={finishPayment}
          />
        </ButtonContent>
      </ScreenContainer>
    </Container>
  );
}
