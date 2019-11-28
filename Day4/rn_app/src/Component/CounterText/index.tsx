import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;

interface Props {
  text: number;
}
export default class CounterText extends React.Component<Props> {
  render() {
    const {text} = this.props;
    return (
      <Container>
        <TitleLabel>{text}</TitleLabel>
      </Container>
    );
  }
}
