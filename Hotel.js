import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Dialog
} from 'react-native-simple-dialogs'
import ho_th from './Hotel_th.json'
import ho_en from './Hotel_en.json'

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
  chooseLang(lang) {
    global.lang = lang;
    AsyncStorage.setItem('lang', lang, () => this.setState({ langModal: false }))
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={{ height: 70, width: 375, backgroundColor: '#66CDAA' }}>
          <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: 15, color: '#ffffff', fontSize: 38 }}>
            {global.lang == 'th' ? <Text>โรงแรม</Text> : <Text>Hotel</Text>}</Text>
          <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.props.navigation.goBack()}>
            <Icon name="angle-left" color="black" size={40} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 180, width: 375 }}>
          
          <View style={{ position: 'absolute', margin: -15, alignSelf: 'center'  }}>
            <Image source={require('./AppPage/โรงแรม2.png')}
              style={{ width: 200, height: 200, margin: 1, alignSelf: 'center' }} />
          </View>
        </View>

        <View style={{ height: 40 }}>
          <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: '#ffffff', borderWidth: 2 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder='ค้นหา'
          />
        </View>

        <View style={{
          height: 295, width: 320, alignSelf: 'center',
          backgroundColor: '#ADD8E6'
        }}>
          <ScrollView>
            {!global.lang || global.lang == 'th' ?
              ho_th.filter(ho => { return ho.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                <Text>ไม่พบ '{this.state.text}'</Text>
                :
                null
              :
              ho_en.filter(ho => { return ho.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                <Text>Not found '{this.state.text}'</Text>
                :
                null
            }

            {console.log(ho_th.filter(ho => { return ho.name.indexOf(this.state.text) > -1 }))}
            <FlatList
              data={global.lang == 'th' ? ho_th : ho_en}
              extraData={this.state.text}
              renderItem={({ item }) =>
                <View>
                  {item.name.indexOf(this.state.text) > -1 ?
                    <TouchableOpacity style={{ height: 42, width: 320, alignSelf: 'center', margin: 2.5, backgroundColor: '#ffffff', borderRadius: 5 , borderColor: '#66CCCC', borderWidth: 3 }} onPress={() => this.props.navigation.navigate(item.Hotel)} >

                      <View style={{ flexDirection: "row", margin: 0 }}>

                        <View style={{ height: 42, flex: 1.8, margin: 8 }}>
                          <Text style={{ fontSize: 18, color: '#185373' }}>
                            {item.name}</Text>
                        </View>

                        <View style={{ flexDirection: 'column', justifyContent: 'center', height: 42, flex: 0.2 }}>
                          <Icon name="chevron-right" color="#66CCCC" size={21} />
                        </View>
                      </View>

                    </TouchableOpacity>
                    :
                    null
                  }

                </View>

              } />
          </ScrollView>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#a4d4f2',
  },
  welcome: {
    height: 80,
    width: 320,
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
