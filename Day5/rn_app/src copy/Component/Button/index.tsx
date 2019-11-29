import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {CountContext} from '~/Context/Count';

const Container = Styled.TouchableOpacity`
    padding: 16px;
    margin: 16px;
    border-width: 1px;
    border-color: black;
    border-radius: 4px;
`;

const ButtonTitle = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

interface Props {
  text: '-' | '+';
}

const Button = ({text}: Props) => {
  const {plusCount, minusCount} = useContext<ICount>(CountContext);
  return (
    <Container onPress={() => (text === '+' ? plusCount() : minusCount())}>
      <ButtonTitle>{text}</ButtonTitle>
    </Container>
  );
};

export default Button;
