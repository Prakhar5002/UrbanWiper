import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import {BOTTOM_TAB, AUTHSTACK} from './screenNames';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

class RootStack extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name={AUTHSTACK}
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={BOTTOM_TAB}
          component={BottomTab}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default RootStack;
