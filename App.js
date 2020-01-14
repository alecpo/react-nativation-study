import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';
import {createAppContainer} from 'react-navigation';

import RootStack from './src/components/navigation/RootStack';

const App = () => {
  const AppContainer = createAppContainer(RootStack);

  return (
    <>
      <StatusBar />
      <StyledSafeAreaView>
        <AppContainer />
      </StyledSafeAreaView>
    </>
  );
};

const StyledSafeAreaView = styled.SafeAreaView`
  background-color: #050;
  flex: 1;
`;

export default App;
