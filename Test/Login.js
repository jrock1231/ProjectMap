import React, { Component } from 'react';
import { StyleSheet, View, Platform, TouchableOpacity, Image, Dimensions, Animated, Modal, TouchableHighlight, Text, AsyncStorage, BackHandler, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            User: '', Password: ''
        };
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
                                        onChangeText={(User) => this.setState({ User })}
                                        value={this.state.User}
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
                                        <TouchableOpacity style={{ backgroundColor: '#FF6347', borderRadius: 5 }} onPress={() => this.props.navigation.navigate('Hospital')}>
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
            </View >
        );
    }
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        backgroundColor: '#FFF8DC',
    },
});
