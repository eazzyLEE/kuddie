import { StyleSheet } from 'react-native';
import { Black, Smoke400, White, DarkBlue, Snow300 } from '../components';
import { hp, wp } from '../components/utils';

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
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: wp(10),
  },
  headerText: {
    marginTop: hp(45),
    textAlign: 'center',
    width: wp(280),
    lineHeight: 25,
  },
  leadInput: {
    marginTop: hp(159),
  },
  input: {
    marginTop: hp(20),
  },
  button: {
    marginTop: hp(40),
  },
});

export const recordingStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  helloText: {
    color: Black,
    fontSize: 24,
    fontFamily: 'Graphik-Regular',
    // marginTop: hp(20),
    alignSelf: 'flex-start',
    marginLeft: wp(25),
  },
  subText: {
    color: Black,
    fontSize: 18,
    fontFamily: 'Graphik-Regular',
    marginTop: hp(10),
    alignSelf: 'flex-start',
    marginLeft: wp(25),
  },
  listView: {
    marginTop: hp(40),
    height: hp(200),
  },
  entityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(300),
    height: hp(52),
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Smoke400,
    backgroundColor: DarkBlue,
    elevation: 6,
    // justifyContent: 'center',
    paddingLeft: wp(20),
    paddingRight: wp(20),
    marginBottom: hp(10),
  },
  entityText: {
    color: White,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(20),
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: wp(25),
  },
  settingsButton: {
    backgroundColor: Snow300,
    width: wp(40),
    height: wp(40),
    borderRadius: wp(40) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const listenStyles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  progress: {
    height: 1,
    width: '90%',
    marginTop: 10,
    flexDirection: 'row',
  },
  play: {
    width: wp(77),
    height: hp(73),
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#EDEDED',
  },
  imageContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlsContainer: {
    flex: 0.45,
    justifyContent: 'flex-start',
  },
  albumImage: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    borderRadius: 5,
  },
  progressBar: {
    height: 20,
    paddingBottom: 90,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 14,
  },
  playButton: {
    alignSelf: 'center',
  },
});
