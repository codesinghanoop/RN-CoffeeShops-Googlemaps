import React, {Component} from 'react';
import {
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import GridViewComponent from './gridView';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 20) / 3;
import MapView, {Marker} from 'react-native-maps';

export default class GridView extends Component {
  render () {
    const {screenProps} = this.props;
    return (
      <View>
        <GridViewComponent
          data={screenProps.dataManger}
          action={screenProps.action}
        />
      </View>
    );
  }
}
