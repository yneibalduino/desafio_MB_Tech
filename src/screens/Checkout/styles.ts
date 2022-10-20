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
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonContent = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const QuantityButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;
