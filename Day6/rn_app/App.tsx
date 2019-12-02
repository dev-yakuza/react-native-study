import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex: 1;
  background-color: red;
  justify-content: center;
  align-items: center;
`;

const HelloWorld = Styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const App = () => {
  return (
    <Container>
      <HelloWorld>Hello World!!</HelloWorld>
    </Container>
  );
};

export default App;
