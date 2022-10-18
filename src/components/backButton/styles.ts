import styled from "styled-components/native";
import {MaterialIcons} from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
  type: ButtonIconTypeStyleProps;
}

export const Container = styled.TouchableOpacity`
  width: 56px;
  height: 56px;
  justify-content: center;
  margin-left: 10px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({}) => ({
  size: 26,
}))`
  color: ${({theme}) => theme.COLORS.GRAY_DARK}
  `;