import { useNavigation } from '@react-navigation/native';

import logoIgm from '../../assets/logo.png';
import { Button } from '../../components/FloatingButton';
import {
  ButtonWrapper,
  Container,
  Content,
  InfoWrapper,
  Logo,
  SubTitle,
  Title,
} from './styles';

export function Home() {
  const navigation = useNavigation();

  function handleEventList() {
    navigation.navigate('eventList');
  }

  function handleMyCart() {
    navigation.navigate('myCart');
  }

  return (
    <Container>
      <Content>
        <InfoWrapper>
          <Logo source={logoIgm} />
          <Title>Olá! Seja bem vindo ao EVER EVENT!</Title>
          <SubTitle>Sempre há uma festinha para você!</SubTitle>
        </InfoWrapper>
        <ButtonWrapper>
          <Button title="Ver Eventos Disponíveis" onPress={handleEventList} />
          <Button title="Meus Ingressos" onPress={handleMyCart} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
