import { useState } from 'react';

import Checkbox from 'expo-checkbox';

import { Container, Content, Subtitle, Title } from './styles';

type Props = {
  title: string;
  subtitle?: string;
  isEventList: boolean;
  setChecked?: () => void;
};

export function Highlight({ title, subtitle, isEventList }: Props) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Container isEventList={isEventList}>
      <Title>{title}</Title>

      {isEventList && (
        <Content>
          <Subtitle>{subtitle}</Subtitle>

          <Checkbox value={isChecked} onValueChange={setChecked} />
        </Content>
      )}
    </Container>
  );
}
