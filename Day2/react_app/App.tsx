import React from 'react';
import Styled from 'styled-components';

const Container = Styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const HelloWorld = Styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const App = () => {
  return (
    <Container>
      <HelloWorld>Hello World!</HelloWorld>
    </Container>
  );
};

export default App;
