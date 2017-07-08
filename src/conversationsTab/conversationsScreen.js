import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import {StackNavigator} from 'react-navigation'

import Home from "./Stacks/home.js";
import Chat from "./Stacks/chat.js";

export default Stack = StackNavigator({
  Home: {screen : Home},
  Chat: {screen: Chat}
})
