import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { BackIconAndroid } from '../../assets/svgs';

const BackIcon = ({ onPress, style }) => {
  // let backIcon;
  // if (color) {
  //   backIcon =
  //     Platform.OS === 'ios' ? (
  //       <BackIconIOSBlack fill={setColor ? color : null} />
  //     ) : (
  //       <BackIconAndroidBlack fill={setColor ? color : null} />
  //     );
  // } else {
  //   backIcon = Platform.OS === 'ios' ? <BackIconIOS /> : <BackIconAndroid />;
  // }
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={styles.iconView}
        onPress={onPress || (() => Actions.pop())}>
        <BackIconAndroid />
      </TouchableOpacity>
    </View>
  );
};

export { BackIcon };

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('11%'),
    marginTop: Platform.OS === 'ios' ? hp('4%') : hp('1.0%'),
    marginLeft: wp('1.5%'),
  },
  iconView: {
    alignItems: 'center',
    width: wp('11%'),
    height: wp('11%'),
    borderRadius: wp('11%') / 2,
    justifyContent: 'center',
  },
});
