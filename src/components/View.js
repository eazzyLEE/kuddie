import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Snow200 } from './Colors';
import { hp } from './utils';

export const Footer = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.footerText}>Kuddie Inc. © 2020</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    bottom: hp(10),
  },
  footerText: {
    color: Snow200,
    fontSize: 9,
  },
});
