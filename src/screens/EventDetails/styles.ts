import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 22px;
`;

export const Content = styled.View`
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  margin-top: 10px; ;
`;

export const ButtonContent = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;
