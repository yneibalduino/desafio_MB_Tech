import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 22px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const InfoWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 216px;
  height: 216px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_ITALIC};
  text-align: center;
  width: 80%;
  margin-top: 28px;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;
