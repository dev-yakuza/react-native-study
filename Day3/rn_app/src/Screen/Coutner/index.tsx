import React, {useState} from 'react';
import Styled from 'styled-components/native';

import AppTitle from './AppTitle';
import CounterText from '~/Component/CounterText';
import Button from '~/Component/Button';

const Container = Styled.View`
  flex: 1;
  background-color: red;
`;

const Header = Styled.View`
    flex: 1;
    background-color: green;
`;
const Body = Styled.View`
    flex:2;
    background-color: blue;
`;
const Footer = Styled.View`
    flex: 1;
    background-color: yellow;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Container>
      <Header>
        <AppTitle text="this is a counter app" />
      </Header>
      <Body>
        <CounterText text={count} />
      </Body>
      <Footer>
        <Button text="-" onPress={() => setCount(count - 1)} />
        <Button text="+" onPress={() => setCount(count + 1)} />
      </Footer>
    </Container>
  );
};

export default Counter;
