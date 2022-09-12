import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@navigation/RootStack';
import BottomTab from '@navigation/BottomTab';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
}

export default App;
