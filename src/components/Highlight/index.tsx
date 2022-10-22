import Checkbox from 'expo-checkbox';

import { Container, Content, Subtitle, Title } from './styles';

type Props = {
  title: string;
  subtitle?: string;
  isEventList: boolean;
  setChecked?: (checkbox: boolean) => void;
  checked?: boolean;
};

export function Highlight({
  title,
  subtitle,
  isEventList,
  setChecked,
  checked,
}: Props) {
  return (
    <Container isEventList={isEventList}>
      <Title>{title}</Title>

      {isEventList && (
        <Content>
          <Subtitle>{subtitle}</Subtitle>

          <Checkbox value={checked} onValueChange={setChecked} />
        </Content>
      )}
    </Container>
  );
}
