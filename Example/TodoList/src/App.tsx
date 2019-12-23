import React from 'react';
import Navigator from '~/Screen/Navigator';

import {TodoListProvider} from '~/Context/TodoList';

const App = () => {
  return (
    <TodoListProvider>
      <Navigator />
    </TodoListProvider>
  );
};

export default App;
