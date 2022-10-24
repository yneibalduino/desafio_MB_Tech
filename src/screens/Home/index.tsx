import { Button } from '@components/FloatingButton';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import logoIgm from '../../assets/logo.png';
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
  const { t } = useTranslation();
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
          <Title>{t('PROFILES.TITLE.HELLO')}</Title>
          <SubTitle>Sempre há uma festinha para você!</SubTitle>
        </InfoWrapper>
        <ButtonWrapper>
          <Button
            title={t('PROFILES.BUTTON.EVENTLIST')}
            onPress={handleEventList}
          />
          <Button title={t('PROFILES.BUTTON.MYCART')} onPress={handleMyCart} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
