import React, {JSX} from 'react';
import Navigator from './config/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {persistor} from '../redux/store';
import 'react-native-gesture-handler';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide().then(() => {});
          }}>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
