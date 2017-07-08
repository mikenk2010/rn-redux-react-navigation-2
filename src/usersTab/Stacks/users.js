import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class User extends Component{
  static navigationOptions = {
    title :'User'
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{paddingTop: 50}}>
        <Text> Hello, User</Text>
        <Button
          title="Go to profile"
          onPress={() => navigate('Profile')}
         />
      </View>
    )
  }
}
