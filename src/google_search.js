import React, {useState} from 'react';
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
  Platform,
  Button,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SearchBar = () => {
  const [state, setState] = useState();
  const onSelected = data => {
    setState(data);
    AsyncStorage.setItem('search_item', JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_search}>
        <GooglePlacesAutocomplete
          fetchDetails={true}
          placeholder="Search"
          textInputProps={{placeholderTextColor: 'grey'}}
          onPress={(data, details = null) => {
            onSelected(details);
            // console.log(data, details);
          }}
          query={{
            key: 'AIzaSyBY67NzLA_3SXTC9tPimL1n5knBZcegCGI',
            language: 'th',
          }}
          styles={{
            textInput: styles.textInput,
            description: {color: '#000'},
            container: {
              height: 0,
              marginBottom: '-100%',
              zIndex: Platform.OS == 'ios' ? 1 : 1,
            },
          }}
          onFail={error => console.error(error)}
        />
        <ScrollView style={{width: '100%'}}>
          {state != null ? (
            <View
              style={{
                padding: 10,
                backgroundColor: 'rgb(2,119,202)',
                borderRadius: 10,
                // borderWidth: 0.5,
              }}>
              <View style={{flexDirection: 'row', marginBottom: 5}}>
                <Image
                  source={require('../assets/restaurant_image.jpeg')}
                  style={{width: '30%', height: 100, marginRight: 5}}
                />
                <View style={{flex: 1}}>
                  <Text style={styles.text}>
                    ชื่อร้าน : {state.name ?? '-'}
                  </Text>
                  <Text style={styles.text}>
                    ที่อยู่ : {state.formatted_address ?? '-'}
                  </Text>
                  <Text style={styles.text}>
                    เบอร์โทร : {state.international_phone_number ?? '-'}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.text}>เรตติ้ง : </Text>
                    <Text style={styles.text}>{state.rating ?? '-'}</Text>
                    <Image
                      source={require('../assets/star-icon.png')}
                      style={{width: 20, height: 20, marginLeft: 5}}
                    />
                  </View>
                  <Text style={styles.text}>
                    เว็บไซต์ : {state.website ?? '-'}
                  </Text>
                </View>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#eee',
    color: '#000',
    fontFamily: 'SukhumvitSet-Text',
  },
  container: {flex: 1, backgroundColor: '#fff'},
  container_search: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'auto',
    fontFamily: 'SukhumvitSet-Text',
  },
});

export default SearchBar;
