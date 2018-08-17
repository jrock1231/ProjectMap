import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Dimensions, Text, AsyncStorage, TextInput, Alert } from 'react-native';
import firebase from 'react-native-firebase'

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
  chooseLang(lang) {
    global.lang = lang;
    AsyncStorage.setItem('lang', lang, () => this.setState({ langModal: false }))
  }
  register() {
    console.log(this.state.User, this.state.Password, this.state.Name, this.state.Lastname, this.state.Email)
    let _this = this
    firebase.auth().createUserWithEmailAndPassword(this.state.Email.trim(), this.state.Password.trim())
      .then(user => {
        console.log('user register success')
        console.log(_this.state.User)
        user.updateProfile({
          displayName: _this.state.User
        }).then(function () {
          Alert.alert(global.lang == 'th' ? '1' : '2', global.lang == 'th' ? 'สมัครสมาชิกสำเร็จ' : 'Register Successfully', [{
            text: global.lang == 'th' ? 'ตกลง' : 'OK', onPress: () => {
              console.log(user)
              //ทำอะไร ถ้า register สำเร็จ
            }
          }])
        }, function (error) {
          // ทำอะไร ถ้า register ไม่สำเร็จ
        });
      }).catch((e) => {
        console.log(e.message, e.code)
        if (e.code == 'auth/invalid-email') {
          if (global.lang == 'th') {
            Alert.alert('สมัครสมาชิกไม่สำเร็จ', 'E-Mail ไม่ถูกต้อง', [{ text: 'ตกลง' }])
          }
          else {
            Alert.alert('Registration Failed', 'Invalid E-Mail', [{ text: 'OK' }])
          }
          this.setState({ loadingSubmit: false })
        }
        else if (e.code == 'auth/weak-password') {
          if (global.lang == 'th') {
            Alert.alert('สมัครสมาชิกไม่สำเร็จ', 'รหัสผ่านสั้นเกินไป \n(6 ตัวอักษรขึ้นไป)', [{ text: 'ตกลง' }])
          }
          else {
            Alert.alert('Registration Failed', 'Password is too weak \n(password must be at least 6 characters)', [{ text: 'OK' }])
          }
          this.setState({ loadingSubmit: false })
        }
        else if (e.code == 'auth/email-already-in-use') {
          if (global.lang == 'th') {
            Alert.alert('สมัครสมาชิกไม่สำเร็จ', 'E-Mail นี้ถูกใช้งานแล้ว', [{ text: 'ตกลง' }])
          }
          else {
            Alert.alert('Registration Failed', 'This email is already in use \n (' + this.state.registerEmail.trim() + ')', [{ text: 'OK' }])
          }
          this.setState({ loadingSubmit: false })
        }
        else {
          if (global.lang == 'th') {
            Alert.alert('สมัครสมาชิกไม่สำเร็จ', e.message, [{ text: 'ตกลง' }])
          }
          else {
            Alert.alert('Registration Failed', e.message, [{ text: 'OK' }])
          }
          this.setState({ loadingSubmit: false })
        }
      })
  }

  render() {
    return (
      <View style={styles.background}>
        <View style={{ alignSelf: 'center', margin: 70 }}>

          <View style={{ width: 355, height: 430, borderColor: '#CD5C5C', borderWidth: 1.5, borderRadius: 7 }}>
            <View style={{ width: 335, height: 365, alignSelf: 'center', borderRadius: 5, margin: 31, backgroundColor: '#FFFFFF' }}>
              <View style={{ margin: 10, alignSelf: 'center' }}>
                <View>
                  <Text style={{ color: '#663300', fontSize: 17 }}>{global.lang == 'th' ? <Text>ชื่อผู้ใช้ :</Text> : <Text>Username :</Text>}</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(User) => this.setState({ User })}
                    value={this.state.User}
                    placeholder={global.lang == 'th' ? 'ชื่อผู้ใช้' : 'Username'}
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 17 }}>{global.lang == 'th' ? <Text>รหัสผ่าน :</Text> : <Text>Password :</Text>}</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Password) => this.setState({ Password })}
                    value={this.state.Password}
                    placeholder={global.lang == 'th' ? 'รหัสผ่าน' : 'Password'}
                    secureTextEntry
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 17 }}>{global.lang == 'th' ? <Text>ชื่อ :</Text> : <Text>Name :</Text>}</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Name) => this.setState({ Name })}
                    value={this.state.Name}
                    placeholder={global.lang == 'th' ? 'ชื่อ' : 'Name'}
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 17 }}>{global.lang == 'th' ? <Text>นามสกุล :</Text> : <Text>Lastname :</Text>}</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Lastname) => this.setState({ Lastname })}
                    value={this.state.Lastname}
                    placeholder={global.lang == 'th' ? 'นามสกุล' : 'Lastname'}
                  />
                </View>

                <View>
                  <Text style={{ color: '#663300', fontSize: 17 }}>{global.lang == 'th' ? <Text>อีเมล์ :</Text> : <Text>E-mail :</Text>}</Text>
                </View>
                <View style={{ alignSelf: 'center', margin: 5 }}>
                  <TextInput style={{ height: 37, width: 300, borderRadius: 3, borderColor: 'pink', borderWidth: 1.5 }}
                    onChangeText={(Email) => this.setState({ Email })}
                    value={this.state.Email}
                    placeholder={global.lang == 'th' ? 'อีเมล์' : 'E-mail'}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={{ position: 'absolute', margin: 403, alignSelf: 'center', flexDirection: "row" }}>
            <View style={{ height: 40, width: 150, margin: 5, alignSelf: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.register()}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', fontWeight: 'bold', margin: 7 }}>
                  {global.lang == 'th' ? <Text> ตกลง </Text> : <Text> OK </Text>}</Text>
              </TouchableOpacity>
            </View>

            <View style={{ height: 40, width: 150, margin: 5, alignSelf: 'center' }}>
              <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.goBack()}>
                <Text style={{ color: '#FFFFFF', fontSize: 20, alignSelf: 'center', fontWeight: 'bold', margin: 7 }}>
                  {global.lang == 'th' ? <Text> ยกเลิก </Text> : <Text> Cancel </Text>}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ position: 'absolute', width: 250, alignSelf: 'center', borderRadius: 7, margin: 45, backgroundColor: '#CD5C5C' }}>
          <Text style={{ fontSize: 37, color: '#FFFFFF', alignSelf: 'center', fontStyle: 'italic', fontWeight: 'bold' }}>{global.lang == 'th' ? <Text> สมัครสมาชิก </Text> : <Text> REGISTER </Text>}</Text>
        </View>
      </View>
    );
  } ss
}

const styles = StyleSheet.create({

  background: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
});
