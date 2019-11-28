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

export default class Button extends React.Component<Props> {
  render() {
    const {text, onPress} = this.props;
    return (
      <Container onPress={onPress}>
        <ButtonTitle>{text}</ButtonTitle>
      </Container>
    );
  }
}
