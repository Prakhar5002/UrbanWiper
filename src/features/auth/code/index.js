import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AuthContainer from '../components/AuthContainer';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import FilledButton from '@components/FilledButton';
import {USER_CATEGORY} from '@navigation/screenNames';

const CELL_COUNT = 6;

const Code = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const navigateNext = () => {
    navigation.navigate(USER_CATEGORY);
  };
  return (
    <AuthContainer>
      <View style={styles.wrapper}>
        <Text style={styles.text_lg}>Verification</Text>
        <Text style={styles.text_md}>
          Enter the OTP code from the phone we just sent you
        </Text>
        <CodeField
          ref={ref}
          {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <FilledButton
          style={{marginTop: 50}}
          label="Continue"
          background="#B22222"
          center={true}
          handlePress={navigateNext}
        />
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  codeFieldRoot: {
    marginTop: 50,
    marginHorizontal: 8,
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    color: '#000',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  focusCell: {
    borderColor: '#B22222',
  },
  text_lg: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 50,
    color: '#000',
  },
  text_md: {
    fontSize: 18,
    color: 'rgba(0,0,0,0.8)',
    fontWeight: '600',
    marginTop: 20,
  },
});

export default Code;
