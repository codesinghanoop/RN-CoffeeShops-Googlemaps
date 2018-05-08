/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry,
  View,
  Text,
  ActivityIndicator,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {
  NavigationActions,
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import Styles from './Style/common';
import HomeScreen from '@home';
import MapScreen from '@map';

var DataManager = require ('NativeModules').DataManager;
const AppRouter = StackNavigator ({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Cafe',
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: {
      title: 'Map',
    },
  },
});

export default class App extends Component<Props> {
  constructor (props) {
    super (props);
    this.state = {
      dataManger: DataManager.businesses,
      action: this._navigateTo,
    };
  }
  render () {
    return (
      <View style={Styles.mainContainer}>
        <StatusBar hidden={false} />
        <View style={Styles.contentContainer}>
          <AppRouter
            screenProps={this.state}
            ref={nav => {
              this.navigator = nav;
            }}
          />
        </View>
      </View>
    );
  }

  _navigateTo = (routeName: string, screenProps: object) => {
    console.log ('Going to Route:' + routeName);
    screenProps = {...this.state, ...screenProps};

    if (routeName == 'back') {
      actionToDispatch = NavigationActions.back ();
    } else {
      actionToDispatch = NavigationActions.navigate ({
        routeName: routeName,
        params: screenProps,
      });
    }
    this.navigator.dispatch (actionToDispatch);
  };
}
