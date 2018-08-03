import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Dimensions, Animated, Modal, TouchableHighlight, Text, AsyncStorage, BackHandler } from 'react-native';

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
  constructor() {

    super();

    this.state = {
      isChoosed: false,
      langModal: false

    };
  }

  componentDidMount() {
    AsyncStorage.getItem('lang').then((lang) => {
      if (!lang) {
        global.lang = 'en'
        this.forceUpdate()
      }

      else {
        global.lang = lang
        this.forceUpdate()
      }
    })

    BackHandler.addEventListener('hardwareBackPress', () => {
      this.back()
      return true
    })
  }

  chooseLang(lang) {
    global.lang = lang;
    AsyncStorage.setItem('lang', lang, () => this.setState({ langModal: false }))
  }

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

        <TouchableOpacity style={styles.flagBtn} onPress={() => !this.state.isChoosed ? this.setState({ langModal: true }) : null}>
          {
            global.lang == 'en' ?
              <Animated.Image source={require('./en.jpg')} style={[styles.flag, { opacity: this.state.itemCenterOpacity }]} />
              :
              <Animated.Image source={require('./th.png')} style={[styles.flag, { opacity: this.state.itemCenterOpacity }]} />
          }
        </TouchableOpacity>

        <Modal
          animationType={"fade"}
          transparent={true}
          visible={this.state.langModal}
          onRequestClose={() => { this.setState({ langModal: false }) }}
        >
          <TouchableHighlight onPress={() => this.setState({ langModal: false })} style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}><View></View></TouchableHighlight>
          <View style={{ backgroundColor: '#fff', position: 'absolute', flex: 1, alignSelf: 'center', marginTop: 200, borderRadius: 10, paddingVertical: 5 }}>
            <Text style={{ textAlign: 'center', color: 'black', fontSize: 20, margin: 13, marginBottom: -10 }}>
              เลือกภาษา</Text>
            <View style={{ alignSelf: 'center', width: width - 100, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 30 }}>

              <TouchableOpacity onPress={() => this.chooseLang('en')}>
                <Image source={require('./en.jpg')} style={styles.flagInModal} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.chooseLang('th')}>
                <Image source={require('./th.png')} style={styles.flagInModal} />
              </TouchableOpacity>

            </View>
          </View>
        </Modal>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#B0E0E6',

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
  container: {
    flex: 1,
    backgroundColor: 'rgba(180,216,247,1)',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    width: width / 3.5,
    height: width / 3.5,
    borderRadius: width / 7,
    borderWidth: 10,
    borderColor: '#dbf5ff',
    backgroundColor: '#9ed0ef',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  chooserBar: {
    backgroundColor: '#dbf5ff',
    width: width / 2,
    height: width / 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  flag: {
    width: 40,
    height: 25,
    borderRadius: 3
  },
  flagInModal: {
    width: 90,
    height: 55,
    borderRadius: 3
  },
  flagBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 10
  }
});
