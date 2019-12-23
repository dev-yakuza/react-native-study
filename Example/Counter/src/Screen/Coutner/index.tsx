import React from 'react';
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
  return (
    <Container>
      <Header>
        <AppTitle text="this is a counter app" />
      </Header>
      <Body>
        <CounterText />
      </Body>
      <Footer>
        <Button text="-" />
        <Button text="+" />
      </Footer>
    </Container>
  );
};

export default Counter;
