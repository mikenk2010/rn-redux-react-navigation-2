import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import React from 'react';
import { connect } from 'react-redux';

import { UsersScreen } from '../usersTab/usersScreen.js';
import ConversationsScreen from '../conversationsTab/conversationsScreen.js';

const routeConfiguration = {
  ConversationsScreen: {screen: ConversationsScreen},
  UsersScreen: {screen: UsersScreen}

};

export const TabBarConfig = TabNavigator(routeConfiguration);

const mapStateToProps = (state) => {
  return {
    navigationState: state.containerTabBar
  }
}

class TabBar extends React.Component {
  render() {
    const { dispatch, navigationState } = this.props;
    return (
      <TabBarConfig
        navigation={
          addNavigationHelpers({
            dispatch,
            state: navigationState
          })
        }
      />
    );
  }
}

export const ContainerTabBar = connect(mapStateToProps)(TabBar);
