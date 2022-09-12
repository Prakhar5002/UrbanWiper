import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ImageButton from '@components/ImageButton';
import FilledButton from '@components/FilledButton';
import images from '@assets/images';
import AuthContainer from '../components/AuthContainer';
import {COUNTRIES_LIST, CODE_INPUT} from '@navigation/screenNames';

const Signin = ({navigation}) => {
  const [countryCode, setCountryCode] = useState('+91');

  const navigateNext = () => {
    navigation.navigate(CODE_INPUT);
  };

  return (
    <AuthContainer>
      <View style={{marginHorizontal: 20}}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.text_sm}>Login to your account</Text>
      </View>

      <View style={styles.wrapper}>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.countryBtn}
            onPress={() => navigation.navigate(COUNTRIES_LIST)}>
            <Text style={{color: '#000', fontSize: 18}}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor="grey"
            keyboardType="phone-pad"
            style={{flex: 1, color: '#000', fontSize: 18}}
            maxLength={10}
          />
        </View>
        <FilledButton
          label="Continue"
          background="#B22222"
          handlePress={navigateNext}
        />
        <Text style={styles.text_md}>We'll send otp for verification</Text>
      </View>

      <View style={styles.wrapper}>
        <ImageButton
          style={{marginTop: 40}}
          label="Log in with Google"
          background="white"
          source={images.google}
          textStyle={styles.googleText}
          handlePress={navigateNext}
        />
        <ImageButton
          style={{marginTop: 20}}
          label="Log in with Facebook"
          background="#374099"
          source={images.facebook}
          handlePress={navigateNext}
        />
        <Text style={styles.text_sm}>Don't have an account?</Text>
        <Text style={styles.createText}>Sign up</Text>
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  googleText: {
    color: '#000',
    fontSize: 18,
    marginLeft: 10,
  },
  countryBtn: {
    marginHorizontal: 10,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 50,
    color: '#000',
  },
  wrapper: {
    marginTop: 50,
    alignItems: 'center',
  },
  text_sm: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    marginTop: 10,
  },
  text_md: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '80%',
    height: 60,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
  },
  createText: {
    fontSize: 16,
    color: 'darkblue',
  },
});
export default Signin;
