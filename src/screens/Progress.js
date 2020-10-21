import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import TrackPlayer, {
  ProgressComponent,
  getState,
  useProgress,
} from 'react-native-track-player';

const Progress = () => {
  console.log('UP', useProgress());
  console.log('UST', getState());
  return (
    <View>
      <View style={styles.container}></View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 30,
    backgroundColor: 'red',
  },
});

// class ProgressBar extends ProgressComponent {
//   render() {
//     // const position = formatTime(Math.floor(this.state.position));
//     // const duration = formatTime(Math.floor(this.state.duration));
// ![IMG_7519](https://user-images.githubusercontent.com/1913797/77069052-b6126780-6a0d-11ea-9467-23d39bcd715f.png)
// ![IMG_7519](https://user-images.githubusercontent.com/1913797/77069086-c7f40a80-6a0d-11ea-91d2-daedcb33613c.png)

//     // const info = position + ' / ' + duration;
//     //
//     // let progress = this.getProgress() * 100;
//     // let buffered = this.getBufferedProgress() * 100;
//     //
//     // console.log('Progress - '+progress)
//     // console.log('Buffered - '+buffered)

//     return(
//       <View style={styles.container}>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     width: 300,
//     height: 30,
//     backgroundColor: 'red'
//   }
// })

// module.exports = ProgressBar;
