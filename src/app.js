/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';


import { ContainerTabBar } from './containerTabBar/containerTabBar.js';

export default class rn_test_bao extends Component {
  render() {
    return (
      <Provider store={store}>
        <ContainerTabBar/>
      </Provider>
    );
  }
}
