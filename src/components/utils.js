// import { Platform, StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wdp,
  heightPercentageToDP as hdp,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

const CustomHeight = 667 - 24;
const CustomWidth = 375;
// const BaseUrl = 'https://us-central1-kuddie.cloudfunctions.net/user';

export const hp = (value) => {
  const dimension = (value / CustomHeight) * 100;
  return hdp(`${dimension}%`);
};

export const wp = (value) => {
  const dimension = (value / CustomWidth) * 100;
  return wdp(`${dimension}%`);
};

export const getPhone = async () => {
  const phone = await AsyncStorage.getItem('phone');
  return phone || null;
};

export const savePhone = async (value) => {
  await AsyncStorage.setItem('phone', value);
};
