import React from 'react';
import {
  Image,
  Dimensions,
  TouchableOpacity,
  View,
  StyleSheet,
  Animated,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Covert from '@helper/calculateDistance';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 20) / 3;

const BottomContent = ({
  visible,
  bounceValue,
  imageUrl,
  name,
  distance,
  address,
  hideBottomContent,
  getPolyCoordinate,
}) => {
  if (!visible) return null;
  return (
    <Animated.View
      style={[
        styles.bottomContainer,
        {
          transform: [
            {
              translateY: bounceValue,
            },
          ],
        },
      ]}
    >
      <View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 90, width: itemWidth - 2}}
            source={{uri: imageUrl}}
          />
          <View>
            <Text style={{marginLeft: 15}}>
              {name}
            </Text>
            <Text
              style={{
                marginLeft: 15,
                color: '#87ceeb',
                marginTop: 5,
                textDecorationLine: 'underline',
              }}
            >
              {Covert (distance)}
            </Text>
            <Text
              style={{
                marginLeft: 15,
                color: '#87ceeb',
                marginTop: 5,
                textDecorationLine: 'underline',
              }}
            >
              {address[0]}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          position: 'absolute',
          top: 10,
          right: 0,
          alignItems: 'center',
        }}
        onPress={() => hideBottomContent ()}
      >
        <Icon
          name="times-circle"
          style={{
            backgroundColor: 'transparent',
          }}
          size={25}
          color="gray"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          width: width - 40,
          borderRadius: 15,
          backgroundColor: 'blue',
          alignSelf: 'center',
          bottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}
        onPress={() => getPolyCoordinate ()}
      >
        <Text style={{color: 'white'}}>
          {' '}{'Directions'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

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

export default BottomContent;
