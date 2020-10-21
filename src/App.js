import React, { Component } from 'react';
import { setCustomText } from 'react-native-global-props';
import { RootSiblingParent } from 'react-native-root-siblings';
import Router from './Router';
import { Black } from './components';

const customTextProps = {
  style: {
    fontFamily: 'Graphik-Medium',
    fontSize: 14,
    color: Black,
  },
};

setCustomText(customTextProps);

export default class App extends Component {
  render() {
    return (
      <RootSiblingParent>
        <Router />
      </RootSiblingParent>
    );
  }
}
