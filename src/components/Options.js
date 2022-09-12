import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'; 

const Options = ({
  id,
  leftIcon,
  leftIconStyle,
  leftText,
  textStyle,
  rightIcon,
  rightIconStyle,
  handlePress,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      disabled={disabled}
      onPress={() => handlePress(id)}
      activeOpacity={0.6}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={leftIconStyle ? leftIconStyle : styles.icon}
          source={leftIcon}
        />
        <Text style={[textStyle, {marginLeft: 15}]}>{leftText}</Text>
      </View>
      <View>
        <Image
          style={rightIconStyle ? rightIconStyle : styles.icon}
          source={rightIcon}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#DBDBDB',
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default Options;
