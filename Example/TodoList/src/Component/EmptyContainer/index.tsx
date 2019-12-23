import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    background-color: white;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 8px;
`;
const Label = Styled.Text`
    font-size: 20px;
`;

const EmptyContainer = () => {
  return (
    <Container>
      <Label>TodoListがありません。</Label>
      <Label>Todoを作ってください。</Label>
    </Container>
  );
};

export default EmptyContainer;
