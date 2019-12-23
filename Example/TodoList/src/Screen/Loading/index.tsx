import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';
import {NavigationStackScreenProps} from 'react-navigation-stack';

import {TodoListContext} from '~/Context/TodoList';

const Container = Styled.View`
    flex: 1;
    background-color: white;
    justify-content: center;
    align-items: center;
`;
const Label = Styled.Text`
    font-size: 20px;
`;

const Loading = ({navigation}: NavigationStackScreenProps) => {
  const {isLoaded} = useContext<ITodoListContext>(TodoListContext);

  useEffect(() => {
    if (isLoaded) {
      navigation.navigate('MainNavi');
    }
  }, [isLoaded]);

  return (
    <Container>
      <Label>Loading...</Label>
    </Container>
  );
};

export default Loading;
