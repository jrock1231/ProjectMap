import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Alert, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import hp_th from './Hospital_th.json'
import hp_en from './Hospital_en.json'

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showmodal: false, showmodal1: false,
      text: '', name: '', name1: '', location: '', number: '', Web: '', Web1: '', form: '', Map: '', Map1: '', Taxi: '', Bus: '', Tuk: '', Van: '', Train: '', Icon1: '', Icon2: ''
    };
  }
  state = {}

  openDialog(show) {
    this.setState({ showDialog: show })
  }
  chooseLang(lang) {
    global.lang = lang;
    AsyncStorage.setItem('lang', lang, () => this.setState({ langModal: false }))
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ height: 70, width: 375, backgroundColor: '#F8F8FF' }}>
          <Text style={{ alignSelf: 'center', margin: 20, color: 'black', fontSize: 25 }}>
            {global.lang == 'th' ? <Text>โรงพยาบาล</Text> : <Text>Hospital</Text>}</Text>

          <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.props.navigation.goBack()}>
            <Icon name="angle-left" color="black" size={40} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 150, width: 375 }}>
          <View style={{ position: 'absolute', backgroundColor: 'red', alignSelf: 'center', width: 90, height: 90, borderRadius: 100, margin: 22 }}>
          </View>
          <Image source={require('./AppPage/กรอบ.png')}
            style={{ position: 'absolute', alignSelf: 'center', width, height: 135, resizeMode: 'contain', margin: 10 }} />

          <View style={{ position: 'absolute', width: 375, height: 110, margin: 1 }}>
            <Image source={require('./AppPage/โรงพยาบาล.png')}
              style={{ width: 65, height: 65, margin: 34, alignSelf: 'center' }} />
          </View>
        </View>

        <View style={{ height: 40 }}>
          <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: 'gray', borderWidth: 2 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder='ค้นหา'
          />
          <View style={{ position: 'absolute', margin: 8, alignSelf: 'flex-end', width: 62 }}>
            <Icon name="search" color="black" size={20} />
          </View>
        </View>

        <View style={{ height: 295, width: 320, alignSelf: 'center', backgroundColor: 'ADD8E6' }}>
          <ScrollView>
            {/* {global.lang == 'en' || hp_th.filter(hp => { return hp.name.indexOf(this.state.text) > -1 })[0] || this.state.text == '' ?
              null :
              <Text>ไม่พบ '{this.state.text}'</Text>
            }
            {!global.lang || global.lang == 'th' || hp_en.filter(hp => { return hp.name.indexOf(this.state.text) > -1 })[0] || this.state.text == '' ?
              null :
              <Text>Not found '{this.state.text}'</Text>
            } */}

            {!global.lang || global.lang == 'th' ?
              hp_th.filter(hp => { return hp.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                <Text>ไม่พบ '{this.state.text}'</Text>
                :
                null
              :
              hp_en.filter(hp => { return hp.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                <Text>Not found '{this.state.text}'</Text>
                :
                null
            }

            {console.log(hp_th.filter(hp => { return hp.name.indexOf(this.state.text) > -1 }))}
            <FlatList
              data={global.lang == 'th' ? hp_th : hp_en}
              extraData={this.state.text}
              renderItem={({ item }) =>
                <View>
                  {item.name.indexOf(this.state.text) > -1 ?
                    <TouchableOpacity style={styles.welcome} onPress={() => this.setState({
                      showmodal: true,
                      name: item.name,
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

                        <Icon name="chevron-right" color="#F8F8FF" size={22} margin='25' />
                      </View>

                    </TouchableOpacity>
                    :
                    null
                  }

                </View>
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

            <View style={{ position: 'absolute', backgroundColor: '#E0FFFF', height: 570, width: 375, alignSelf: 'center' }}>

              <View style={{ height: 70, width: 375, backgroundColor: '#F8F8FF' }}>
                <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: 24, color: 'black', fontSize: 21 }}>
                  {this.state.name}</Text>
                <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.setState({ showmodal: false })}>
                  <Icon name="angle-left" color="black" size={40} />
                </TouchableOpacity>
              </View>
              <View style={{ height: 150, width: 375 }}>
                <Image source={this.state.form}
                  style={{ alignSelf: 'center', width, height: 135, resizeMode: 'contain', margin: 10 }} />
              </View>

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
    backgroundColor: '#ADD8E6',
  },
  welcome: {
    height: 42,
    width: 320,
    alignSelf: 'center',
    margin: 2.5,
    backgroundColor: '#48D1CC',
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
    backgroundColor: '#AFEEEE',
    borderRadius: 10

  },
});
