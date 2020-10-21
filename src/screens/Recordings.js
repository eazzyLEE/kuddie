import React, { Component } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Actions } from 'react-native-router-flux';
import { getPhone } from '../components/utils';
import { recordingStyles as styles } from './styles';
import { ForwardIcon, SettingsBlue } from '../../assets/svgs';

export default class Recordings extends Component {
  state = {
    phoneOne: '',
    phoneTwo: '',
    phoneData: [],
  };

  userRef = firestore().collection('users');

  async componentDidMount() {
    const phone = await getPhone();
    const { phoneOne, phoneTwo } = phone;
    this.setState({ phoneOne, phoneTwo });
    let phoneNumber = phoneOne.split('');
    phoneNumber.splice(0, 1, '+234');
    phoneNumber = phoneNumber.join('');

    this.userRef
      .where('phone_number', '==', phoneNumber)
      .onSnapshot((querySnapshot) => {
        const newEntities = [];
        querySnapshot.forEach((doc) => {
          const entity = doc.data();
          entity.id = doc.id;
          newEntities.push(entity);
        });
        this.setState({ phoneData: newEntities });
      });
  }

  render() {
    console.log('phoneD', this.state.phoneData);
    const renderEntity = ({ item }) => {
      // console.log('item', item);
      return (
        <TouchableOpacity
          style={styles.entityContainer}
          onPress={() => Actions.listen({ data: item })}>
          <Text style={styles.entityText}>Voice Recording One</Text>
          <ForwardIcon />
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.background}>
        <View style={styles.mainRow}>
          <Text style={styles.helloText}>Hey Buddie!</Text>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={() => Actions.register({ update: true })}>
            <SettingsBlue />
          </TouchableOpacity>
        </View>
        <Text style={styles.subText}>Here are your latest recordings</Text>

        <FlatList
          style={styles.listView}
          data={this.state.phoneData}
          renderItem={renderEntity}
          keyExtractor={(item) => item.id}
          removeClippedSubviews={true}
        />
        {/* </View> */}
      </View>
    );
  }
}
