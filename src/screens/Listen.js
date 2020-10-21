import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import TrackPlayer, {
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
import {
  useTrackPlayerEvents,
  useTrackPlayerProgress,
} from 'react-native-track-player/lib/hooks';
import Slider from '@react-native-community/slider';
import { listenStyles as styles } from './styles';
// import { playIcon } from '../../assets/images';
import { Button, DarkBlue, BackIcon } from '../components';

const Listen = (props) => {
  const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const { position, duration } = useTrackPlayerProgress(150);

  const trackObject = {
    id: props.data.id,
    url: props.data.media_url,
    type: 'default',
    title: 'My Title',
    album: 'My Album',
    artist: 'Rohan Bhatia',
    artwork: 'https://picsum.photos/250',
  };

  const trackPlayerInit = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add(trackObject);
    TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_JUMP_FORWARD,
        TrackPlayer.CAPABILITY_JUMP_BACKWARD,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
      ],
    });
    return true;
  };

  useEffect(() => {
    const startPlayer = async () => {
      const isInit = await trackPlayerInit();
      setIsTrackPlayerInit(isInit);
    };
    startPlayer();
  }, []);

  useEffect(() => {
    if (!isSeeking && position && duration) {
      setSliderValue(position / duration);
    }
  }, [position, duration]);

  useTrackPlayerEvents([TrackPlayerEvents.PLAYBACK_STATE], (event) => {
    if (event.state === STATE_PLAYING) {
      setIsPlaying(true);
    } else {
      setIsPlaying(false);
    }
  });

  const onButtonPressed = () => {
    if (!isPlaying) {
      TrackPlayer.play();
      setIsPlaying(true);
    } else {
      TrackPlayer.pause();
      setIsPlaying(false);
    }
  };

  const slidingStarted = () => {
    setIsSeeking(true);
  };

  const slidingCompleted = async (value) => {
    await TrackPlayer.seekTo(value * duration);
    setSliderValue(value);
    setIsSeeking(false);
  };
  console.log('pp', isPlaying);

  return (
    // <View style={styles.background}>
    //   <Text>Hi Friend, </Text>
    //   <TouchableOpacity onPress={() => onButtonPressed()}>
    //     <Image source={playIcon} style={styles.play} resizeMode="contain" />
    //   </TouchableOpacity>
    //   <Slider
    //     style={{ width: 400, height: 40 }}
    //     minimumValue={0}
    //     maximumValue={1}
    //     value={sliderValue}
    //     minimumTrackTintColor="#111000"
    //     maximumTrackTintColor="#000000"
    //     onSlidingStart={slidingStarted}
    //     onSlidingComplete={slidingCompleted}
    //   />
    // </View>
    <View style={styles.mainContainer}>
      <BackIcon />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: trackObject.artwork,
          }}
          resizeMode="contain"
          style={styles.albumImage}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.songTitle}>{trackObject.title}</Text>
        <Text style={styles.artist}>{trackObject.artist}</Text>
      </View>
      <View style={styles.controlsContainer}>
        <Slider
          style={styles.progressBar}
          minimumValue={0}
          maximumValue={1}
          value={sliderValue}
          minimumTrackTintColor={DarkBlue} // "#111000"
          maximumTrackTintColor="#000000"
          onSlidingStart={slidingStarted}
          onSlidingComplete={slidingCompleted}
          thumbTintColor={DarkBlue} // "#000"
        />
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={onButtonPressed}
          style={styles.playButton}
          disabled={!isTrackPlayerInit}
          color="#000000"
        />
      </View>
    </View>
  );
};

export default Listen;
