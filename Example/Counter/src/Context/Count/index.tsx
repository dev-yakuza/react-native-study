import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

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

  const setCountValue = async (count: number) => {
    await AsyncStorage.setItem('count', count.toString());
    setCount(count);
  };

  const plusCount = () => {
    setCountValue(count + 1);
  };

  const minusCount = () => {
    setCountValue(count - 1);
  };

  const init = async () => {
    const count = await AsyncStorage.getItem('count');
    if (count) {
      setCount(Number.parseInt(count));
    }
  };

  useEffect(() => {
    init();
  }, []);

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
