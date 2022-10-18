import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 22px;
  background-color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
`;

export const Title = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.LG}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.BOLD};
  color: ${({theme}) =>theme.COLORS.GRAY_DARK};
`;

export const SubTitle = styled.Text`
  font-size: ${({theme}) =>theme.FONT_SIZE.SM}px;
  font-family: ${({theme}) =>theme.FONT_FAMILY.REGULAR};
  color: ${({theme}) =>theme.COLORS.GRAY_DARK};
  margin-top: 5px
`;