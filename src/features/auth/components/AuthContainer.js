import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import images from '@assets/images';

const AuthContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.car1}
        style={styles.container}
        imageStyle={{opacity: 0.35}}>
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AuthContainer;
