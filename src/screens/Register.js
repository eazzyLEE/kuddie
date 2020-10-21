import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Actions } from 'react-native-router-flux';
import { Input } from '../components/TextInput';
import { registerStyles as styles } from './styles';
import { Button } from '../components/Button';
import { Footer } from '../components/View';
import { showToast, BackIcon } from '../components';
import { savePhone, getPhone } from '../components/utils';

export default class Register extends Component {
  state = {
    phoneOne: '',
    phoneTwo: '',
    errorOne: false,
    errorTwo: false,
  };

  async componentDidMount() {
    const phone = await getPhone();
    const { phoneOne, phoneTwo } = phone;

    this.setState({ phoneOne, phoneTwo });
  }

  handleChange = (prop, value) => {
    this.setState({ [prop]: value }, this.onValidate);
  };

  onValidate = () => {
    this.setState({ errorOne: false, errorTwo: false });
  };

  handleButton = async () => {
    const { phoneOne, phoneTwo } = this.state;
    const phone = await getPhone();
    if (!phoneOne && !phoneTwo) {
      showToast('You need to enter at least one phone number', 'error');
    } else if (phoneOne.length !== 11) {
      this.setState({ errorOne: true });
    } else if (phoneTwo && phoneTwo.length !== 11) {
      this.setState({ errorTwo: true });
    } else if (
      this.props.update &&
      phone.phoneOne === phoneOne &&
      phone.phoneTwo === phoneTwo
    ) {
      showToast('Nothing to update', 'error');
    } else {
      this.setState({ loading: true });
      const phoneData = await savePhone(this.state);
      this.setState({ loading: false });
      if (phoneData) Actions.recordings({ type: 'reset' });
    }
  };

  render() {
    const { errorOne, errorTwo, phoneOne, phoneTwo } = this.state;
    const { update } = this.props;
    const headerText = update
      ? 'Update the phone numbers you would like to synchronize your voice recordings with'
      : 'Enter at least a phone number you would like to synchronize your voice recordings with';

    return (
      <>
        {/* <View style={styles.background}> */}
        <KeyboardAwareScrollView contentContainerStyle={styles.view}>
          {update && (
            <View style={styles.backButton}>
              <BackIcon />
            </View>
          )}
          <Text style={styles.headerText}>{headerText}</Text>
          <Input
            style={styles.leadInput}
            value={phoneOne}
            placeholder="Phone Number 1"
            onChangeText={(value) => this.handleChange('phoneOne', value)}
            error={errorOne}
            keyboardType="number-pad"
          />
          <Input
            style={styles.input}
            value={phoneTwo}
            placeholder="Phone Number 2"
            onChangeText={(value) => this.handleChange('phoneTwo', value)}
            error={errorTwo}
            keyboardType="number-pad"
          />
          <Button
            title={update ? 'Update' : 'Link & Opt-in'}
            style={styles.button}
            onPress={() => this.handleButton()}
          />
          <Footer />
        </KeyboardAwareScrollView>
      </>
      //  </View>
    );
  }
}
