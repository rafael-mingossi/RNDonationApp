import React, {useEffect, useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

////SCREENS
import {Home, SingleDonation, Login, Registration, Payment} from '../screens';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {AppState} from 'react-native';
import useToken from '../../api/useToken';

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
  Payment: undefined;
};

const Stack = createStackNavigator<StackNavigatorParams>();
const Navigator = () => {
  const user = useSelector((state: RootState) => state.user);

  const appState = useRef(AppState.currentState);
  const {checkToken} = useToken();

  useEffect(() => {
    if (user.isLoggedIn) {
      AppState.addEventListener('change', async nextAppState => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          // console.log('You are back into the APP');
          await checkToken();
        }

        appState.current = nextAppState;
      });
      checkToken().then(() =>
        console.log('TOKEN UPDATED AFTER RE-OPENING THE APP'),
      );
      // console.log('App rendered without AppState');
    }
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={user.isLoggedIn ? 'Home' : 'Login'}
      screenOptions={{
        headerShown: false,
      }}>
      {user.isLoggedIn && user.token ? (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SingleDonation" component={SingleDonation} />
          <Stack.Screen name="Payment" component={Payment} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Registration" component={Registration} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
