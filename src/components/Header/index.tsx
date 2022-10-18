import { ButtonIconTypeStyleProps, Container, Content, Icon, Logo } from "./styles";

import { TouchableOpacityProps } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import logoIgm from "../../assets/logo.png"

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
}

export function BackButton({ icon, type = 'PRIMARY', ...rest}: Props){
  return(
    <Container>
      <Content {...rest}>
        <Icon
          name={icon}
          type={type}
        />
      </Content>

      <Logo source={logoIgm}/>
    </Container>
  )
}