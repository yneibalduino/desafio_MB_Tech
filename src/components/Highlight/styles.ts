import styled, { css } from "styled-components/native";

export const Container = styled.View<{isEventList: boolean}>`
  flex-direction: row;
  justify-content: ${({isEventList}) => isEventList ? 'space-between' : 'center'};
  align-items: center;
  margin-bottom: 14px;
`;

export const Content = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.XL}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.BOLD_ITALIC};
`;

export const Subtitle = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.MD}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) =>theme.COLORS.GRAY_DARK};
  margin-right: 5px;
`;