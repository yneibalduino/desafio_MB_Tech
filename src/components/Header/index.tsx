import { useNavigation } from "@react-navigation/native";

import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconTypeStyleProps, Container, Content, Icon, Logo } from "./styles";

import logoIgm from "../../assets/logo.png"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function Header({ icon, type = 'PRIMARY', ...rest}: Props){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  return(
    <Container>
      <Content {...rest}
        onPress={handleGoBack}
        >
        <Icon
          name={icon}
          type={type}
        />
      </Content>
      
      <Logo source={logoIgm}/>

    </Container>
  )
}