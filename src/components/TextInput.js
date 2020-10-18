import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { wp, hp } from './utils';
import { Snow200, Red } from './Colors';

const Input = ({ error, onChangeText, placeholder, style, value }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={[styles.input, style, error && styles.errorContainer]}
      placeholder={placeholder}
    />
  );
};

export { Input };

const styles = StyleSheet.create({
  input: {
    width: wp(300),
    height: hp(52),
    borderColor: Snow200,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: wp(15),
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: Red,
  },
});
