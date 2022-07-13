import React, { useMemo, useEffect, useReducer, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { AuthContext } from '../context/authContext';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackScreens from './AuthNavigation';
import AppStackScreens from './AppNavigation';

const AppRoute = () => {
  const handleSignOut = async () => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      console.log('There was an error');
    }
  };
  const initialLoginState = {
    isLoading: true,
    userEmail: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userEmail: action.email,
          userToken: action.token,
          isLoading: false,
        };

      case 'LOGOUT':
        return {
          ...prevState,
          userEmail: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo(
    () => ({
      signIn: async (token, email) => {
        try {
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('email', email);
        } catch (e) {
          console.log(e, 'Error');
        }
        dispatch({ type: 'LOGIN', email, token });
      },
      signUp: async (token, email) => {
        try {
          await AsyncStorage.setItem('token', token);
          await AsyncStorage.setItem('email', email);
        } catch (e) {
          console.log(e, 'Error');
        }
        dispatch({ type: 'REGISTER', email, token });
      },
      signOut: async () => {
        await handleSignOut();
        dispatch({ type: 'LOGOUT' });
      },
    }),
    [],
  );
  const getToken = async () => {
    let userToken = null;
    try {
      userToken = await AsyncStorage.getItem('token');
    } catch (e) {
      console.log('Error');
    }
    dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  };
  useEffect(() => {
    getToken();
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <AppStackScreens />
        ) : (
          <AuthStackScreens />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppRoute;

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
