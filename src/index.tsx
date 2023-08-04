import React, {FC} from 'react';
import Navigator from './config/Navigator';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
};

export default App;
