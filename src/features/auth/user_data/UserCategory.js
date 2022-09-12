import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import AuthContainer from '../components/AuthContainer';
import {USER_CATEGORY_OPTIONS} from '@assets/data/auth/options';
import {BOTTOM_TAB} from '@navigation/screenNames';
import FilledButton from '@components/FilledButton';

const UserCategory = ({navigation}) => {
  const [options, setOptions] = useState([]);
  const [navigationDisabled, setNavigationDisabled] = useState(true);

  useEffect(() => {
    const categoryOptions = USER_CATEGORY_OPTIONS.map(item => {
      return {...item, selected: false};
    });
    setOptions(categoryOptions);
  }, []);

  const handleOptionPress = id => {
    let optionsArr = [...options];
    optionsArr = optionsArr.map(item => {
      if (item.id === id) {
        return {...item, selected: true};
      }
      return {...item, selected: false};
    });
    setOptions(optionsArr);
    setNavigationDisabled(false);
  };

  const navigateNext = () => {
    const selectedOption = options.find(item => item.selected);
    navigation.navigate(BOTTOM_TAB, {
      userCategoryId: selectedOption.id,
    });
  };

  const renderOptions = ({item}) => (
    <TouchableOpacity
      style={styles.optionContainer}
      activeOpacity={0.5}
      onPress={() => handleOptionPress(item.id)}>
      <View
        style={[
          styles.optionWrapper,
          {
            backgroundColor: item.selected
              ? '#B22222'
              : 'rgba(255,255,255,0.6)',
          },
        ]}>
        <Image style={styles.image} source={item.image} />
        <Text
          style={[styles.optionText, {color: item.selected ? '#fff' : '#000'}]}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <AuthContainer>
      <Text style={styles.title}>Define yourself</Text>
      <FlatList
        data={options}
        numColumns={2}
        renderItem={renderOptions}
        keyExtractor={item => item.id}
      />
      <FilledButton
        style={{marginBottom: 20}}
        label="Continue"
        disabled={navigationDisabled}
        background="#B22222"
        handlePress={navigateNext}
        center={true}
      />
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  optionWrapper: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderBottomWidth: 2,
    borderColor: 'grey',
    paddingVertical: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 50,
    color: '#000',
    marginLeft: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#000',
    marginTop: 5,
    fontWeight: '600',
  },
});

export default UserCategory;
