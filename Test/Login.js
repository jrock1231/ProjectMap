import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Dimensions, Animated, Modal, TouchableHighlight, Text, AsyncStorage, BackHandler, TextInput, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            user: '', Password: '', isChoosed: false,
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

    Login() {
        let _this = this
        firebase.auth().signInWithEmailAndPassword(this.state.user, this.state.Password)
            .then(user => {

                alert('เข้าสู่ระบบ สำเร็จ')
                this.props.navigation.navigate('HospitalSurat')

                console.log('ข้อมูลผู้ใช้: ', user)
            })
            .catch((e) => {
                if (e.code == 'auth/invalid-email') {
                    this.setState({ loadingLogin: false })
                    if ( global.lang == 'th') {
                        Alert.alert('เข้าสู่ระบบไม่สำเร็จ', 'กรุณากรอกข้อมูลให้ครบถ้วน', [{ text: 'ตกลง' }])
                    }
                    else {
                        Alert.alert('Login Failed', 'Please complete all fields', [{ text: 'OK' }])
                    }
                }
                else if (e.code == 'auth/user-not-found') {
                    this.setState({ loadingLogin: false })
                    if ( global.lang == 'th') {
                        Alert.alert('เข้าสู่ระบบไม่สำเร็จ', 'ไม่พบชื่อผู้ใช้งาน \n(' +  global.email + ')', [{ text: 'ตกลง' }])
                    }
                    else {
                        Alert.alert('Login Failed', 'user not found', [{ text: 'OK' }])
                    }
                }
                else if (e.code == 'auth/wrong-password') {
                    this.setState({ loadingLogin: false })
                    if ( global.lang == 'th') {
                        Alert.alert('เข้าสู่ระบบไม่สำเร็จ', 'รหัสผ่านไม่ถูกต้อง', [{ text: 'ตกลง' }])
                    }
                    else {
                        Alert.alert('Login Failed', 'wrong password', [{ text: 'OK' }])
                    }
                }
                else {
                    this.setState({ loadingLogin: false })
                    if ( global.lang == 'th') {
                        Alert.alert('เข้าสู่ระบบไม่สำเร็จ', e.message, [{ text: 'ตกลง' }])
                    }
                    else {
                        Alert.alert('Login Failed', e.message, [{ text: 'OK' }])
                    }
                }
            })
    }

    render() {
        return (
            <View style={styles.background}>
                <View behavior='padding' style={{ alignSelf: 'center', margin: 0 }}>

                    <View style={{ width: 350, height: 260, borderWidth: 1.5, borderRadius: 3, borderColor: '#CD5C5C', margin: 150 }}>
                        <View style={{ width: 335, alignSelf: 'center', borderRadius: 5, margin: 40, backgroundColor: '#FFFFFF' }}>
                            <View style={{ width: 280, height: 40, borderWidth: 1.5, borderRadius: 1.5, alignSelf: 'center', borderColor: 'pink', margin: 17, marginBottom: 10 }}>
                                <View style={{ width: 280, alignSelf: 'center', flexDirection: "row" }}>
                                    <View style={{ height: 37, width: 40, alignSelf: 'center', backgroundColor: 'pink' }}>
                                        <View style={{ alignSelf: 'center', margin: 3 }}>
                                            <Icon name="user" color="#FFFFFF" size={30} />
                                        </View>
                                    </View>
                                    <TextInput style={{ height: 37, width: 238, backgroundColor: '#FFFFFF' }}
                                        onChangeText={(user) => this.setState({ user })}
                                        value={this.state.user}
                                        placeholder={global.lang == 'th' ? 'ชื่อผู้ใช้' : 'Username'}
                                    />
                                </View>
                            </View>

                            <View style={{ width: 280, height: 40, borderWidth: 1.5, borderRadius: 1.5, marginBottom: 25, alignSelf: 'center', borderColor: 'pink' }}>
                                <View style={{ width: 280, alignSelf: 'center', flexDirection: "row" }}>
                                    <View style={{ width: 37, width: 40, alignSelf: 'center', backgroundColor: 'pink' }}>
                                        <View style={{ alignSelf: 'center', margin: 3.3 }}>
                                            <Icon name="lock" color="#FFFFFF" size={30} />
                                        </View>
                                    </View>
                                    <TextInput style={{ height: 37, width: 238, backgroundColor: '#FFFFFF' }}
                                        onChangeText={(Password) => this.setState({ Password })}
                                        value={this.state.Password}
                                        placeholder={global.lang == 'th' ? 'รหัสผ่าน' : 'Password'}
                                        secureTextEntry
                                    />
                                </View>
                            </View>

                            <View style={{ alignSelf: 'center', flexDirection: "row" }}>
                                <View style={{ marginBottom: 5 }}>
                                    <View style={{ height: 50, width: 145, alignSelf: 'center' }}>
                                        <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.Login()}>
                                            <Text style={{ color: '#FFFFFF', fontSize: 17, alignSelf: 'center', fontWeight: 'bold', margin: 7 }}>
                                                {global.lang == 'th' ? <Text>เข้าสู่ระบบ</Text> : <Text>Log in</Text>}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginBottom: 5 }}>
                                    <View style={{ height: 50, width: 120, alignSelf: 'center' }}>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                            <Text style={{ color: '#FF6347', fontSize: 17, alignSelf: 'center', fontWeight: 'bold', margin: 7 }}>
                                                {global.lang == 'th' ? <Text>สมัครสมาชิก</Text> : <Text>Register</Text>}</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', width: 200, alignSelf: 'center', borderRadius: 7, margin: 125, backgroundColor: '#CD5C5C' }}>
                        <Text style={{ fontSize: 37, color: '#FFFFFF', alignSelf: 'center', fontStyle: 'italic', fontWeight: 'bold' }}> LOGIN </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.flagBtn} onPress={() => !this.state.isChoosed ? this.setState({ langModal: true }) : null}>
                    {
                        global.lang == 'th' ?
                            <Animated.Image source={require('../th.png')} style={[styles.flag, { opacity: this.state.itemCenterOpacity }]} />
                            :
                            <Animated.Image source={require('../en.jpg')} style={[styles.flag, { opacity: this.state.itemCenterOpacity }]} />
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
                                <Image source={require('../th.png')} style={styles.flagInModal} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.chooseLang('en')}>
                                <Image source={require('../en.jpg')} style={styles.flagInModal} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        );
    }
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#FFF8DC',
    },
    flag: {
        width: 50,
        height: 50,
        borderRadius: 75
    },
    flagInModal: {
        width: 90,
        height: 55,
        borderRadius: 3
    },
    flagBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 10
    }
});
