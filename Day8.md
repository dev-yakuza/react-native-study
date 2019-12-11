# day 8 - Todolist

## Result Screens

![TodoList app screenshot](https://raw.githubusercontent.com/dev-yakuza/react-study/master/image/screenshot.png)

## install

### react native project

```bash
react-native init TodoList
```

### typescript

- install

```bash
npm install typescript @types/react @types/react-native --save-dev
```

- tsconfig.json

```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react",
    "lib": ["es6"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": ["node_modules", "babel.config.js", "metro.config.js", "jest.config.js"]
}
```

### styled-components

- install

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

- babel.config.js

```js
module.exports = {
  ...
  plugins: ['babel-plugin-styled-components'],
};
```

### absolute path

- install

```bash
npm install babel-plugin-root-import --save-dev
```

- babel.config.js

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```

- tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "baseUrl": "./src", // all paths are relative to the baseUrl
    "paths": {
      "~/*": ["*"] // resolve any `~/foo/bar` to `<baseUrl>/foo/bar`
    }
  },
  ...
}
```

### react-navigation

- install

```bash
npm install --save react-navigation react-native-gesture-handler react-native-reanimated react-native-screens
npm install --save react-navigation-stack
```

- createAppContainer
- createSwitchNavigator
- createStackNavigator

## AsyncStorage

- install

```bash
npm install --save @react-native-community/async-storage
```

- link

```bash
cd ios
pod install
cd ..
```

## Hello world

- src/App.tsx

```js
import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Label = Styled.Text`
    font-size: 24px;
`;

const App = () => {
  return (
    <Container>
      <Label>Hello world!</Label>
    </Container>
  );
};

export default App;
```

- index.js

```js
import App from '~/App';
```

- execute the project

```bash
npm run ios
# android
# npm run android
```

## Todo Context

- src/Context/Todo/@types/index.d.ts
- src/Context/Todo/index.tsx
- Mock Data

## Todo List Screen

- src/Screen/TodoList/index.tsx
- src/Screen/TodoList/TodoItem/index.tsx

## Add Todo Screen

- src/Screen/AddTodo/index.tsx

## Stack Navigator

- src/Navigator.tsx

## Save Todo(AsyncStorage)

- useEffect

## Switch Navigator

- Loading screen: src/Screen/Loading/index.tsx
- check Loaded
