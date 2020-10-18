import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Input } from '../components/TextInput';
import { registerStyles as styles } from './styles';
import { Button } from '../components/Button';
import { Footer } from '../components/View';
import { showToast } from '../components';

export default class Register extends Component {
  state = {
    phoneOne: '',
    phoneTwo: '',
  };

  handleChange = (prop, value) => {
    this.setState({ [prop]: value });
  };

  handleButton = () => {
    const { phoneOne, phoneTwo } = this.state;
    if (!phoneOne && !phoneTwo) {
      showToast('You need to enter at least one phone number', 'error');
    }
  };

  render() {
    const { phoneOne, phoneTwo } = this.state;

    return (
      <View style={styles.background}>
        <KeyboardAwareScrollView contentContainerStyle={styles.view}>
          <Text style={styles.backButton}> Back </Text>
          <Input
            style={styles.leadInput}
            value={phoneOne}
            placeholder="Phone Number 1"
            onChangeText={(value) => this.handleChange('phoneOne', value)}
          />
          <Input
            style={styles.input}
            value={phoneTwo}
            placeholder="Phone Number 2"
            onChangeText={(value) => this.handleChange('phoneTwo', value)}
          />
          <Button
            title={'Link & Opt-in'}
            style={styles.button}
            onPress={() => this.handleButton()}
          />
          <Footer />
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
