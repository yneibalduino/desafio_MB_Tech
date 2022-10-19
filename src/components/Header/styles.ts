import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 60px;
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
  color: ${({ theme }) => theme.COLORS.GRAY_DARK};
`;

export const Logo = styled.Image`
  width: 95px;
  height: 95px;
`;
