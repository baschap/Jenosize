import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import SearchBar from './google_search';
import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Map = () => {
  useEffect(() => {
    AsyncStorage.setItem('tracking', 'Map screen');
  }, []);
  return (
    <View style={{flex: 1}}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 13.893974,
          longitude: 100.516317,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{latitude: 13.89397, longitude: 100.516317}}
          title={'Jenosize'}
          onPress={() =>
            Platform.OS == 'ios'
              ? Linking.openURL('http://maps.apple.com/?q=JENOSIZE')
              : Platform.OS == 'android'
              ? Linking.openURL('geo:13.89397,100.516317?q=Jenosize')
              : null
          }
          // description={marker.description}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});

export default Map;
