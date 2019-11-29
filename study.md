# react-native

## day1

1. install (expo, react-native-cli)
1. why?
    - component driven development (https://bradfrost.com/blog/post/atomic-web-design/)
    - virtual dom (html repaint reflow)
    - speed & sever stress (api)
1. jsx(javascript xml)
1. package.json(node, npm - node package module)
1. babel
1. React Native bridge
1. folder
1. flow & typescript
1. hello world(react native, react)
1. flex

## day2

1. styled-components
    - install: https://www.styled-components.com/docs/basics#installation
    - how to: https://www.styled-components.com/docs/basics#react-native
1. typescript
    - https://dev-yakuza.github.io/react-native/typescript/
1. babel-plugin-root-import
    - https://dev-yakuza.github.io/react-native/root-import/

### styled-components

install

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

### typescript

install

```bash
npm install typescript @types/react @types/react-native --save-dev
```

create tsconfig.json

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

### babel-plugin-root-import

```bash
npm install babel-plugin-root-import --save-dev
```

modify babel.config.js

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

modify tsconfig.json

```json
{
  "compilerOptions": {
    ...
    "baseUrl": "./src",
    "paths": {
      "~/*": ["*"]
    }
  },
  ...
}
```

## day 3

counter app

1. functional components
1. props, state, flux (context)
  : one-way data binding(react), two-way data binding(angular), both(vue)
  : [data binding](https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula)
1. immutable
1. props, useState
1. ES6

```js
const test = () => {

}

const i = 0;
let i = 0;
```

## day 4

counter app

1. class components
1. lifecycle functions
1. useEffect

## day 5

1. flux
1. useContext
1. context
1. redux & mobx

## day 6

1. AsyncStorage
1. Todolist

## day 7

1. react-navigation

## day 8

1. device test
    - ios
    - android
