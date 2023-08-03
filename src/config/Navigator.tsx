import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

////SCREENS
import Home from '../screens/Home/Home';

export type StackNavigatorParams = {
  Home: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
