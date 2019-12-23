import React, {useState, useContext} from 'react';
import {Keyboard} from 'react-native';
import Styled from 'styled-components/native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import {TodoListContext} from '~/Context/TodoList';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: grey;
`;

const HideKeyboardBackground = Styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
`;

const Input = Styled.TextInput`
    background-color: white;
    border: 1px;
    border-color: black;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
    font-size: 16px;
`;
const Button = Styled.TouchableOpacity`
    background-color: black;
    border-radius: 8px;
    padding: 8px;
    margin: 8px;
`;
const ButtonLabel = Styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
`;

const AddTodo = ({navigation}: NavigationStackScreenProps) => {
  const [todo, setTodo] = useState<string>('');
  const {addItem} = useContext<ITodoListContext>(TodoListContext);

  return (
    <Container>
      <HideKeyboardBackground
        onPress={() => {
          Keyboard.dismiss();
        }}
        activeOpacity={1}>
        <Input onChangeText={text => setTodo(text)} />
        <Button
          onPress={() => {
            addItem(todo);
            Keyboard.dismiss(); // Keyboardを隠して
            navigation.goBack(); // 以前の画面に戻ります。
          }}>
          <ButtonLabel>Add</ButtonLabel>
        </Button>
      </HideKeyboardBackground>
    </Container>
  );
};

export default AddTodo;
