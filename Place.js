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
            
                <View style={{ height: 70, width: 390, backgroundColor: '#66CDAA' }}>
                    <Text style={{ alignSelf: 'center', margin: 18, color: '#ffffff', fontSize: 35 }}>
                        {global.lang == 'th' ? <Text>แหล่งท่องเที่ยว</Text> : <Text>Place</Text>}</Text>

                    <TouchableOpacity style={{ position: 'absolute', margin: 17 }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name="angle-left" color="black" size={40} />
                    </TouchableOpacity>
                </View>

                 <View style={{ height: 180, width: 375 }}>
          
          <View style={{ position: 'absolute', margin: 4, alignSelf: 'center'  }}>
            <Image source={require('./AppPage/เที่ยว4.png')}
              style={{ width: 160, height: 160, margin: 1, alignSelf: 'center' }} />
          </View>
        </View>

                <View style={{ height: 300, width: 385, alignSelf: 'center' }}>
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
        backgroundColor: '#a4d4f2',
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
