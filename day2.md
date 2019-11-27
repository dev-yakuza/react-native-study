# day2

1. styled-components
    - install: [https://www.styled-components.com/docs/basics#installation](https://www.styled-components.com/docs/basics#installation)
    - how to: [https://www.styled-components.com/docs/basics#react-native](https://www.styled-components.com/docs/basics#react-native)
1. typescript
    - [https://dev-yakuza.github.io/react-native/typescript/](https://dev-yakuza.github.io/react-native/typescript/)
1. babel-plugin-root-import
    - [https://dev-yakuza.github.io/react-native/root-import/](https://dev-yakuza.github.io/react-native/root-import/)

## styled-components

install

```bash
npm install --save styled-components
npm install --save-dev @types/styled-components babel-plugin-styled-components
```

## typescript

install

```bash
npm install typescript @types/react @types/react-native --save-dev
```

create tsconfig.js

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

## babel-plugin-root-import

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
