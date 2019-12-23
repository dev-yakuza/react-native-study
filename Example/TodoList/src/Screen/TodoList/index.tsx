import React, {useContext} from 'react';
import {FlatList, Button} from 'react-native';
import Styled from 'styled-components/native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import {TodoListContext} from '~/Context/TodoList';

import TodoItem from '~/Component/TodoItem';
import EmptyContainer from '~/Component/EmptyContainer';

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: gray;
`;

const TodoList = () => {
  const {todoList, deleteItem} = useContext<ITodoListContext>(TodoListContext);

  return (
    <Container>
      <FlatList
        data={todoList}
        keyExtractor={(item, index) => `todo-${index}`}
        renderItem={({item, index}) => (
          <TodoItem
            text={item}
            onPress={() => {
              deleteItem(index);
            }}
          />
        )}
        ListEmptyComponent={<EmptyContainer />}
        contentContainerStyle={{flexGrow: 1}}
      />
    </Container>
  );
};

TodoList.navigationOptions = ({navigation}: NavigationStackScreenProps) => {
  return {
    title: 'TodoList',
    headerRight: (
      <Button
        title="+ Add"
        onPress={() => {
          navigation.navigate('AddTodo');
        }}
      />
    ),
  };
};

export default TodoList;
