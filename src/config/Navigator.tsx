import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

////SCREENS
import {Home, SingleDonation, Login, Registration} from '../screens';

type DonationsType = {
  name: string;
  description: string;
  image: string;
  donationItemId: number;
  categoryIds: Array<number>;
  price: string;
};

export type StackNavigatorParams = {
  Home: undefined;
  SingleDonation: {
    val: DonationsType;
    categoryInfo: {categoryId: number; name: string} | undefined;
  };
  Login: undefined;
  Registration: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();
const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SingleDonation" component={SingleDonation} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
};

export default Navigator;
