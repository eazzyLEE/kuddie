import { StyleSheet } from 'react-native';
import { Black } from '../components';
import { hp } from '../components/utils';

export const introStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  leadText: {
    color: Black,
    fontSize: 70,
    fontFamily: 'Pacifico-Regular',
    marginTop: hp(160),
  },
  button: {
    marginTop: hp(200),
  },
});

export const registerStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  leadInput: {
    marginTop: hp(239),
  },
  input: {
    marginTop: hp(20),
  },
  button: {
    marginTop: hp(40),
  },
});
