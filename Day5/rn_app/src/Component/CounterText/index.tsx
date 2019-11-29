import React, {useContext} from 'react';
import Styled from 'styled-components/native';

import {CountContext} from '~/Context/Count';

const Container = Styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
const TitleLabel = Styled.Text`
    font-size: 24px;
`;

const CounterText = () => {
  const {count} = useContext<ICount>(CountContext);
  return (
    <Container>
      <TitleLabel>{count}</TitleLabel>
    </Container>
  );
};

export default CounterText;
