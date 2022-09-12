import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import countryCodes from '@assets/data/auth/countryCodes.json';

const CountriesList = ({navigation}) => {
  const listItems = ({item}) => (
    <View style={styles.listContainer}>
      <TouchableOpacity
        style={{flex: 1, flexDirection: 'row'}}
        onPress={() => navigation.goBack()}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
        <Text style={styles.itemText}>{item.dial_code}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={countryCodes}
        renderItem={listItems}
        keyExtractor={(item, index) => String(index)}
      />
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.closeBtnText}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderBottomWidth: 1.5,
    borderColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#000',
  },
  closeBtn: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#374099',
    borderTopWidth: 1,
    borderColor: 'grey',
  },
  closeBtnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
});

export default CountriesList;
