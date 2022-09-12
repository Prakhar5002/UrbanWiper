import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import MainHeader from '@components/MainHeader';
import {HOME_HEADER_OPTIONS} from '@configs';

const Home = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerRight: () => <MainHeader items={HOME_HEADER_OPTIONS} />,
    });
  });
  return (
    <View style={{flex: 1}}>
      <Text></Text>
    </View>
  );
};

export default Home;
