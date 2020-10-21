import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { introStyles as styles } from './styles';
import { Button } from '../components/Button';
import { getPhone } from '../components/utils';
import { Footer } from '../components/View';

const Intro = () => {
  const [phone, setPhone] = useState('');

  useEffect(() => {
    getPhone()
      .then((data) => setPhone(data))
      .catch(() => {});
    return () => {};
  }, []);

  const title = !phone ? 'Get Started' : 'Storytime';
  const handleButton = () =>
    !phone ? Actions.register() : Actions.recordings();
  console.log('init', phone);

  return (
    <View style={styles.background}>
      <Text style={styles.leadText}>Kuddie</Text>
      <Button
        title={title}
        style={styles.button}
        onPress={() => handleButton()}
      />
      <Footer />
    </View>
  );
};

export default Intro;
