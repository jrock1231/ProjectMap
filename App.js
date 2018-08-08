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
        global.lang = 'th'
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
        <View style={{ alignSelf: 'center', height: 165, width: 360 }}>
          <Image source={require('./ฟ้าขาวน้ำเงิน.png')}
            style={{ alignSelf: 'center', width, height: 140, resizeMode: 'contain', margin: 15 }} />
        </View>

        <View style={{ alignSelf: 'center', height: 370, width: 360, }}>
          <View style={{ position: 'absolute', alignSelf: 'center', width: 330 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Place')}>
              <View style={{ position: 'absolute', backgroundColor: '#185373', height: 50, width: 230, alignSelf: 'center', margin: 17.5, borderRadius: 7, }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', height: 46, width: 226, alignSelf: 'center', margin: 2, borderRadius: 4.5, }}>
                  <Text style={{ color: '#185373', fontSize: 25, alignSelf: 'center', margin: 7 }}>
                    {global.lang == 'th' ? <Text>ที่ท่องเที่ยว</Text> : <Text>Place</Text>}</Text>
                </View>
              </View>
              <View style={{ position: 'absolute', width: 84.5, height: 70, alignSelf: 'flex-end', margin: 7.5 }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', width: 70, height: 70, borderRadius: 100 }}>
                </View>
              </View>
              <Image source={require('./AppPage/กรอบ.png')}
                style={{ width: 100, height: 100, alignSelf: 'flex-end' }} />
              <View style={{ position: 'absolute', width: 80, height: 70, alignSelf: 'flex-end', margin: 12.5 }}>
                <Image source={require('./AppPage/ท่องเที่ยว.png')}
                  style={{ width: 60, height: 60 }} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ position: 'absolute', alignSelf: 'center', width: 330, margin: 85 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Hotel')}>
              <View style={{ position: 'absolute', backgroundColor: '#185373', height: 50, width: 230, alignSelf: 'center', margin: 17.5, borderRadius: 7, }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', height: 46, width: 226, alignSelf: 'center', margin: 2, borderRadius: 4.5, }}>
                  <Text style={{ color: '#185373', fontSize: 25, alignSelf: 'center', margin: 7 }}>
                    {global.lang == 'th' ? <Text>โรงแรม</Text> : <Text>Hotel</Text>}</Text>
                </View>
              </View>
              <View style={{ position: 'absolute', width: 86, height: 70, margin: 7.5 }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', alignSelf: 'center', width: 70, height: 70, borderRadius: 100 }}>
                </View>
              </View>
              <Image source={require('./AppPage/กรอบ.png')}
                style={{ width: 100, height: 100, }} />

              <View style={{ position: 'absolute', width: 78, height: 70, margin: 12.5 }}>
                <Image source={require('./AppPage/โรงแรม.png')}
                  style={{ width: 45, height: 45, alignSelf: 'center', margin: 7 }} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ position: 'absolute', alignSelf: 'center', width: 330, margin: 170 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Hospital')}>
              <View style={{ position: 'absolute', backgroundColor: '#185373', height: 50, width: 230, alignSelf: 'center', margin: 17.5, borderRadius: 7, }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', height: 46, width: 226, alignSelf: 'center', margin: 2, borderRadius: 4.5, }}>
                  <Text style={{ color: '#185373', fontSize: 25, alignSelf: 'center', margin: 7 }}>
                    {global.lang == 'th' ? <Text>โรงพยาบาล</Text> : <Text>Hospital</Text>}</Text>
                </View>
              </View>
              <View style={{ position: 'absolute', width: 84.5, height: 70, alignSelf: 'flex-end', margin: 7.5 }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', width: 70, height: 70, borderRadius: 100 }}>
                </View>
              </View>
              <Image source={require('./AppPage/กรอบ.png')}
                style={{ width: 100, height: 100, alignSelf: 'flex-end' }} />

              <View style={{ position: 'absolute', width: 74.5, height: 70, alignSelf: 'flex-end', margin: 18 }}>
                <Image source={require('./AppPage/โรงพยาบาล.png')}
                  style={{ width: 50, height: 50 }} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{ position: 'absolute', alignSelf: 'center', width: 330, margin: 255 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Airport')}>
              <View style={{ position: 'absolute', backgroundColor: '#185373', height: 50, width: 230, alignSelf: 'center', margin: 17.5, borderRadius: 7, }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', height: 46, width: 226, alignSelf: 'center', margin: 2, borderRadius: 4.5, }}>
                  <Text style={{ color: '#185373', fontSize: 25, alignSelf: 'center', margin: 7 }}>
                    {global.lang == 'th' ? <Text>สนามบิน</Text> : <Text>Airport</Text>}</Text>
                </View>
              </View>
              <View style={{ position: 'absolute', width: 86, height: 70, margin: 7.5 }}>
                <View style={{ position: 'absolute', backgroundColor: '#dedfd7', alignSelf: 'center', width: 70, height: 70, borderRadius: 100 }}>
                </View>
              </View>
              <Image source={require('./AppPage/กรอบ.png')}
                style={{ width: 100, height: 100 }} />

              <View style={{ position: 'absolute', width: 78, height: 70, margin: 12.5 }}>
                <Image source={require('./AppPage/เครื่องบิน.png')}
                  style={{ width: 50, height: 50, alignSelf: 'center', margin: 8 }} />
              </View>
            </TouchableOpacity>
          </View>

        </View>

        <TouchableOpacity style={styles.flagBtn} onPress={() => !this.state.isChoosed ? this.setState({ langModal: true }) : null}>
          {
            global.lang == 'th' ?
              <Animated.Image source={require('./th.png')} style={[styles.flag, { opacity: this.state.itemCenterOpacity }]} />
              :
              <Animated.Image source={require('./en.jpg')} style={[styles.flag, { opacity: this.state.itemCenterOpacity }]} />
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
              {global.lang == 'th' ? <Text>เลือกภาษา</Text> : <Text>Choose Language</Text>}</Text>
            <View style={{ alignSelf: 'center', width: width - 100, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', padding: 30 }}>

              <TouchableOpacity onPress={() => this.chooseLang('th')}>
                <Image source={require('./th.png')} style={styles.flagInModal} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.chooseLang('en')}>
                <Image source={require('./en.jpg')} style={styles.flagInModal} />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View >

    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#a4d4f2',
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
    width: 60,
    height: 40,
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
    right: 20,
    zIndex: 10
  }
});
