import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Home extends Component{
  static navigationOptions = {
    title :'Home'
  }
  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={{paddingTop: 50}}>
        <Text> Hello, Chat</Text>
        <Button
          title="Go to chat"
          onPress={() => navigate('Chat')}
         />
      </View>
    )
  }
}
