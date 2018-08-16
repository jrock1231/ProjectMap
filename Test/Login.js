import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Dimensions, Animated, Modal, TouchableHighlight, Text, AsyncStorage, BackHandler, TextInput, KeyboardAvoidingView, firebase } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    render() {
        return (
            <View style={styles.background}>
                <KeyboardAvoidingView behavior='padding' style={{ alignSelf: 'center', margin: 0 }}>

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
                                        placeholder='Username'
                                    />
                                </View>
                            </View>

                            <View style={{ width: 280, height: 40, borderWidth: 1.5, borderRadius: 1.5, alignSelf: 'center', borderColor: 'pink' }}>
                                <View style={{ width: 280, alignSelf: 'center', flexDirection: "row" }}>
                                    <View style={{ width: 37, width: 40, alignSelf: 'center', backgroundColor: 'pink' }}>
                                        <View style={{ alignSelf: 'center', margin: 3.3 }}>
                                            <Icon name="lock" color="#FFFFFF" size={30} />
                                        </View>
                                    </View>
                                    <TextInput style={{ height: 37, width: 238, backgroundColor: '#FFFFFF' }}
                                        onChangeText={(Password) => this.setState({ Password })}
                                        value={this.state.Password}
                                        placeholder='Password'
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                            <View style={{ width: 310, alignSelf: 'center', flexDirection: "row" }}>
                                <View style={{ margin: 15, marginBottom: 5 }}>
                                    <View style={{ height: 50, width: 150, alignSelf: 'center' }}>
                                        <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('HospitalSurat')}>
                                            <Text style={{ color: '#FFFFFF', fontSize: 17, alignSelf: 'center', margin: 7 }}>
                                                เข้าสู่ระบบ</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ alignSelf: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                                        <Text style={{ color: '#FF6347', fontSize: 15, alignSelf: 'center', margin: 7 }}>
                                            สมัครสมาชิก</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ position: 'absolute', width: 200, alignSelf: 'center', borderRadius: 7, margin: 125, backgroundColor: '#CD5C5C' }}>
                        <Text style={{ fontSize: 37, color: '#FFFFFF', alignSelf: 'center', fontStyle: 'italic', fontWeight: 'bold' }}> LOGIN </Text>
                    </View>
                </KeyboardAvoidingView>
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
                <View style={{ margin: 15, marginBottom: 5 }}>
                    <View style={{ height: 50, width: 150, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('login_example')}>
                            <Text style={{ color: '#FFFFFF', fontSize: 17, alignSelf: 'center', margin: 7 }}>
                                เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ margin: 15, marginBottom: 5 }}>
                    <View style={{ height: 50, width: 150, alignSelf: 'center' }}>
                        <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('register_example')}>
                            <Text style={{ color: '#FFFFFF', fontSize: 17, alignSelf: 'center', margin: 7 }}>
                                เข้าสู่ระบบ</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
