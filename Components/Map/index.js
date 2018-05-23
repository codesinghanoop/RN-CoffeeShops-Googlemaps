import React, {Component} from 'react';
import {
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import GetMapPolyline from '@helper';
import BottomContent from './BottomContent';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 20) / 3;

export default class Map extends Component {
  constructor (props) {
    super (props);
    this.state = {
      coords: [],
      visible: false,
      bounceValue: new Animated.Value (150),
    };
  }

  hideBottomContent = () => {
    this.setState ({
      visible: false,
    });
    Animated.spring (this.state.bounceValue, {
      toValue: 150,
      velocity: 3,
      tension: 2,
      friction: 8,
    }).start (() => this.state.bounceValue.setValue (150));
  };

  getPolyCoordinate = () => {
    const {state} = this.props.navigation;
    this.setState ({
      currentLat: 48.141302827293956,
      currentLng: 11.566543579101562,
    });
    const origin = '48.141302827293956' + ',' + '11.566543579101562';
    const destination = state.params.latitude + ',' + state.params.longitude;
    GetMapPolyline (origin, destination, data => {
      console.log ('the callback', data);
      this.setState ({
        coords: data,
      });
    });
  };
  componentDidMount () {}
  render () {
    console.log ('the data in map', this.props.screenProps);
    const {state} = this.props.navigation;
    const {screenProps} = this.props;
    const {imageUrl, name, distance, address} = state.params;
    return (
      <View style={styles.map}>
        <MapView
          region={{
            longitude: 11.566543579101562,
            latitude: 48.141302827293956,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          scrollEnabled={true}
          zoomEnabled={true}
          pitchEnabled={false}
          showsCompass={true}
          showsTraffic={true}
          showsUserLocation={true}
          toolbarEnabled={true}
          followsUserLocation={true}
          ref={map => {
            this.map = map;
          }}
          minZoomLevel={2}
          maxZoomLevel={20}
          rotateEnabled={false}
          moveOnMarkerPress={false}
        >
          <MapView.Marker.Animated
            coordinate={{
              longitude: 11.566543579101562,
              latitude: 48.141302827293956,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            pinColor="#2980b9"
            title="My Location"
          />
          {this.state.coords && this.state.coords.length
            ? <MapView.Polyline
                coordinates={this.state.coords}
                strokeColor="#d35400"
                fillColor="rgba(255,0,0,0.5)"
                strokeWidth={4}
                lineCap="round"
                lineJoin="round"
              />
            : null}

          <MapView.Marker.Animated
            coordinate={{
              latitude: state.params.latitude,
              longitude: state.params.longitude,
              latitudeDelta: 0.02,
              longitudeDelta: 0.02,
            }}
            onPress={e => {
              this.setState ({
                visible: true,
              });
              Animated.spring (this.state.bounceValue, {
                toValue: 0,
                velocity: 3,
                tension: 2,
                friction: 8,
              }).start (() => this.state.bounceValue.setValue (0));
            }}
            title={state.params.name}
          />
        </MapView>
        <BottomContent
          visible={this.state.visible}
          bounceValue={this.state.bounceValue}
          imageUrl={imageUrl}
          name={name}
          distance={distance}
          address={address}
          hideBottomContent={this.hideBottomContent}
          getPolyCoordinate={this.getPolyCoordinate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 150,
  },
});
