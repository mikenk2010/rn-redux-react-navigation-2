import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import User from './Stacks/users.js';
import Profile from './Stacks/profile.js';



export const UsersStackNavigatorConfig = StackNavigator(
  {
    User : {screen : User},
    Profile : {screen : Profile}
  },
  {
    initialRouteName: 'User'
  }
);

const mapStateToProps = (state) => {
  return {
    navigationState: state.usersTab
  }
}

class UsersTab extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <UsersStackNavigatorConfig
        navigation={addNavigationHelpers({
          dispatch,
          state: navigationState
        })
      }
      />
    );
  }
}

export const UsersScreen = connect(mapStateToProps)(UsersTab);
