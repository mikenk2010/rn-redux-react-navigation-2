import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

const profile = class Profile extends Component{
  static navigationOptions = {
    title :'User'
  }
  render(){
    console.log('this.state', this.props.tabBar);
    const { navigate } = this.props.navigation;
    return(
      <View style={{paddingTop: 50}}>
        <Text> Hello, Profile</Text>
        <Button
          title="Go to User"
          onPress={() => navigate('User')}
         />
      </View>
    )
  }
}

const mapStateToProps = (state) => (
  {tabBar : state.containerTabBar}
)

export default connect(mapStateToProps)(profile);
