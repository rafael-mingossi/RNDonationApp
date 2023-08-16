import React, {FC} from 'react';
import Navigator from './config/Navigator';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from '../redux/store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
