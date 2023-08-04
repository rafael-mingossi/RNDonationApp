import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

////SCREENS
import {Home} from '../screens';

export type StackNavigatorParams = {
  Home: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
