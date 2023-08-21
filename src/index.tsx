import React, {FC} from 'react';
import Navigator from './config/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {persistor} from '../redux/store';
import 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
