import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ height: 200, width: 395, }}>
          <Image source={require('./Surat.png')}
            style={{ alignSelf: 'center', width, height: 140, resizeMode: 'contain', margin: 30 }} />
        </View>

        <View style={styles.btn_bar}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Place')}>
            <Image source={require('./Place.png')} style={{ width: 155, height: 135 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Hotel')}>
            <Image source={require('./Hotel.png')} style={{ width: 155, height: 135 }} />
          </TouchableOpacity>
        </View>

        <View style={styles.instructions}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Hospital')}>
            <Image source={require('./Hospital.png')} style={{ width: 155, height: 135 }} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.props.navigation.navigate('Airport')}>
            <Image source={require('./Airport.png')} style={{ width: 155, height: 135 }} />
          </TouchableOpacity>
        </View>
        <View style={{
          height: 30, width: 400,
          backgroundColor: '#996600'
        }}>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#FFFF99',

  },
  instructions: {
    flex: 1,
    flexDirection: "row",
    alignSelf: 'center',
    marginBottom: 0,

  },
  btn_bar: {
    flex: 1,
    flexDirection: "row",
    alignSelf: 'center',
    marginBottom: 0,
  },
});
