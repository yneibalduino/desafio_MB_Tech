import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  margin-top: 10px;
  margin-bottom: 20px;
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

export const QuantityButtonText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const QuantityButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
`;

export const QuantityContent = styled.View`
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
  align-self: flex-end;
  margin-top: 8px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.GRAY_DARK,
}))`
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  border-radius: 6px;
  height: 40px;
  padding: 10px;
  margin-bottom: 10px;
`;
