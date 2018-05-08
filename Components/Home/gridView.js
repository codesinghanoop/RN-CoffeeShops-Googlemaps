import React, {Component} from 'react';
import {Image, Dimensions, TouchableOpacity, View, Text} from 'react-native';
import Grid from 'react-native-grid-component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Covert from '@helper/calculateDistance';

const {height, width} = Dimensions.get ('window');
const itemWidth = (width - 20) / 3;

const GridView = ({data, action}) => (
  <View style={{margin: 10, height}}>
    <Grid
      style={{}}
      renderItem={(data, i) => {
        return (
          <TouchableOpacity
            key={i}
            onPress={() =>
              action ('Map', {
                longitude: data.coordinates.longitude,
                latitude: data.coordinates.latitude,
                name: data.name,
                imageUrl: data.image_url,
                distance: data.distance,
                address: data.display_address,
              })}
          >
            <View
              key={i}
              style={{height: 120, width: itemWidth, flexDirection: 'column'}}
            >
              <Image
                style={{height: 50, width: itemWidth - 2}}
                key={i}
                source={{uri: data.image_url}}
              />
              <View>
                <Text style={{fontSize: 10, color: 'grey'}}>{data.name}</Text>
                <Text style={{fontSize: 8}} note>{Covert (data.distance)}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                    justifyContent: 'space-between',
                  }}
                >
                  <Text style={{fontSize: 8, color: 'orange'}}>
                    {data.is_closed ? 'Closed' : 'Open now'}{' '}
                  </Text>
                  <View style={{flexDirection: 'row'}}>
                    <Icon
                      name="star"
                      style={{fontSize: 10, color: 'orange', marginRight: 5}}
                    />
                    <Text
                      style={{fontSize: 8, color: 'orange', marginRight: 3}}
                    >
                      {data.rating}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
      data={data}
      itemsPerRow={2}
    />
  </View>
);

export default GridView;
