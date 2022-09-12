import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signin from '@features/auth/signin';
import {SIGNIN, COUNTRIES_LIST, CODE_INPUT, USER_CATEGORY} from './screenNames';
import CountriesList from '@features/auth/countries_list';
import Code from '@features/auth/code';
import UserCategory from '@features/auth/user_data/UserCategory';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SIGNIN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={SIGNIN} component={Signin} />
      <Stack.Screen name={CODE_INPUT} component={Code} />
      <Stack.Screen name={USER_CATEGORY} component={UserCategory} />
      <Stack.Group
        screenOptions={{
          presentation: 'fullScreenModal',
          animation: 'slide_from_bottom',
        }}>
        <Stack.Screen
          name={COUNTRIES_LIST}
          component={CountriesList}
          options={{
            headerShown: true,
            headerTitle: 'Select country',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;
