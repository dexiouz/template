import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const AppStack = createNativeStackNavigator();
import App from '../../Screens/App' 
const AppStackScreens = () => (
  <AppStack.Navigator headerMode="none" initialRouteName="Signin">
    <AppStack.Screen name="App" component={App} /> 
  </AppStack.Navigator>
);

export default AppStackScreens;
