import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  background-color: white;
  margin: 8px;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  border-radius: 8px;
`;
const TodoItemLabel = Styled.Text`
  flex: 1;
`;
const DeleteButton = Styled.TouchableOpacity`
  background-color: red;
  padding: 8px 16px;;
  border-radius: 8px;
`;
const DeleteButtonLabel = Styled.Text`
  color: white;
`;

interface Props {
  text: string;
  onPress: () => void;
}

const TodoItem = ({text, onPress}: Props) => {
  return (
    <Container>
      <TodoItemLabel>{text}</TodoItemLabel>
      <DeleteButton onPress={onPress}>
        <DeleteButtonLabel>DEL</DeleteButtonLabel>
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;
