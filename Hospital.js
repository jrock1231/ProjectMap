import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Alert, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import hp from './Hospital.json'

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showmodal: false, showmodal1: false,
      text: '', name1: '', location: '', number: '', number1: '', Web: '', Web1: '', form: '', Map: '', Map1: '', Taxi: '', Bus: '', Tuk: '', Van: '', Train: '', Icon1: '', Icon2: ''
    };
  }
  state = {}

  openDialog(show) {
    this.setState({ showDialog: show })
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ height: 220, width: 375 }}>

          <View>
            <Image source={require('./A1.png')}
              style={{ position: 'absolute', alignSelf: 'center', width, height: 120, resizeMode: 'contain', margin: 120 }} />
            <Image source={require('./s2.png')}
              style={{ alignSelf: 'center', width, height: 150, resizeMode: 'contain', margin: 20 }} />
            <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: -27, color: 'black', fontSize: 25 }}>
              โรงพยาบาล</Text>
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

        <View style={{ height: 295, width: 320, alignSelf: 'center', backgroundColor: '#FFFF99' }}>
          <ScrollView>
            <FlatList
              data={hp}
              renderItem={({ item }) =>
                <TouchableOpacity style={styles.welcome} onPress={() => this.setState({
                  showmodal: true,
                  name1: item.name1,
                  location: item.location,
                  number: item.number,
                  number1: item.number1,
                  Icon1: item.Icon1,
                  Icon2: item.Icon2,
                  Web: item.Web,
                  Web1: item.Web1,
                  form: item.form,
                  Map: item.Map,
                  Map1: item.Map1,
                  Taxi: item.Taxi,
                  Bus: item.Bus,
                  Tuk: item.Tuk,
                  Van: item.Van,
                  Train: item.Train,

                })}>

                  <View style={{ justifyContent: 'space-between', flexDirection: "row", margin: 7.5 }}>
                    <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 18, color: 'black' }}>
                      {item.name}</Text>

                    <Icon name="chevron-right" color="black" size={30} margin='15' />
                  </View>

                </TouchableOpacity>
              } />
          </ScrollView>
          <Modal
            visible={this.state.showmodal}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal: false })}
            animationType={'fade'}
          >
            <TouchableHighlight onPress={() => this.setState({ showmodal: false })}
              style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
              <View></View>
            </TouchableHighlight>

            <View style={{ position: 'absolute', backgroundColor: '#f8f3ed', height: 570, width: 375, alignSelf: 'center' }}>

              <View style={{ height: 190, width: 375 }}>
                <View>
                  <Image source={require('./A1.png')}
                    style={{ position: 'absolute', alignSelf: 'center', width, height: 130, resizeMode: 'contain', margin: 68 }} />
                  <Text style={{ position: 'absolute', alignSelf: 'center', resizeMode: 'contain', margin: 110, color: 'black', fontSize: 18 }}>
                    โรงพยาบาล </Text>
                  <Image source={this.state.form}
                    style={{ alignSelf: 'center', width, height: 105, resizeMode: 'contain', margin: 15 }} />
                  <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: -5, color: 'black', fontSize: 18 }}>
                    {this.state.name1} </Text>
                </View>

              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                style={{ position: 'absolute', margin: 10 }}>
                <Icon name="angle-left" color="black" size={40} />
              </TouchableOpacity>


              <ScrollView style={{ alignSelf: 'center', width: 360 }}>
                <View style={{ alignSelf: 'center', height: 170, width: 350 }}>
                  <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                    <Icon name="home" color="black" size={25} />
                    <Text style={{ color: '#000033', fontSize: 17, marginBottom: 15 }}>{this.state.location}</Text>
                  </View>

                  <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                    <Icon name="phone" color="black" size={25} />
                    <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.number)} >
                      <Text style={{ color: this.state.Icon1, fontSize: 17, marginBottom: 15 }}> {this.state.number1}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                    <Icon name="globe" color="black" size={25} />
                    <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.Web)} >
                      <Text style={{ color: this.state.Icon2, fontSize: 17, marginBottom: 15 }}>{this.state.Web1}</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.instructions}>
                  <TouchableOpacity onPress={() => this.setState(
                    Alert.alert(
                      'รายละเอียด',
                      this.state.Taxi
                    ))}>
                    <Image source={require('./Taxi.png')} style={{ margin: 3, width: 70, height: 65 }} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState(
                    Alert.alert(
                      'รายละเอียด',
                      this.state.Bus
                    ))}>
                    <Image source={require('./Bus.png')} style={{ margin: 3, width: 65, height: 65 }} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState(
                    Alert.alert(
                      'รายละเอียด',
                      this.state.Tuk
                    ))}>
                    <Image source={require('./Tuk.png')} style={{ margin: 3, width: 65, height: 65 }} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState(
                    Alert.alert(
                      'รายละเอียด',
                      this.state.Van
                    ))}>
                    <Image source={require('./Van.png')} style={{ margin: 3, width: 65, height: 65 }} />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.setState(
                    Alert.alert(
                      'รายละเอียด',
                      this.state.Train
                    ))}>
                    <Image source={require('./Train.png')} style={{ margin: 3, width: 51, height: 65 }} />
                  </TouchableOpacity>
                </View>

                <View style={{
                  height: 40, alignSelf: 'center'
                }}>
                  <TouchableOpacity style={{ margin: 15 }} onPress={() => Linking.openURL(this.state.Map)} >
                    <Text style={{ color: 'blue', fontSize: 17 }}>ดูบน Google Maps</Text>
                  </TouchableOpacity>
                </View>

                <View style={{
                  height: 220, width: 335, alignSelf: 'center',
                  marginBottom: 25
                }}>
                  <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.Map)} >
                    <Image source={this.state.Map1} style={{ alignSelf: 'center', margin: 15, height: 200, width: 335, borderRadius: 5 }} />
                  </TouchableOpacity>
                </View>

              </ScrollView>
            </View>
          </Modal>
        </View>
      </View >
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
    height: 42,
    width: 320,
    alignSelf: 'center',
    margin: 2.5,
    backgroundColor: '#996600',
    borderRadius: 5
  },
  instructions: {
    flex: 1,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'flex-start',
    flexWrap: "wrap",
    alignSelf: 'center',
    backgroundColor: '#009999',
    borderRadius: 10

  },
});
