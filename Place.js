import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Linking, Alert, AsyncStorage, Animated
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Place0 from './Place0.js'
const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});


export default class App extends Component {
    constructor() {
        super();
        this.state = {
            showmodal: false, showmodal1: false,
            text: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '', text11: '', text12: '', text13: '', text14: '',
            text15: '', text16: '', text17: '', text18: '', text19: '', text20: '', text21: '', text22: ''
        };
    }

    //componentDidMount() {
    // if(global.lang == 'th'){
    //     Place1 = Place1_th
    // }
    // else {
    //     Place1 = Place1_en
    // }
    //}

    //lang(l) {

    // AsyncStorage.setItem('lang', l, () => alert('finish'))
    ///AsyncStorage.getItem('lang').then((l) => {
    // global.lang = l
    // alert(l)
    //})
    // AsyncStorage.removeItem('lang', () => alert('finish delete'))
    //}

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
                    <Text style={{ alignSelf: 'center', margin: 20, color: 'black', fontSize: 25 }}>
                        {global.lang == 'th' ? <Text>ที่ท่องเที่ยว</Text> : <Text>Place</Text>}</Text>

                    <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="angle-left" color="black" size={40} />
                    </TouchableOpacity>
                </View>

                <View style={{ height: 150, width: 375 }}>
                    <View style={{ position: 'absolute', backgroundColor: 'red', alignSelf: 'center', width: 90, height: 90, borderRadius: 100, margin: 22 }}>
                    </View>
                    <Image source={require('./AppPage/กรอบ.png')}
                        style={{ position: 'absolute', alignSelf: 'center', width, height: 135, resizeMode: 'contain', margin: 10 }} />

                    <View style={{ position: 'absolute', width: 375, height: 110, margin: 1 }}>
                        <Image source={require('./AppPage/ท่องเที่ยว.png')}
                            style={{ width: 80, height: 80, margin: 27, alignSelf: 'center' }} />
                    </View>
                </View>

                <View style={{ height: 40 }}>
                    <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: 'gray', borderWidth: 2 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder='ค้นหา'
                    />
                    <View style={{ position: 'absolute', margin: 8, alignSelf: 'flex-end', width: 62 }}>
                        <Icon name="search" color="black" size={20} />
                    </View>
                </View>

                <View style={{ height: 305, width: 355, alignSelf: 'center' }}>
                    <Place0 />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#FFFF99',
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

});
