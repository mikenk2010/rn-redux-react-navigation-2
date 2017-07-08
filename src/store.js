import { createStore, combineReducers, applyMiddleware } from 'redux';

import { TabBarConfig } from './containerTabBar/containerTabBar.js';
import { UsersStackNavigatorConfig, UsersScreen } from './usersTab/usersScreen.js';

import { createLogger } from 'redux-logger';


export default createStore(
    combineReducers({
      containerTabBar: (state, action) =>
        TabBarConfig.router.getStateForAction(action, state),
      usersTab: (state, action) =>
        UsersStackNavigatorConfig.router.getStateForAction(action, state)
    },
    applyMiddleware(createLogger())
  )
)
