import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ImageButton = ({
  handlePress,
  label,
  source,
  background,
  disabled = false,
  textStyle,
  center = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        {backgroundColor: background, alignSelf: center ? 'center' : 'auto'},
      ]}
      disabled={disabled}
      onPress={() => handlePress()}>
      <Image style={styles.image} source={source} resizeMode="contain" />
      <Text style={textStyle ? textStyle : styles.title}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 10,
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default ImageButton;
