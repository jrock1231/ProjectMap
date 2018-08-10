import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, Image, Dimensions, ScrollView, TextInput, FlatList, Alert, Linking, Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dialog } from 'react-native-simple-dialogs'
import Hotel_th from './Hotel_th/Hotel13_th.json'
import Hotel_en from './Hotel_en/Hotel13_en.json'
import Place0 from './111.js'

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      showmodal: false, showmodal1: false, showmodal2: false, showmodal3: false, showmodal4: false, showmodal5: false, showmodal6: false, showmodal7: false,
      text: '', Icon: '', Icon1: '', Icon2: '', Icon3: '', Icon4: '', Hotel: '', number: '', number1: '', Web: '', Web1: '', Taxi: '', Bus: '', Tuk: '', Van: '', Train: '', Webmap: '', Map: '', Map1: '', Day: '', Month: '', name: '', name1: '', name2: '', name3: '', name4: '', name5: '', name6: '', name7: '',
      form1: '', form2: '', form3: '', form4: '', form5: '', form6: '', form7: '', form8: '', form9: '', form10: '',
      form_1: '', form1_1: '', form2_1: '', form3_1: '', form4_1: '', form5_1: '', form6_1: '', form7_1: '', form8_1: '',
      form_2: '', form1_2: '', form2_2: '', form3_2: '', form4_2: '', form5_2: '', form6_2: '', form7_2: '', form8_2: '',
      form_3: '', form1_3: '', form2_3: '', form3_3: '', form4_3: '', form5_3: '', form6_3: '', form7_3: '', form8_3: '',
      form_4: '', form1_4: '', form2_4: '', form3_4: '', form4_4: '', form5_4: '', form6_4: '', form7_4: '', form8_4: '',
      form_5: '', form1_5: '', form2_5: '', form3_5: '', form4_5: '', form5_5: '', form6_5: '', form7_5: '', form8_5: '',
      form_6: '', form1_6: '', form2_6: '', form3_6: '', form4_6: '', form5_6: '', form6_6: '', form7_6: '', form8_6: '',
      category: '', category1: '', category2: '', category3: '', category4: '', category5: '', category6: '',
      category1_1: '', category2_1: '', category3_1: '', category4_1: '', category5_1: '', category6_1: '',
      category1_1: '', category1_2: '', category1_3: '', category1_4: '',
      category1_1_1: '', category1_2_1: '', category1_3_1: '', category1_4_1: '',
      category2_1: '', category2_2: '', category2_3: '', category2_4: '',
      category2_1_1: '', category2_2_1: '', category2_3_1: '', category2_4_1: '',
      category3_1: '', category3_2: '', category3_3: '', category3_4: '',
      category3_1_1: '', category3_2_1: '', category3_3_1: '', category3_4_1: '',
      category4_1: '', category4_2: '', category4_3: '', category4_4: '',
      category4_1_1: '', category4_2_1: '', category4_3_1: '', category4_4_1: '',
      category5_1: '', category5_2: '', category5_3: '', category5_4: '',
      category5_1_1: '', category5_2_1: '', category5_3_1: '', category5_4_1: '',
      category6_1: '', category6_2: '', category6_3: '', category6_4: '',
      category6_1_1: '', category6_2_1: '', category6_3_1: '', category6_4_1: '',
      nameExpedia: '', Expedia: '', nameHotels: '', Hotels: '',
      nameBooking: '', Booking: '', nameAgoda: '', Agoda: '',
      formExpedia: '', formHotels: '', formBooking: '', formAgoda: '',
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
          <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: 20, color: 'black', fontSize: 25 }}>
            {global.lang == 'th' ? <Text>โรงแรม</Text> : <Text>Hotel</Text>}</Text>
          <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.props.navigation.goBack()}>
            <Icon name="angle-left" color="black" size={40} />
          </TouchableOpacity>
        </View>

        <View style={{ height: 150, width: 375 }}>
          <View style={{ position: 'absolute', backgroundColor: '#dedfd7', alignSelf: 'center', width: 90, height: 90, borderRadius: 100, margin: 22 }}>
          </View>
          <Image source={require('./AppPage/กรอบ.png')}
            style={{ position: 'absolute', alignSelf: 'center', width, height: 135, resizeMode: 'contain', margin: 10 }} />

          <View style={{ position: 'absolute', width: 375, height: 110, margin: 1 }}>
            <Image source={require('./AppPage/โรงแรม.png')}
              style={{ width: 65, height: 65, margin: 34, alignSelf: 'center' }} />
          </View>
        </View>

        <View style={{ height: 40 }}>
          <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: 'gray', borderWidth: 2 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder='ค้นหา'
          />
        </View>

        <View style={{ height: 295, width: 360, alignSelf: 'center', backgroundColor: '#ADD8E6' }}>
          <ScrollView>
            {!global.lang || global.lang == 'th' ?
              Hotel_th.filter(Hotel => { return Hotel.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                <Text>ไม่พบ '{this.state.text}'</Text>
                :
                null
              :
              Hotel_en.filter(Hotel => { return Hotel.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                <Text>Not found '{this.state.text}'</Text>
                :
                null
            }
            <FlatList
              data={global.lang == 'th' ? Hotel_th : Hotel_en}
              extraData={this.state.text}
              renderItem={({ item }) =>
                <View>
                  {item.name.indexOf(this.state.text) > -1 ?
                    <TouchableOpacity style={styles.welcome}
                      onPress={() => this.setState({
                        showmodal: true,
                        name: item.name, name1: item.name1, name2: item.name2, name3: item.name3, name4: item.name4, name5: item.name5, name6: item.name6, name7: item.name7,
                        Icon: item.Icon, Icon1: item.Icon1, Icon2: item.Icon2, Icon3: item.Icon3, Icon4: item.Icon4, Icon5: item.Icon5, Icon6: item.Icon6,
                        Hotel: item.Hotel, number: item.number, number1: item.number1, Web: item.Web, Web1: item.Web1, Webmap: item.Webmap, Map: item.Map, Day: item.Day, Month: item.Month, Map1: item.Map1,
                        Taxi: item.Taxi, Bus: item.Bus, Tuk: item.Tuk, Van: item.Van, Train: item.Train,
                        nameExpedia: item.nameExpedia, Expedia: item.Expedia, nameHotels: item.nameHotels, Hotels: item.Hotels, nameBooking: item.nameBooking, Booking: item.Booking, nameAgoda: item.nameAgoda, Agoda: item.Agoda, formExpedia: item.formExpedia, formHotels: item.formHotels, formBooking: item.formBooking, formAgoda: item.formAgoda,
                        category: item.category,
                        category1: item.category1, category1_1: item.category1_1, category1_1_1: item.category1_1_1, category1_2: item.category1_2, category1_2_1: item.category1_2_1, category1_3: item.category1_3, category1_3_1: item.category1_3_1, category1_4: item.category1_4, category1_4_1: item.category1_4_1,
                        form_1: item.form_1, form1_1: item.form1_1, form2_1: item.form2_1, form3_1: item.form3_1, form4_1: item.form4_1, form5_1: item.form5_1, form6_1: item.form6_1, form7_1: item.form7_1, form7_1: item.form7_1,
                        category2: item.category2, category2_1: item.category2_1, category2_1_1: item.category2_1_1, category2_2: item.category2_2, category2_2_1: item.category2_2_1, category2_3: item.category2_3, category2_3_1: item.category2_3_1, category2_4: item.category2_4, category2_4_1: item.category2_4_1,
                        form_2: item.form_2, form1_2: item.form1_2, form2_2: item.form2_2, form3_2: item.form3_2, form4_2: item.form4_2, form5_2: item.form5_2, form6_2: item.form6_2, form7_2: item.form7_2, form8_2: item.form8_2,
                        category3: item.category3, category3_1: item.category3_1, category3_1_1: item.category3_1_1, category3_2: item.category3_2, category3_2_1: item.category3_2_1, category3_3: item.category3_3, category3_3_1: item.category3_3_1, category3_4: item.category3_4, category3_4_1: item.category3_4_1,
                        form_3: item.form_3, form1_3: item.form1_3, form2_3: item.form2_3, form3_3: item.form3_3, form4_3: item.form4_3, form5_3: item.form5_3, form6_3: item.form6_3, form7_3: item.form7_3, form8_3: item.form8_3,
                        category4: item.category4, category4_1: item.category4_1, category4_1_1: item.category4_1_1, category4_2: item.category4_2, category4_2_1: item.category4_2_1, category4_3: item.category4_3, category4_3_1: item.category4_3_1, category4_4: item.category4_4, category4_4_1: item.category4_4_1,
                        form_4: item.form_4, form1_4: item.form1_4, form2_4: item.form2_4, form3_4: item.form3_4, form4_4: item.form4_4, form5_4: item.form5_4, form6_4: item.form6_4, form7_4: item.form7_4, form8_4: item.form8_4,
                        category5: item.category5, category5_1: item.category5_1, category5_1_1: item.category5_1_1, category5_2: item.category5_2, category5_2_1: item.category5_2_1, category5_3: item.category5_3, category5_3_1: item.category5_3_1, category5_4: item.category5_4, category5_4_1: item.category5_4_1,
                        form_5: item.form_5, form1_5: item.form1_5, form2_5: item.form2_5, form3_5: item.form3_5, form4_5: item.form4_5, form5_5: item.form5_5, form6_5: item.form6_5, form7_5: item.form7_5, form8_5: item.form8_5,
                        category6: item.category6, category6_1: item.category6_1, category6_1_1: item.category6_1_1, category6_2: item.category6_2, category6_2_1: item.category6_2_1, category6_3: item.category6_3, category6_3_1: item.category6_3_1, category6_4: item.category6_4, category6_4_1: item.category6_4_1,
                        form_6: item.form_6, form1_6: item.form1_6, form2_6: item.form2_6, form3_6: item.form3_6, form4_6: item.form4_6, form5_6: item.form5_6, form6_6: item.form6_6, form7_6: item.form7_6, form8_6: item.form8_6,
                        form1: item.form1, form2: item.form2, form3: item.form3, form4: item.form4, form5: item.form5, form6: item.form6, form7: item.form7, form8: item.form8, form9: item.form9, form10: item.form10,

                      })}>

                      <View style={{ flexDirection: "row", margin: 0 }}>
                        <View style={{ height: 80, width: 115, margin: 0, alignSelf: 'center' }}>
                          <TouchableOpacity onPress={() => this.setState({
                            showmodal1: true,
                            name: item.name, form1: item.form1, form2: item.form2, form3: item.form3, form4: item.form4, form5: item.form5, form6: item.form6, form7: item.form7, form8: item.form8, form9: item.form9, form10: item.form10,
                          })}>
                            <Image source={item.form} style={{ alignSelf: 'center', width: 110, height: 73.5, resizeMode: 'contain', margin: 3 }} />
                            <View style={{ position: 'absolute', height: 50, width: 25, margin: 56, alignSelf: 'flex-end' }}>
                              <Icon name="photo" color="#E0FFFF" size={20} />
                            </View>
                          </TouchableOpacity>
                        </View>

                        <View style={{ height: 80, width: 225 }}>
                          <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 14, color: '#185373', margin: 3 }}>
                            {item.name}</Text>
                          <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 15, color: 'red' }}>
                            {item.name1}</Text>
                          <View style={{ flexDirection: "row", margin: 5 }}>
                            <Icon name={item.Icon} color="#FFCC00" size={25} />
                            <Icon name={item.Icon1} color="#FFCC00" size={25} />
                            <Icon name={item.Icon2} color="#FFCC00" size={25} />
                            <Icon name={item.Icon3} color="#FFCC00" size={25} />
                            <Icon name={item.Icon4} color="#FFCC00" size={25} />
                          </View>
                        </View>
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
            <View style={{ position: 'absolute', backgroundColor: '#a4d4f2', height: 570, width: 375, alignSelf: 'center' }}>

              <View style={{ height: 70, width: 375, backgroundColor: '#F8F8FF' }}>
                <Text style={{ alignSelf: 'center', margin: 20, color: 'black', fontSize: 25 }}>
                  {this.state.name}</Text>

                <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.setState({ showmodal: false })}>
                  <Icon name="angle-left" color="black" size={40} />
                </TouchableOpacity>
              </View>

              <View style={{ marginBottom: 10, flexDirection: "row", resizeMode: 'contain', alignSelf: 'center' }}>
                <Icon name={this.state.Icon} color="#FFCC00" size={35} />
                <Icon name={this.state.Icon1} color="#FFCC00" size={35} />
                <Icon name={this.state.Icon2} color="#FFCC00" size={35} />
                <Icon name={this.state.Icon3} color="#FFCC00" size={35} />
                <Icon name={this.state.Icon4} color="#FFCC00" size={35} />
              </View>

              <TouchableOpacity onPress={() => this.openDialog(true)}>
                <View style={{ marginBottom: 0, margin: 0, alignSelf: 'center' }}>
                  <Text style={{ color: 'blue', fontSize: 20 }}>
                    {this.state.category}</Text>
                </View>
              </TouchableOpacity>

              <ScrollView style={{ alignSelf: 'center', height: 370, width: 360 }}>
                <View style={{ alignSelf: 'center', width: 330, margin: 5 }}>
                  <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                    <Icon name="home" color="black" size={25} />
                    <Text style={{ color: '#000033', fontSize: 15, marginBottom: 15 }}> {this.state.Hotel}</Text>
                  </View>

                  <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                    <Icon name="phone" color="black" size={25} />
                    <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.number)} >
                      <Text style={{ color: this.state.Icon5, fontSize: 15, marginBottom: 15 }}> {this.state.number1}</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                    <Icon name="globe" color="black" size={25} />
                    <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.Web)} >
                      <Text style={{ color: this.state.Icon6, fontSize: 15, marginBottom: 15 }}> {this.state.Web1}</Text>
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

                <View style={{ height: 40, alignSelf: 'center' }}>
                  <TouchableOpacity style={{ margin: 15 }} onPress={() => Linking.openURL(this.state.Webmap)} >
                    <Text style={{ color: 'blue', fontSize: 17 }}>{this.state.Map}</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ height: 220, width: 335, alignSelf: 'center', marginBottom: 25 }}>
                  <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.Webmap)} >
                    <Image source={this.state.Map1} style={{ alignSelf: 'center', margin: 15, height: 200, width: 335, borderRadius: 5 }} />
                  </TouchableOpacity>
                </View>
              </ScrollView>

              <View style={{ height: 70, width: 375, flexDirection: "row", justifyContent: "space-around", alignItems: 'flex-start', flexWrap: "wrap", alignSelf: 'center', backgroundColor: '#FFFFFF' }}>

                <View style={{ flexDirection: "row", margin: -15 }}>
                  <TouchableOpacity onPress={() => Linking.openURL(this.state.Expedia)} >
                    <Image source={this.state.formExpedia} style={{ alignSelf: 'center', height: 35, width: 35, margin: 25, marginBottom: 2 }} />
                    <Text style={{ color: 'blue', fontSize: 10, alignSelf: 'center' }}>{this.state.nameExpedia}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Linking.openURL(this.state.Hotels)} >
                    <Image source={this.state.formHotels} style={{ alignSelf: 'center', height: 35, width: 35, margin: 25, marginBottom: 2 }} />
                    <Text style={{ color: 'blue', fontSize: 10, alignSelf: 'center' }}>{this.state.nameHotels}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Linking.openURL(this.state.Booking)} >
                    <Image source={this.state.formBooking} style={{ alignSelf: 'center', height: 35, width: 35, margin: 25, marginBottom: 2 }} />
                    <Text style={{ color: 'blue', fontSize: 10, alignSelf: 'center' }}>{this.state.nameBooking}</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => Linking.openURL(this.state.Agoda)} >
                    <Image source={this.state.formAgoda} style={{ alignSelf: 'center', height: 35, width: 35, margin: 25, marginBottom: 2 }} />
                    <Text style={{ color: 'blue', fontSize: 10, alignSelf: 'center' }}>{this.state.nameAgoda}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <Modal
            visible={this.state.showmodal1}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal1: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 337, height: 450, backgroundColor: '#dedfd7', marginTop: height * 0.1, margin: 15, borderRadius: 5 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.name}</Text>
              </View>
              <ScrollView style={{ height: 290, width: 320, alignSelf: 'center' }}>
                <Image source={this.state.form1} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form2} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form3} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form4} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form5} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form6} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form7} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form8} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form9} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                <Image source={this.state.form10} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
              </ScrollView>
              <TouchableOpacity onPress={() => this.setState({ showmodal1: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Dialog
            visible={this.state.showDialog}
            onTouchOutside={() => this.openDialog(true)}
            contentStyle={{ backgroundColor: '#dedfd7', justifyContent: 'center', alignItems: 'center' }}
            animationType="fade">
            <View style={{ marginBottom: 10, margin: 5, alignSelf: 'center' }}>
              <Text style={{ flexDirection: "row", fontSize: 20, color: 'black' }}>
                ประเภทห้องพัก</Text>
            </View>
            <ScrollView style={{ backgroundColor: '#dedfd7', width: 310, height: 320, alignSelf: 'center', borderRadius: 5 }}>

              <View style={{ margin: 1 }}>
                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.setState({ showmodal2: true, })}>
                  <Image source={this.state.form_1} style={{ width: 135, height: 90, marginBottom: 5 }} />
                  <View style={{ position: 'absolute', width: 82, margin: 68, alignSelf: 'center' }}>
                    <Icon name="photo" color="#E0FFFF" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: 170, alignSelf: 'flex-end', position: 'absolute' }}>
                <Text style={{ fontSize: 17, color: '#185373' }}>
                  {this.state.category1}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {this.state.category1_1}</Text>
                <Text style={{ fontSize: 10 }}>
                  {this.state.category1_1_1}</Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                  {this.state.name2}</Text>
              </View>

              <View style={{ margin: 1 }}>
                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.setState({ showmodal3: true, })}>
                  <Image source={this.state.form_2} style={{ width: 135, height: 90, marginBottom: 5 }} />
                  <View style={{ position: 'absolute', width: 82, margin: 68, alignSelf: 'center' }}>
                    <Icon name="photo" color="#E0FFFF" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: 170, alignSelf: 'flex-end', position: 'absolute', margin: 105 }}>
                <Text style={{ fontSize: 17, color: '#185373' }}>
                  {this.state.category2}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {this.state.category2_1}</Text>
                <Text style={{ fontSize: 10 }}>
                  {this.state.category2_1_1}</Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                  {this.state.name3}</Text>
              </View>

              <View style={{ margin: 1 }}>
                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.setState({ showmodal4: true, })}>
                  <Image source={this.state.form_3} style={{ width: 135, height: 90, marginBottom: 5 }} />
                  <View style={{ position: 'absolute', width: 82, margin: 68, alignSelf: 'center' }}>
                    <Icon name="photo" color="#E0FFFF" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: 170, alignSelf: 'flex-end', position: 'absolute', margin: 207 }}>
                <Text style={{ fontSize: 17, color: '#185373' }}>
                  {this.state.category3}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {this.state.category3_1}</Text>
                <Text style={{ fontSize: 10 }}>
                  {this.state.category3_1_1}</Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                  {this.state.name4}</Text>
              </View>

              <View style={{ margin: 1 }}>
                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.setState({ showmodal5: true, })}>
                  <Image source={this.state.form_4} style={{ width: 135, height: 90, marginBottom: 5 }} />
                  <View style={{ position: 'absolute', width: 82, margin: 68, alignSelf: 'center' }}>
                    <Icon name="photo" color="#E0FFFF" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: 170, alignSelf: 'flex-end', position: 'absolute', margin: 307 }}>
                <Text style={{ fontSize: 17, color: '#185373' }}>
                  {this.state.category4}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {this.state.category4_1}</Text>
                <Text style={{ fontSize: 10 }}>
                  {this.state.category4_1_1}</Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                  {this.state.name5}</Text>
              </View>

              <View style={{ margin: 1 }}>
                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.setState({ showmodal6: true, })}>
                  <Image source={this.state.form_5} style={{ width: 135, height: 90, marginBottom: 5 }} />
                  <View style={{ position: 'absolute', width: 82, margin: 68, alignSelf: 'center' }}>
                    <Icon name="photo" color="#E0FFFF" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: 170, alignSelf: 'flex-end', position: 'absolute', margin: 407 }}>
                <Text style={{ fontSize: 17, color: '#185373' }}>
                  {this.state.category5}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {this.state.category5_1}</Text>
                <Text style={{ fontSize: 10 }}>
                  {this.state.category5_1_1}</Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                  {this.state.name6}</Text>
              </View>

              <View style={{ margin: 1 }}>
                <TouchableOpacity style={{ margin: 2 }} onPress={() => this.setState({ showmodal7: true, })}>
                  <Image source={this.state.form_6} style={{ width: 135, height: 90, marginBottom: 5 }} />
                  <View style={{ position: 'absolute', width: 82, margin: 68, alignSelf: 'center' }}>
                    <Icon name="photo" color="#E0FFFF" size={20} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ width: 170, alignSelf: 'flex-end', position: 'absolute', margin: 507 }}>
                <Text style={{ fontSize: 17, color: '#185373' }}>
                  {this.state.category6}</Text>
                <Text style={{ fontSize: 12, color: 'black' }}>
                  {this.state.category6_1}</Text>
                <Text style={{ fontSize: 10 }}>
                  {this.state.category6_1_1}</Text>
                <Text style={{ fontSize: 16, color: 'red' }}>
                  {this.state.name7}</Text>
              </View>

            </ScrollView>
            <TouchableOpacity onPress={() => this.openDialog(false)} style={{ marginTop: 0 }} title="CLOSE" >
              <Text style={{ marginTop: 10, fontSize: 18, color: 'blue' }}>OK</Text>
            </TouchableOpacity>
          </Dialog>

          <Modal
            visible={this.state.showmodal2}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal2: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 335, height: 445, backgroundColor: '#dedfd7', marginTop: height * 0.103, borderRadius: 1 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.category1}</Text>
              </View>

              <View style={{ alignSelf: 'center', height: 330, width: 330, flexDirection: "row" }}>
                <ScrollView style={{ height: 325 }}>
                  <Image source={this.state.form1_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form2_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form3_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form4_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form5_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form6_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form7_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form8_1} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                </ScrollView>

                <View style={{ width: 105, margin: 5 }}>
                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category1_2}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category1_2_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category1_3}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category1_3_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category1_4}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category1_4_1}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal2: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            visible={this.state.showmodal3}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal3: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 335, height: 445, backgroundColor: '#dedfd7', marginTop: height * 0.103, borderRadius: 1 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.category2}</Text>
              </View>
              <View style={{ alignSelf: 'center', height: 330, width: 330, flexDirection: "row" }}>
                <ScrollView style={{ height: 325 }}>
                  <Image source={this.state.form1_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form2_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form3_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form4_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form5_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form6_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form7_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form8_2} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                </ScrollView>

                <View style={{ width: 105, margin: 5 }}>
                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category2_2}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category2_2_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category2_3}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category2_3_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category2_4}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category2_4_1}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal3: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            visible={this.state.showmodal4}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal4: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 335, height: 445, backgroundColor: '#dedfd7', marginTop: height * 0.103, borderRadius: 1 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.category3}</Text>
              </View>
              <View style={{ alignSelf: 'center', height: 330, width: 330, flexDirection: "row" }}>
                <ScrollView style={{ height: 325 }}>
                  <Image source={this.state.form1_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form2_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form3_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form4_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form5_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form6_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form7_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form8_3} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                </ScrollView>

                <View style={{ width: 105, margin: 5 }}>
                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category3_2}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category3_2_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category3_3}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category3_3_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category3_4}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category3_4_1}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal4: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            visible={this.state.showmodal5}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal5: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 335, height: 445, backgroundColor: '#dedfd7', marginTop: height * 0.103, borderRadius: 1 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.category4}</Text>
              </View>
              <View style={{ alignSelf: 'center', height: 330, width: 330, flexDirection: "row" }}>
                <ScrollView style={{ height: 325 }}>
                  <Image source={this.state.form1_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form2_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form3_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form4_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form5_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form6_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form7_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form8_4} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                </ScrollView>

                <View style={{ width: 105, margin: 5 }}>
                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category4_2}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category4_2_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category4_3}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category4_3_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category4_4}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category4_4_1}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal5: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            visible={this.state.showmodal6}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal6: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 335, height: 445, backgroundColor: '#dedfd7', marginTop: height * 0.103, borderRadius: 1 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.category5}</Text>
              </View>
              <View style={{ alignSelf: 'center', height: 330, width: 330, flexDirection: "row" }}>
                <ScrollView style={{ height: 325 }}>
                  <Image source={this.state.form1_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form2_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form3_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form4_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form5_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form6_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form7_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form8_5} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                </ScrollView>

                <View style={{ width: 105, margin: 5 }}>
                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category5_2}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category5_2_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category5_3}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category5_3_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category5_4}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category5_4_1}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal6: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>

          <Modal
            visible={this.state.showmodal7}
            transparent={true}
            onRequestClose={() => this.setState({ showmodal7: true })}
            animationType={'fade'}
          >
            <View style={{ alignSelf: 'center', position: 'absolute', width: 335, height: 445, backgroundColor: '#dedfd7', marginTop: height * 0.103, borderRadius: 1 }}>
              <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                <Text style={{ color: '#185373', fontSize: 18 }}>
                  {this.state.category6}</Text>
              </View>
              <View style={{ alignSelf: 'center', height: 330, width: 330, flexDirection: "row" }}>
                <ScrollView style={{ height: 325 }}>
                  <Image source={this.state.form1_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form2_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form3_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form4_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form5_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form6_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form7_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                  <Image source={this.state.form8_6} style={{ alignSelf: 'center', margin: 5, height: 140, width: 210, borderRadius: 3 }} />
                </ScrollView>

                <View style={{ width: 105, margin: 5 }}>
                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category6_2}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category6_2_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category6_3}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category6_3_1}</Text>

                  <Text style={{ fontSize: 11, color: 'black' }}>
                    {this.state.category6_4}</Text>
                  <Text style={{ fontSize: 10 }}>
                    {this.state.category6_4_1}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => this.setState({ showmodal7: false })}
                style={{ alignSelf: 'center' }}>
                <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View >
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
    width: 356,
    alignSelf: 'center',
    margin: 2.5,
    backgroundColor: '#dedfd7',
    borderRadius: 1
  },
  instructions: {
    flex: 1,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'flex-start',
    flexWrap: "wrap",
    alignSelf: 'center',
    backgroundColor: '#dedfd7',
    borderRadius: 5

  },
});