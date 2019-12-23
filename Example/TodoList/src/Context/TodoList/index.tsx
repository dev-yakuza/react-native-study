import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const TodoListContext = createContext<ITodoListContext>({
  isLoaded: false,
  todoList: [],
  addItem: (todo: string) => {},
  deleteItem: (index: number) => {},
});

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const TodoListProvider = ({children}: Props) => {
  const [todoList, setTodoList] = useState<Array<string>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const deleteItem = (index: number): void => {
    // ...todoList = 'test', 'test1', 'test2', 'test3'
    let tempList = [...todoList];
    tempList.splice(index, 1);
    setTodoList(tempList);
    AsyncStorage.setItem('todoList', JSON.stringify(tempList));
  };

  const addItem = (text: string): void => {
    const newList = [...todoList, text];
    setTodoList(newList);
    AsyncStorage.setItem('todoList', JSON.stringify(newList));
  };

  const init = async () => {
    const todoList = await AsyncStorage.getItem('todoList');
    if (todoList) {
      setTodoList(JSON.parse(todoList));
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    setTimeout(() => {
      init();
    }, 1000);
  }, []);

  return (
    <TodoListContext.Provider value={{isLoaded, todoList, addItem, deleteItem}}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListProvider, TodoListContext};
