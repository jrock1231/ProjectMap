import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Dimensions, Animated, Modal, TouchableHighlight, Text, AsyncStorage, BackHandler, TextInput, keyboardingView } from 'react-native';

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      User: '', Password: '', Name: '', Lastname: '', Email: ''
    };
  }
  render() {
    return (
      <View style={styles.background}>
        <View style={{ alignSelf: 'center', margin: 70 }}>

          <View style={{ width: 355, height: 430, borderColor: '#CD5C5C', borderWidth: 1.5, borderRadius: 7 }}>
            <View style={{ width: 335, height: 355, alignSelf: 'center', borderRadius: 5, margin: 35, backgroundColor: '#FFFFFF' }}>
              <View style={{ margin: 10, alignSelf: 'center' }}>
                <View>
                  <Text style={{ color: '#663300', fontSize: 15 }}>Username :</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(User) => this.setState({ User })}
                    value={this.state.User}
                    placeholder='Username'
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 15 }}>Password :</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Password) => this.setState({ Password })}
                    value={this.state.Password}
                    placeholder='Password'
                    secureTextEntry
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 15 }}>ชื่อ :</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Name) => this.setState({ Name })}
                    value={this.state.Name}
                    placeholder='ชื่อ'
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 15 }}>นามสกุล :</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Lastname) => this.setState({ Lastname })}
                    value={this.state.Lastname}
                    placeholder='นามสกุล'
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 15 }}>Email :</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Email) => this.setState({ Email })}
                    value={this.state.Email}
                    placeholder='Email'
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ position: 'absolute', margin: 403, alignSelf: 'center', flexDirection: "row" }}>
            <View style={{ height: 40, width: 150, margin: 5, alignSelf: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', margin: 7 }}>
                  ยืนยัน</Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 40, width: 150, margin: 5, alignSelf: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.goBack()}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', margin: 7 }}>
                  ยกเลิก</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ position: 'absolute', width: 250, alignSelf: 'center', borderRadius: 7, margin: 45, backgroundColor: '#CD5C5C' }}>
          <Text style={{ fontSize: 37, color: '#FFFFFF', alignSelf: 'center', fontStyle: 'italic', fontWeight: 'bold' }}> สมัครสมาชิก </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
});
