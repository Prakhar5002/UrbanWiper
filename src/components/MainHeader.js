import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const MainHeader = ({items, handlePress}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}} />
      {items.map(item => (
        <TouchableOpacity>
          <Image style={styles.icon} source={item.icon} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  icon: {
    width: 25,
    height: 25,
  },
});

export default MainHeader;
