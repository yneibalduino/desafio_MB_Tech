import { RouteProp, useRoute } from '@react-navigation/native';
import { View } from 'react-native';

import { Routes } from '../../@types/navigation';
import { Button } from '../../components/Button';
import { EventCard } from '../../components/EventCard';
import { Header } from '../../components/Header';
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
    params: { event },
  } = useRoute<RouteProp<Routes, 'payment'>>();

  return (
    <Container>
      <View>
        <Header icon="arrow-back-ios" />
      </View>
      <EventCard {...event} disabled />
      <Content>
        <TextContent>
          <Text>Quantidade de ingressos</Text>
          <Text2>1</Text2>
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
      </Content>
      <ButtonContent>
        <Button title="Finalizar compra" onPress={() => {}} />
      </ButtonContent>
    </Container>
  );
}
