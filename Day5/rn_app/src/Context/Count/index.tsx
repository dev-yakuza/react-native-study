import React, {createContext, useState, useEffect} from 'react';

const CountContext = createContext<ICount>({
  count: 0,
  plusCount: (): void => {},
  minusCount: (): void => {},
});

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const CountProvider = ({children}: Props) => {
  const [count, setCount] = useState<number>(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  return (
    <CountContext.Provider
      value={{
        count,
        plusCount,
        minusCount,
      }}>
      {children}
    </CountContext.Provider>
  );
};

export {CountProvider, CountContext};
