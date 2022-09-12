import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

const CircleView = ({
  size,
  disabled,
  handlePress,
  borderColor,
  borderWidth,
  background,
  source,
  tintColor,
  diff = 0,
}) => {
  const styles = {
    buttonStyle: {
      width: size,
      height: size,
      borderRadius: size,
      borderWidth: borderWidth,
      borderColor: borderColor,
      backgroundColor: background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageStyles: {
      width: size - diff,
      height: size - diff,
      borderRadius: size - diff,
      tintColor: tintColor,
      margin: 10,
    },
  };
  return (
    <TouchableOpacity
      style={styles.buttonStyle}
      disabled={disabled}
      onPress={() => handlePress()}>
      <Image style={styles.imageStyles} source={source} resizeMode="contain" />
    </TouchableOpacity>
  );
};

export default CircleView;
