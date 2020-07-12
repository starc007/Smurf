//import liraries
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import SwiperScreen from '../screens/SwiperScreen';

const Stack = createStackNavigator();
// create a component
const RootStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Swiper" component={SwiperScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
