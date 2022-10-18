import styled from "styled-components/native";

import {MaterialIcons} from '@expo/vector-icons'

import { SafeAreaView } from 'react-native-safe-area-context';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props ={
  type: ButtonIconTypeStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.TouchableOpacity<Props>`
  width: 56px;
  height: 56px;
  justify-content: center;
  margin-left: 10px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({}) => ({
  size: 30,
}))`
  color: ${({theme}) => theme.COLORS.GRAY_DARK}
  `;

  export const Logo = styled.Image`
  width: 95px;
  height: 95px;
`;