import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import CircleView from '@components/CircleView';
import globalStyles from '@styles/globalStyles';
import images from '@assets/images';
import {PROFILE_OPTIONS} from '@configs';
import {AUTHSTACK} from '@navigation/screenNames';
import Options from '@components/Options';
import {PROFILE_HEADER_OPTIONS} from '@configs';
import MainHeader from '@components/MainHeader';

const Profile = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => <MainHeader items={PROFILE_HEADER_OPTIONS} />,
    });
  });
  const profileHeader = () => (
    <View style={styles.profileContainer}>
      <CircleView
        size={100}
        disabled={true}
        borderColor="#DBDBDB"
        borderWidth={2}
        source={images.me}
      />
      <Text style={styles.name}>Prakhar Pandey</Text>
      <Text style={styles.email}>pandey.prakhar5002@gmail.com</Text>
    </View>
  );

  const handleOptionPress = id => {
    switch (id) {
      case 6:
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: AUTHSTACK}],
          }),
        );
      default:
        break;
    }
  };

  const profileOptions = ({item}) => (
    <Options
      id={item.id}
      leftText={item.title}
      textStyle={styles.optionTitle}
      leftIcon={item.icon}
      leftIconStyle={styles.leftIcon}
      rightIconStyle={styles.rightIcon}
      rightIcon={images.next_icon}
      handlePress={id => handleOptionPress(id)}
    />
  );

  return (
    <View style={globalStyles.container}>
      {/* <MainHeader items={PROFILE_HEADER_OPTIONS} /> */}
      <FlatList
        data={PROFILE_OPTIONS}
        ListHeaderComponent={profileHeader}
        renderItem={profileOptions}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    width: 35,
    height: 35,
  },
  rightIcon: {
    width: 25,
    height: 25,
  },
  optionTitle: {
    fontSize: 18,
    color: '#000',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 30,
  },
});

export default Profile;
