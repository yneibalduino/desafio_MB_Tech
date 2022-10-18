import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/button";

import { Container, Content, InfoWrapper, Logo, SubTitle, Title } from "./styles";

import logoIgm from "../../assets/logo.png"

export function Home(){
  const navigation = useNavigation();

  function handleEventList(){
    navigation.navigate('eventList')
  }

  return(
    <Container>

      <Content>
        <InfoWrapper>
          <Logo source={logoIgm}/>
          <Title>
            Olá! Seja bem vindo ao EVER EVENT!
          </Title>
          <SubTitle>
            Sempre há uma festinha para você!
          </SubTitle>
        </InfoWrapper>

        <Button
        title="Ver Eventos Disponíveis"
        onPress={handleEventList}
        />
      </Content>

    </Container>
  )
}