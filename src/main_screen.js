import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
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
} from 'react-native';
import MapView from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
const onClickSearch = navigation => {
  AsyncStorage.setItem('tracking', 'Click search restaurant');
  navigation.navigate('SearchRestaurantScreen');
};
const onClickMap = navigation => {
  AsyncStorage.setItem('tracking', 'Click open map Jenosize');
  navigation.navigate('Map');
};

const Main = () => {
  const navigation = useNavigation();
  useEffect(() => {
    AsyncStorage.setItem('tracking', 'Open app');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 100,
        backgroundColor: '#fff',
      }}>
      <View style={{flex: 3}}>
        <Image
          source={require('../assets/logo.png')}
          style={{marginTop: 200}}></Image>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClickSearch(navigation)}>
          <Text style={styles.text}>ค้นหาร้านอาหาร</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onClickMap(navigation)}>
          <Text style={styles.text}>แผนที่บริษัท Jenosize</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'rgb(2,119,202)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'SukhumvitSet-Text',
  },
  line: {
    marginTop: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Main;
