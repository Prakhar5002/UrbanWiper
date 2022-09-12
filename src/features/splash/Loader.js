import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <ActivityIndicator size="large" color="darkblue" />
    </View>
  );
};

export default Loader;
