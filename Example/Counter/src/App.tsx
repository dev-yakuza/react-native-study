import React from 'react';

import {CountProvider} from '~/Context/Count';
import Counter from '~/Screen/Coutner';

const App = () => {
  return (
    <CountProvider>
      <Counter />
    </CountProvider>
  );
};

export default App;
