import { Container, Content, Subtitle, Title } from "./styles";

import Checkbox from 'expo-checkbox';

type Props = {
  title: string;
  subtitle?: string;
  isEventList: boolean;
}



export function Hightlight({title, subtitle, isEventList}: Props){
  return(
    <Container
      isEventList={isEventList}    >

      <Title>
        {title}
      </Title>

      { isEventList && 
        <Content>
        <Subtitle>
          {subtitle}
        </Subtitle>

        <Checkbox value={true} onValueChange={()=>{}} />
      </Content>
      }

    </Container>
  )
}