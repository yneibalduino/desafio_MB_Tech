import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const EventName = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.BOLD};
  color: ${({theme}) =>theme.COLORS.GRAY_DARK};
`;

export const DateAndHour = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) =>theme.COLORS.GRAY_DARK};
  margin-top: 5px
`;

export const Participants = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) =>theme.COLORS.GRAY_DARK};
  margin-top: 5px;
`;