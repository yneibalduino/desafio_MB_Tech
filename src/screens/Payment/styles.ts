import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
`;

export const Content = styled.View`
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  margin-top: 10px;
  /* flex-direction: row;
  justify-content: space-between; */
`;

export const TextContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const ButtonContent = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const Text2 = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;
