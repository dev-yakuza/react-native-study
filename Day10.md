# day 10 - Todolist

## Result Screens

![TodoList app screenshot](https://raw.githubusercontent.com/dev-yakuza/react-study/master/image/screenshot.png)

## Add Todo Screen

- src/Screen/AddTodo/index.tsx

### TextInput

- [react-native TextInput](https://facebook.github.io/react-native/docs/textinput)

### Keyboard

keyboard dismiss

- [react-native Keyboard](https://facebook.github.io/react-native/docs/keyboard)

## react-navigation

- createStackNavigator

```js
import {createStackNavigator} from 'react-navigation-stack';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

const MainNavi = createStackNavigator({
    TodoList,
    AddTodo,
});
```

- createAppContainer

```js
import {createAppContainer} from 'react-navigation';
...
export default createAppContainer(MainNavi);
```
