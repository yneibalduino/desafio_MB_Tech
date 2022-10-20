import styled from 'styled-components/native';

export type ButtonTypeStyleProps = 'CAN_CONTINUE' | 'CANT_CONTINUE';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme, type }) =>
    type === 'CAN_CONTINUE' ? theme.COLORS.BLUE : theme.COLORS.GRAY_LIGHT};
  border-radius: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD_ITALIC};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
