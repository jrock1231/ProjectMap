import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Alert, Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HospitalSurat_th from '../Test/HospitalSurat_th.json'
import HospitalSurat_en from '../Test/HospitalSurat_en.json'

const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            showmodal: false, showmodal1: false,
            text: '', name: '', name1: '', location: '', number: '', Web: '', Web1: '', form: '', Map: '', Map1: '', Taxi: '', Bus: '', Tuk: '', Van: '', Train: '', Icon1: '', Icon2: ''
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

                <View style={{ height: 70, width: 375, alignSelf: 'center', backgroundColor: '#CD5C5C' }}>
                    <Text style={{ alignSelf: 'center', margin: 10, color: '#FFFFFF', fontWeight: 'bold', fontSize: 40 }}>
                        {global.lang == 'th' ? <Text>โรงพยาบาล</Text> : <Text>Hospital</Text>}</Text>
                    <View style={{ position: 'absolute', height: 70, width: 35 }}>
                        <TouchableOpacity style={{ margin: 9, alignSelf: 'flex-end' }} onPress={() => this.props.navigation.goBack()}>
                            <Icon name="angle-left" color="#FFFFFF" size={50} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 430, width: 350, alignSelf: 'center', borderColor: '#CD5C5C', borderRadius: 5, borderWidth: 1.5, margin: 39 }}>
                    <View style={{ height: 380, width: 335, alignSelf: 'center', borderRadius: 5, backgroundColor: '#FFFFFF', margin: 30 }}>
                        <View style={{ height: 346, width: 320, alignSelf: 'center', margin: 17 }}>
                            <ScrollView>
                                {/* {global.lang == 'en' || HospitalSurat_th.filter(HospitalSurat => { return HospitalSurat.name.indexOf(this.state.text) > -1 })[0] || this.state.text == '' ?
              null :
              <Text>ไม่พบ '{this.state.text}'</Text>
            }
            {!global.lang || global.lang == 'th' || HospitalSurat_en.filter(HospitalSurat => { return HospitalSurat.name.indexOf(this.state.text) > -1 })[0] || this.state.text == '' ?
              null :
              <Text>Not found '{this.state.text}'</Text>
            } */}

                                {!global.lang || global.lang == 'th' ?
                                    HospitalSurat_th.filter(HospitalSurat => { return HospitalSurat.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                        <Text style={{ fontSize: 18, color: 'red' }}>   ไม่พบ '{this.state.text}'</Text>
                                        :
                                        null
                                    :
                                    HospitalSurat_en.filter(HospitalSurat => { return HospitalSurat.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                        <Text style={{ fontSize: 18, color: 'red' }}>   Not found '{this.state.text}'</Text>
                                        :
                                        null
                                }

                                {console.log(HospitalSurat_th.filter(HospitalSurat => { return HospitalSurat.name.indexOf(this.state.text) > -1 }))}
                                <FlatList
                                    data={global.lang == 'th' ? HospitalSurat_th : HospitalSurat_en}
                                    extraData={this.state.text}
                                    renderItem={({ item }) =>
                                        <View>
                                            {item.name.indexOf(this.state.text) > -1 ?
                                                <TouchableOpacity style={styles.welcome} onPress={() => this.setState({
                                                    showmodal: true,
                                                    name: item.name,
                                                    location: item.location,
                                                    number: item.number,
                                                    number1: item.number1,
                                                    Icon1: item.Icon1,
                                                    Icon2: item.Icon2,
                                                    Web: item.Web,
                                                    Web1: item.Web1,
                                                    form: item.form,
                                                    Map: item.Map,
                                                    Map1: item.Map1,
                                                    Taxi: item.Taxi,
                                                    Bus: item.Bus,
                                                    Tuk: item.Tuk,
                                                    Van: item.Van,
                                                    Train: item.Train,

                                                })}>

                                                    <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
                                                        <View style={{ alignSelf: 'center', margin: 5 }}>
                                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 18, color: '#663300' }}>
                                                                {item.name}</Text>
                                                        </View>
                                                        <View style={{ width: 40, backgroundColor: 'pink', alignSelf: 'center' }}>
                                                            <View style={{ alignSelf: 'flex-end', margin: 4 }}>
                                                                <Icon name="chevron-right" color="#FFFFFF" size={35} />
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
                                <TouchableHighlight onPress={() => this.setState({ showmodal: false })}
                                    style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
                                    <View></View>
                                </TouchableHighlight>

                                <View style={{ position: 'absolute', backgroundColor: '#FFF8DC', height: 570, width: 375, alignSelf: 'center' }}>

                                    <View style={{ height: 70, width: 375, alignSelf: 'center', backgroundColor: '#CD5C5C' }}>
                                        <Text style={{ alignSelf: 'center', margin: 22, color: '#FFFFFF', fontWeight: 'bold', fontSize: 23.5 }}>
                                            {this.state.name}</Text>
                                        <View style={{ position: 'absolute', height: 70, width: 35 }}>
                                            <TouchableOpacity style={{ margin: 9, alignSelf: 'flex-end' }} onPress={() => this.setState({ showmodal: false })}>
                                                <Icon name="angle-left" color="#FFFFFF" size={50} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                    <View style={{ alignSelf: 'center', width: 355, height: 385, alignSelf: 'center', borderWidth: 1.5, borderRadius: 5, borderColor: '#CD5C5C', margin: 88 }}>
                                        <View style={{ alignSelf: 'center', width: 335, height: 278, alignSelf: 'center', borderRadius: 5, backgroundColor: '#FFFFFF', margin: 95 }}>
                                            <View style={{ width: 320, height: 262, alignSelf: 'center', margin: 8 }}>
                                                <ScrollView style={{ alignSelf: 'center', width: 325 }}>
                                                    <View style={{ alignSelf: 'center', height: 145, width: 320 }}>

                                                        <View style={{ flexDirection: "row", margin: 3 }}>
                                                            <View style={{ width: 37, backgroundColor: 'pink', alignSelf: 'center' }}>
                                                                <View style={{ alignSelf: 'center', margin: 4 }}>
                                                                    <Icon name="home" color="#FFFFFF" size={29} />
                                                                </View>
                                                            </View>
                                                            <View style={{ alignSelf: 'center' }}>
                                                                <Text style={{ color: '#663300', fontSize: 15 }}>{this.state.location}</Text>
                                                            </View>
                                                        </View>

                                                        <View style={{ flexDirection: "row", margin: 3 }}>
                                                            <View style={{ width: 37, backgroundColor: 'pink', alignSelf: 'center' }}>
                                                                <View style={{ alignSelf: 'center', margin: 3 }}>
                                                                    <Icon name="phone" color="#FFFFFF" size={29} />
                                                                </View>
                                                            </View>
                                                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Linking.openURL(this.state.number)} >
                                                                <Text style={{ color: this.state.Icon1, fontSize: 15 }}> {this.state.number1}</Text>
                                                            </TouchableOpacity>
                                                        </View>

                                                        <View style={{ flexDirection: "row", margin: 3 }}>
                                                            <View style={{ width: 37, backgroundColor: 'pink', alignSelf: 'center' }}>
                                                                <View style={{ alignSelf: 'center', margin: 4 }}>
                                                                    <Icon name="globe" color="#FFFFFF" size={29} />
                                                                </View>
                                                            </View>
                                                            <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => Linking.openURL(this.state.Web)} >
                                                                <Text style={{ color: this.state.Icon2, fontSize: 15 }}>{this.state.Web1}</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>

                                                    <View style={{ height: 50, alignSelf: 'center' }}>
                                                        <TouchableOpacity style={{ height: 40, width: 170, backgroundColor: '#FF6347', borderRadius: 5, margin: 5 }} onPress={() => Linking.openURL(this.state.Map)} >
                                                            <Text style={{ color: '#FFFFFF', fontSize: 17, alignSelf: 'center', margin: 7 }}>ดูบน Google Maps</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={{ height: 200, width: 335, alignSelf: 'center', marginBottom: 25 }}>
                                                        <TouchableOpacity onPress={() => Linking.openURL(this.state.Map)} >
                                                            <Image source={this.state.Map1} style={{ alignSelf: 'center', margin: 5, height: 195, width: 310, borderRadius: 5 }} />
                                                        </TouchableOpacity>
                                                    </View>

                                                </ScrollView>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ position: 'absolute', alignSelf: 'center', margin: 10 }}>
                                    <View style={{ alignSelf: 'center', width: 150, height: 150, borderRadius: 75, resizeMode: 'contain', backgroundColor: '#CD5C5C', margin: 75 }}>
                                        <View style={{ alignSelf: 'center', width: 115, height: 115, borderRadius: 75, resizeMode: 'contain', backgroundColor: '#FFF8DC', margin: 18 }}>
                                            <Image source={this.state.form}
                                                style={{ alignSelf: 'center', width: 95, height: 95, resizeMode: 'contain', margin: 10.5 }} />
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                    </View>
                </View>
                <View style={{ position: 'absolute', height: 43, width: 320, alignSelf: 'center', borderColor: '#CD5C5C', borderRadius: 5, borderWidth: 2, backgroundColor: '#FFFFFF', margin: 88 }}>
                    <TextInput style={{ height: 40, width: 300, alignSelf: 'center' }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                        placeholder='ค้นหา'
                    />
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8DC',
    },
    welcome: {
        width: 310,
        height: 46,
        borderWidth: 3,
        borderRadius: 3,
        alignSelf: 'center',
        borderColor: 'pink',
        backgroundColor: '#FFFFFF',
        margin: 3
    },
});
