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

interface Props {}
interface State {
  count: number;
}
export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const {count} = this.state;

    return (
      <Container>
        <Header>
          <AppTitle text="this is a counter app" />
        </Header>
        <Body>
          <CounterText text={count} />
        </Body>
        <Footer>
          <Button text="-" onPress={() => this.setState({count: count - 1})} />
          <Button text="+" onPress={() => this.setState({count: count + 1})} />
        </Footer>
      </Container>
    );
  }
}
