/**
 * This is the code that will run tied to the player.
 *
 * The code here might keep running in the background.
 *
 * You should put everything here that should be tied to the playback but not the UI
 * such as processing media buttons or analytics
 */

import TrackPlayer from 'react-native-track-player';

// const Player = async () => {
//   TrackPlayer.addEventListener('remote-play', () => {
//     TrackPlayer.play();
//   });

//   TrackPlayer.addEventListener('remote-pause', () => {
//     TrackPlayer.pause();
//   });

//   TrackPlayer.addEventListener('remote-next', () => {
//     TrackPlayer.skipToNext();
//   });

//   TrackPlayer.addEventListener('remote-previous', () => {
//     TrackPlayer.skipToPrevious();
//   });

//   TrackPlayer.addEventListener('remote-stop', () => {
//     TrackPlayer.destroy();
//   });
// };

// const Player = () => {
module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener('remote-pause', () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener('remote-jump-forward', async () => {
    let newPosition = await TrackPlayer.getPosition();
    const duration = await TrackPlayer.getDuration();
    newPosition += 10;
    if (newPosition > duration) {
      newPosition = duration;
    }
    TrackPlayer.seekTo(newPosition);
  });

  TrackPlayer.addEventListener('remote-jump-backward', async () => {
    let newPosition = await TrackPlayer.getPosition();
    newPosition -= 10;
    if (newPosition < 0) {
      newPosition = 0;
    }
    TrackPlayer.seekTo(newPosition);
  });
};

// export default Player;
