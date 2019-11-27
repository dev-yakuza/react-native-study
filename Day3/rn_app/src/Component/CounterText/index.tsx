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

const CounterText = ({text}: Props) => {
  return (
    <Container>
      <TitleLabel>{text}</TitleLabel>
    </Container>
  );
};

export default CounterText;
