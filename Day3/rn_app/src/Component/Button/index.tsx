import React from 'react';
import Styled from 'styled-components/native';

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
  onPress: () => void;
}

const Button = ({text, onPress}: Props) => {
  return (
    <Container onPress={onPress}>
      <ButtonTitle>{text}</ButtonTitle>
    </Container>
  );
};

export default Button;
