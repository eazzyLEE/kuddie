import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Button as Btn } from 'react-native-elements';
import { hp, wp } from './utils';
import * as Colors from './Colors';

const Button = ({
  pale,
  style,
  buttonStyle,
  disabled,
  disabledStyle,
  loading,
  onPress,
  title,
  titleStyle,
  icon,
  iconRight,
}) => {
  return (
    <Btn
      style={style}
      icon={icon}
      title={title}
      buttonStyle={[
        pale ? styles.paleButton : styles.button,
        style,
        buttonStyle,
      ]}
      loading={loading}
      titleStyle={[pale ? styles.paleTitle : styles.title, titleStyle]}
      disabled={disabled}
      disabledStyle={disabledStyle || styles.disabledStyle}
      disabledTitleStyle={styles.disabledTitleStyle}
      onPress={onPress}
      iconRight={iconRight}
    />
  );
};

export { Button };

const styles = StyleSheet.create({
  inactiveButton: {
    width: wp(325),
    height: hp(52),
    backgroundColor: Colors.Snow300,
    borderRadius: 5,
  },
  inactiveButtonTitle: {
    fontFamily: 'Graphik-Medium',
    fontSize: 16,
    color: Colors.Smoke400,
    marginTop: Platform.OS === 'android' ? -hp(7) : 0,
    marginLeft: hp(5),
  },
  button: {
    width: wp(300),
    height: hp(52),
    backgroundColor: Colors.LightBlue,
    borderStyle: 'solid',
    borderRadius: 4,
  },
  // paleButton: {
  //   width: wp(325),
  //   height: hp(52),
  //   backgroundColor: Colors.PaleBlue,
  //   borderStyle: 'solid',
  //   borderRadius: 4,
  // },
  title: {
    fontFamily: 'Graphik-Medium',
    fontSize: 20,
    color: Colors.White,
    marginTop: Platform.OS === 'android' ? -hp(7) : 0,
  },
  paleTitle: {
    fontFamily: 'Graphik-Medium',
    fontSize: 16,
    color: Colors.LightBlue,
    marginTop: Platform.OS === 'android' ? -hp(7) : 0,
  },
  // disabledStyle: {
  //   backgroundColor: Colors.InactiveBlue,
  // },
  disabledTitleStyle: {
    color: Colors.White,
  },
});
