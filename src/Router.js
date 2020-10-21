import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Intro from './screens/Intro';
import Register from './screens/Register';
import Recordings from './screens/Recordings';
import Listen from './screens/Listen';

export default class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Scene key="intro" component={Intro} initial />
          <Scene key="register" component={Register} />
          <Scene key="recordings" component={Recordings} />
          <Scene key="listen" component={Listen} />
        </Scene>
      </Router>
    );
  }
}
