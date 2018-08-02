import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Linking, Alert, AsyncStorage, StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Place1 from './Place1.js'
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

    componentDidMount() {
        // if(global.lang == 'th'){
        //     Place1 = Place1_th
        // }
        // else {
        //     Place1 = Place1_en
        // }
    }

    lang(l) {

        // AsyncStorage.setItem('lang', l, () => alert('finish'))
        AsyncStorage.getItem('lang').then((l) => {
            global.lang = l
            alert(l)
        })
        // AsyncStorage.removeItem('lang', () => alert('finish delete'))
    }

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={{ height: 70, width: 375, backgroundColor: '#F8F8FF' }}>
                    <Text style={{ alignSelf: 'center', resizeMode: 'contain', margin: 19, color: 'black', fontSize: 25 }}>
                        สถานที่ท่องเที่ยว</Text>
                    <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="angle-left" color="black" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', alignSelf: 'flex-end' }} onPress={() => this.lang('th')}>
                        <Image source={require('./ภาษา.png')} style={{ width: 35, height: 35, margin: 20 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 150, width: 375 }}>
                    <Image source={require('./ท่องเที่ยว.png')}
                        style={{ alignSelf: 'center', width, height: 135, resizeMode: 'contain', margin: 10 }} />
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
                    <Place1 />
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
});
