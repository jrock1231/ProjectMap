import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, Image, Dimensions, ScrollView, Linking, Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={{
          height: 210, width: 375
        }}>
          <View style={{}}>
            <Image source={require('./A1.png')}
              style={{ position: 'absolute', alignSelf: 'center', width, height: 120, resizeMode: 'contain', margin: 100 }} />
            <Image source={require('./Airport1.png')}
              style={{ alignSelf: 'center', width, height: 150, resizeMode: 'contain', margin: 15 }} />
            <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: -34, color: 'black', fontSize: 18 }}>
              สนามบินสุราษฎร์ธานี</Text>
            <TouchableOpacity style={{ position: 'absolute', margin: 10 }} onPress={() => this.props.navigation.goBack()}>
              <Icon name="angle-left" color="black" size={40} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={{ alignSelf: 'center', width: 360 }}>

          <View style={{ alignSelf: 'center', height: 170, width: 320 }}>
            <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
              <Icon name="home" color="black" size={25} />
              <Text style={{ color: '#000033', fontSize: 17, marginBottom: 15 }}> 73 ตำบลมะลวน อำเภอพุนพิน จังหวัดสุราษฎร์ธานี 84130</Text>
            </View>

            <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 6 }}>
              <Icon name="phone" color="black" size={25} />
              <TouchableOpacity style={{}} onPress={() => Linking.openURL('tel:0774411230')} >
                <Text style={{ color: 'blue', fontSize: 17, marginBottom: 15 }}> 077 441 1230</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
              <Icon name="globe" color="black" size={25} />
              <TouchableOpacity style={{}} onPress={() => Linking.openURL('https://www.skyscanner.co.th/airports/urt/surat-thani-airport.html?ksh_id=aecf2ef0-1b28-43eb-8509-66510953affb&associateID=SEM_GGF_00065_00051&utm_source=GOOGLE&utm_medium=cpc&utm_campaign=TH-Flights-Dynamic+Search&utm_term=&gclid=CjwKCAjw06LZBRBNEiwA2vgMVTl6SspPOvFulY5xyJbOQ2byrDkwhAzzJEpghPG9zyoO4PT6fa5B9hoCb30QAvD_BwE&associateid_proc=true')} >
                <Text style={{ color: 'blue', fontSize: 17, marginBottom: 15 }}> www.skyscanner.co.th</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.welcome}>
            <TouchableOpacity onPress={() => this.setState(
              Alert.alert(
                'รายละเอียด',
                'จำนวนที่นั้ง : 077 586 879 \nอัตราค้าเดินทาง : \nเบอร์โทรศัพท์ : \nเบอร์โทรศัพท์ : ',
              ))}>
              <Image source={require('./Taxi.png')} style={{ margin: 3, width: 70, height: 65 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState(
              Alert.alert(
                'รายละเอียด',
                'จำนวนที่นั้ง : 077 586 879 \nอัตราค้าเดินทาง : \nเบอร์โทรศัพท์ : \nเบอร์โทรศัพท์ : ',
              ))}>
              <Image source={require('./Bus.png')} style={{ margin: 3, width: 65, height: 65 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState(
              Alert.alert(
                'รายละเอียด',
                'จำนวนที่นั้ง : 077 586 879 \nอัตราค้าเดินทาง : \nเบอร์โทรศัพท์ : \nเบอร์โทรศัพท์ : ',
              ))}>
              <Image source={require('./Tuk.png')} style={{ margin: 3, width: 65, height: 65 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState(
              Alert.alert(
                'รายละเอียด',
                'จำนวนที่นั้ง : 077 586 879 \nอัตราค้าเดินทาง : \nเบอร์โทรศัพท์ : \nเบอร์โทรศัพท์ : ',
              ))}>
              <Image source={require('./Van.png')} style={{ margin: 3, width: 65, height: 65 }} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.setState(
              Alert.alert(
                'รายละเอียด',
                'จำนวนที่นั้ง : 077 586 879 \nอัตราค้าเดินทาง : \nเบอร์โทรศัพท์ : \nเบอร์โทรศัพท์ : ',
              ))}>
              <Image source={require('./Train.png')} style={{ margin: 3, width: 51, height: 65 }} />
            </TouchableOpacity>
          </View>

          <View style={{
            height: 40, alignSelf: 'center'
          }}>

            <TouchableOpacity style={{ margin: 15 }} onPress={() => Linking.openURL('https://www.google.com/maps/place/ท่าอากาศยานนานาชาติสุราษฎร์ธานี/@9.1343021,99.1406933,17z/data=!3m1!4b1!4m5!3m4!1s0x3056abb17b382b27:0xf0223bd0b5f3a40!8m2!3d9.1342968!4d99.142882')} >
              <Text style={{ color: 'blue', fontSize: 17 }}>ดูบน Google Maps</Text>
            </TouchableOpacity>
          </View>

          <View style={{
            height: 220, width: 335, alignSelf: 'center',
            marginBottom: 25
          }}>

            <TouchableOpacity style={{}} onPress={() => Linking.openURL('https://www.google.com/maps/place/ท่าอากาศยานนานาชาติสุราษฎร์ธานี/@9.1343021,99.1406933,17z/data=!3m1!4b1!4m5!3m4!1s0x3056abb17b382b27:0xf0223bd0b5f3a40!8m2!3d9.1342968!4d99.142882')} >
              <Image source={require('./Map.jpg')} style={{ alignSelf: 'center', margin: 15, height: 200, width: 335, borderRadius: 5 }} />
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: '#FFFF99',
  },
  welcome: {
    flex: 1,
    width: 350,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'flex-start',
    flexWrap: "wrap",
    alignSelf: 'center',
    backgroundColor: '#996600',
    borderRadius: 5
  },
});
