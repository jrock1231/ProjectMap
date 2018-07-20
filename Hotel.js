import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Dialog
} from 'react-native-simple-dialogs'
import ho from './Hotel.json'

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showmodal: false,
      text: ''
    };
  }
  state = {}

  openDialog(show) {
    this.setState({ showDialog: show })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{
          height: 220, width: 375
        }}>

          <View style={{}}>
            <Image source={require('./A1.png')}
              style={{ position: 'absolute', alignSelf: 'center', width, height: 120, resizeMode: 'contain', margin: 120 }} />
            <Image source={require('./รร.png')}
              style={{ alignSelf: 'center', width, height: 145, resizeMode: 'contain', margin: 20 }} />
            <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: -22, color: 'black', fontSize: 25 }}>
              โรงแรม</Text>
            <TouchableOpacity style={{ position: 'absolute', margin: 10 }} onPress={() => this.props.navigation.goBack()}>
              <Icon name="angle-left" color="black" size={40} />
            </TouchableOpacity>
          </View>

        </View>

        <View style={{ height: 50 }}>

          <TextInput style={{ height: 40, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: 'gray', borderWidth: 2 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder='ค้นหา'

          />

          <View style={{ position: 'absolute', margin: 8, alignSelf: 'flex-end', width: 62 }}>
            <Icon name="search" color="black" size={20} />
          </View>
        </View>

        <View style={{
          height: 295, width: 320, alignSelf: 'center',
          backgroundColor: '#FFFF99'
        }}>
          <ScrollView>
            <FlatList
              data={ho}
              renderItem={({ item }) =>
                <TouchableOpacity style={{ height: 42, width: 320, alignSelf: 'center', margin: 2.5, backgroundColor: '#996600', borderRadius: 5 }} onPress={() => this.props.navigation.navigate(item.Hotel)} >

                  <View style={{ flexDirection: "row", margin: 0 }}>

                    <View style={{ height: 42, flex: 1.8, margin: 8 }}>
                      <Text style={{ fontSize: 18, color: 'black' }}>
                        {item.name}</Text>
                    </View>

                    <View style={{ flexDirection: 'column', justifyContent: 'center', height: 42, flex: 0.2 }}>
                      <Icon name="chevron-right" color="black" size={30} margin='15' />
                    </View>
                  </View>

                </TouchableOpacity>
              } />
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#FFFF99',
  },
  welcome: {
    height: 80,
    width: 290,
    alignSelf: 'center',
    margin: 2.5,
    backgroundColor: '#996600',
    borderRadius: 5
  },
  instructions: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    marginBottom: 10,


  },
});
