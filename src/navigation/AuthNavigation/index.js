import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const AuthStack = createNativeStackNavigator();
import Login from '../../Screens/Auth/Login';

const AuthStackScreens = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Signin">
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

export default AuthStackScreens;
