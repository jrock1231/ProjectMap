
import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Linking, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import p1_th from './Place1_th.json'
import p2_th from './Place2_th.json'
import p3_th from './Place3_th.json'
import p1_en from './Place1_en.json'
import p2_en from './Place2_en.json'
import p3_en from './Place3_en.json'
const { width, height } = Dimensions.get("window");
const instructions = Platform.select({

});

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            showmodal: false, showmodal1: false,
            text: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '', text11: '', text12: '', text13: '', text14: '',
            text15: '', text16: '', text17: '', text18: '', text19: '', text20: '', text21: '', text22: ''
        };
    }

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
                <View style={{
                    height: 287, width: 360, alignSelf: 'center',
                    backgroundColor: '#a4d4f2'
                }}>
                    <View style={{ height: 40 }}>
                        <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: '#ffffff', borderWidth: 2 }}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            placeholder='ค้นหา'
                        />
                    </View>
                    <ScrollView>
                        {!global.lang || global.lang == 'th' ?
                            p1_th.filter(p1 => { return p1.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                <Text style={{ margin: 3 }}>ไม่พบ '{this.state.text}'</Text>
                                :
                                null
                            :
                            p1_en.filter(p1 => { return p1.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                <Text style={{ margin: 3 }}>Not found '{this.state.text}'</Text>
                                :
                                null
                        }

                        {console.log(p1_th.filter(p1 => { return p1.name.indexOf(this.state.text) > -1 }))}
                        <FlatList
                            data={global.lang == 'th' ? p1_th : p1_en}
                            extraData={this.state.text}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <View>
                                    {item.name.indexOf(this.state.text) > -1 ?
                                        <TouchableOpacity style={styles.welcome}
                                            onPress={() => this.setState({
                                                showmodal: true,
                                                text1: item.name,
                                                text2: item.place,
                                                text3: item.place1,
                                                text4: item.number1,
                                                text5: item.Web,
                                                text6: item.Webmap,
                                                text7: item.Map,
                                                text8: item.Map1,
                                                text9: item.Taxi,
                                                text10: item.Bus,
                                                text11: item.Tuk,
                                                text12: item.Van,
                                                text13: item.Train,
                                                text14: item.Mapform,
                                            })}>

                                            <View style={{ flexDirection: "row", margin: 0 }}>

                                                <View style={{ height: 100, width: 117, margin: 0, alignSelf: 'center' }}>
                                                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.setState({
                                                        showmodal1: true,
                                                        text1: item.name,
                                                        text15: item.form1,
                                                        text16: item.form2,
                                                        text17: item.form3,
                                                        text18: item.form4,
                                                        text19: item.form5,
                                                        text20: item.form6,
                                                        text21: item.form7,
                                                    })}>
                                                        <Image source={item.form} style={{ alignSelf: 'center', width: 110, height: 95, resizeMode: 'contain', margin: 3 }} />
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={{ height: 100, width: 220, alignSelf: 'center' }}>
                                                    <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 13, color: 'back', margin: 2 }}>
                                                        {item.name}</Text>
                                                    <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 10, alignSelf: 'center' }}>
                                                        {item.name2}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', justifyContent: 'center', height: 101, width: 18 }}>
                                                    <Icon name="chevron-right" color="#00EEEE'" size={20} />
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                        :
                                        null
                                    }

                                </View>
                            } />
                    </ScrollView>
                </View>

                <Modal
                    visible={this.state.showmodal}
                    transparent={true}
                    onRequestClose={() => this.setState({ showmodal: false })}
                    animationType={'fade'}
                >
                    <TouchableHighlight
                        onPress={() => this.setState({ showmodal: false })}
                        style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
                        <View></View>
                    </TouchableHighlight>

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#dedfd7', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#185373', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 330, alignSelf: 'center', margin: 20 }}>

                            <View style={{ alignSelf: 'center', height: 100, width: 300 }}>
                                <View style={{ flexDirection: 'column', resizeMode: 'contain', margin: 5 }}>
                                    <Icon name="home" color="black" size={30} style={{ alignSelf: 'center' }} />
                                    <Text style={{ alignSelf: 'center', color: '#000033', fontSize: 17, marginBottom: 0 }}> {this.state.text2}</Text>
                                    <Text style={{ alignSelf: 'center', color: '#000033', fontSize: 17, marginBottom: 0 }}> {this.state.text3}</Text>
                                </View>
                            </View>
                            <View style={styles.instructions}>
                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text9
                                    ))}>
                                    <Image source={require('./Taxi.png')} style={{ margin: 3, width: 60, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text10
                                    ))}>
                                    <Image source={require('./Bus.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text11
                                    ))}>
                                    <Image source={require('./Tuk.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text12
                                    ))}>
                                    <Image source={require('./Van.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text13
                                    ))}>
                                    <Image source={require('./Train.png')} style={{ margin: 3, width: 41, height: 55 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                height: 40, alignSelf: 'center'
                            }}>
                                <TouchableOpacity style={{ margin: 15 }} onPress={() => Linking.openURL(this.state.text6)} >
                                    <Text style={{ color: 'blue', fontSize: 17 }}>{this.state.text7}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                height: 200, width: 310, alignSelf: 'center',
                                marginBottom: 25
                            }}>
                                <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.text6)} >
                                    <Image source={this.state.text14} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                            style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    visible={this.state.showmodal1}
                    transparent={true}
                    onRequestClose={() => this.setState({ showmodal1: true })}
                    animationType={'fade'}
                >
                    <TouchableHighlight
                        onPress={() => this.setState({ showmodal1: true })}
                        style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
                        <View></View>
                    </TouchableHighlight>

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#dedfd7', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#185373', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 320, alignSelf: 'center' }}>
                            <Image source={this.state.text15} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text16} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text17} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text18} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text19} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text20} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text21} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal1: false })}
                            style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            showmodal: false, showmodal1: false,
            text: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '', text11: '', text12: '', text13: '', text14: '',
            text15: '', text16: '', text17: '', text18: '', text19: '', text20: '', text21: '', text22: '', text23: '', text24: '', text25: '', text26: '', text27: '', text28: '', text29: '', text30: '', text31: '',
        };
    }

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
                <View style={{
                    height: 287, width: 360, alignSelf: 'center',
                    backgroundColor: '#a4d4f2'
                }}>
                    <View style={{ height: 40 }}>
                        <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: 'gray', borderWidth: 2 }}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            placeholder='ค้นหา'
                        />
                    </View>
                    <ScrollView>
                        {!global.lang || global.lang == 'th' ?
                            p2_th.filter(p2 => { return p2.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                <Text style={{ margin: 3 }}>ไม่พบ '{this.state.text}'</Text>
                                :
                                null
                            :
                            p2_en.filter(p2 => { return p2.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                <Text style={{ margin: 3 }}>Not found '{this.state.text}'</Text>
                                :
                                null
                        }

                        {console.log(p2_th.filter(p2 => { return p2.name.indexOf(this.state.text) > -1 }))}
                        <FlatList
                            data={global.lang == 'th' ? p2_th : p2_en}
                            extraData={this.state.text}
                            renderItem={({ item }) =>
                                <View>
                                    {item.name.indexOf(this.state.text) > -1 ?
                                        <TouchableOpacity style={styles.welcome}
                                            onPress={() => this.setState({
                                                showmodal: true,
                                                text1: item.name,
                                                text2: item.place,
                                                text3: item.place1,
                                                text4: item.number1,
                                                text5: item.Web,
                                                text6: item.Webmap,
                                                text7: item.Map,
                                                text8: item.Map1,
                                                text9: item.Taxi,
                                                text10: item.Bus,
                                                text11: item.Tuk,
                                                text12: item.Van,
                                                text13: item.Train,
                                                text14: item.Mapform,
                                            })}>

                                            <View style={{ flexDirection: "row", margin: 0 }}>

                                                <View style={{ height: 100, width: 117, margin: 0, alignSelf: 'center' }}>
                                                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.setState({
                                                        showmodal1: true,
                                                        text1: item.name,
                                                        text15: item.form1,
                                                        text16: item.form2,
                                                        text17: item.form3,
                                                        text18: item.form4,
                                                        text19: item.form5,
                                                        text20: item.form6,
                                                        text21: item.form7,
                                                        text22: item.form8,
                                                        text23: item.form9,
                                                        text24: item.form10,
                                                        text25: item.form11,
                                                        text26: item.form12,
                                                        text27: item.form13,
                                                        text28: item.form14,
                                                        text29: item.form15,
                                                        text30: item.form16,
                                                        text31: item.form17,
                                                    })}>
                                                        <Image source={item.form} style={{ alignSelf: 'center', width: 110, height: 95, resizeMode: 'contain', margin: 3 }} />
                                                    </TouchableOpacity>
                                                </View>

                                                <View style={{ height: 100, width: 220, alignSelf: 'center' }}>
                                                    <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 13, color: '#185373', margin: 2 }}>
                                                        {item.name}</Text>
                                                    <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 10, alignSelf: 'center' }}>
                                                        {item.name2}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', justifyContent: 'center', height: 101, width: 18 }}>
                                                    <Icon name="chevron-right" color="#00EEEE'" size={20} />
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                        :
                                        null
                                    }

                                </View>
                            } />
                    </ScrollView>
                </View>

                <Modal
                    visible={this.state.showmodal}
                    transparent={true}
                    onRequestClose={() => this.setState({ showmodal: false })}
                    animationType={'fade'}
                >
                    <TouchableHighlight
                        onPress={() => this.setState({ showmodal: false })}
                        style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
                        <View></View>
                    </TouchableHighlight>

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#dedfd7', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#185373', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 330, alignSelf: 'center', margin: 20 }}>

                            <View style={{ alignSelf: 'center', height: 100, width: 350 }}>
                                <View style={{ flexDirection: 'column', resizeMode: 'contain', margin: 5 }}>
                                    <Icon name="home" color="black" size={30} style={{ alignSelf: 'center' }} />
                                    <Text style={{ alignSelf: 'center', color: '#000033', fontSize: 17, marginBottom: 0 }}> {this.state.text2}</Text>
                                    <Text style={{ alignSelf: 'center', color: '#000033', fontSize: 17, marginBottom: 0 }}> {this.state.text3}</Text>
                                </View>
                            </View>
                            <View style={styles.instructions}>
                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text9
                                    ))}>
                                    <Image source={require('./Taxi.png')} style={{ margin: 3, width: 60, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text10
                                    ))}>
                                    <Image source={require('./Bus.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text11
                                    ))}>
                                    <Image source={require('./Tuk.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text12
                                    ))}>
                                    <Image source={require('./Van.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text13
                                    ))}>
                                    <Image source={require('./Train.png')} style={{ margin: 3, width: 41, height: 55 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                height: 40, alignSelf: 'center'
                            }}>
                                <TouchableOpacity style={{ margin: 15 }} onPress={() => Linking.openURL(this.state.text6)} >
                                    <Text style={{ color: 'blue', fontSize: 17 }}>{this.state.text7}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                height: 200, width: 310, alignSelf: 'center',
                                marginBottom: 25
                            }}>
                                <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.text6)} >
                                    <Image source={this.state.text14} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                            style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    visible={this.state.showmodal1}
                    transparent={true}
                    onRequestClose={() => this.setState({ showmodal1: true })}
                    animationType={'fade'}
                >
                    <TouchableHighlight
                        onPress={() => this.setState({ showmodal1: true })}
                        style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
                        <View></View>
                    </TouchableHighlight>

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#dedfd7', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#185373', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 320, alignSelf: 'center' }}>
                            <Image source={this.state.text15} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text16} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text17} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text18} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text19} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text20} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text21} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text22} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text23} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text24} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text25} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text26} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text27} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text28} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text29} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text30} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                            <Image source={this.state.text31} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal1: false })}
                            style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}

class SettingsScreen1 extends React.Component {
    constructor() {
        super();
        this.state = {
            showmodal: false, showmodal1: false,
            text: '', text1: '', text2: '', text3: '', text4: '', text5: '', text6: '', text7: '', text8: '', text9: '', text10: '', text11: '', text12: '', text13: '', text14: '',
            text15: '', text16: '', text17: '', text18: '', text19: '', text20: '', text21: '', text22: ''
        };
    }

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
                <View style={{
                    height: 287, width: 360, alignSelf: 'center',
                    backgroundColor: '#a4d4f2'
                }}>
                    <View style={{ height: 40 }}>
                        <TextInput style={{ height: 35, width: 305, borderRadius: 15, alignSelf: 'center', borderColor: 'gray', borderWidth: 2 }}
                            onChangeText={(text) => this.setState({ text })}
                            value={this.state.text}
                            placeholder='ค้นหา'
                        />
                    </View>
                    <ScrollView>
                        {!global.lang || global.lang == 'th' ?
                            p3_th.filter(p3 => { return p3.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                <Text style={{ margin: 3 }}>ไม่พบ '{this.state.text}'</Text>
                                :
                                null
                            :
                            p3_en.filter(p3 => { return p3.name.indexOf(this.state.text) > -1 }).length == 0 && this.state.text != '' ?
                                <Text style={{ margin: 3 }}>Not found '{this.state.text}'</Text>
                                :
                                null
                        }

                        {console.log(p3_th.filter(p3 => { return p3.name.indexOf(this.state.text) > -1 }))}
                        <FlatList
                            data={global.lang == 'th' ? p3_th : p3_en}
                            extraData={this.state.text}
                            renderItem={({ item }) =>
                                <View>
                                    {item.name.indexOf(this.state.text) > -1 ?
                                        <TouchableOpacity style={{
                                            height: 45, width: 355, alignSelf: 'center', margin: 4, backgroundColor: '#ffffff', borderRadius: 2, borderColor: '#00EEEE', borderWidth: 2
                                        }}
                                            onPress={() => this.setState({
                                                showmodal: true,
                                                text1: item.name,
                                                text2: item.place,
                                                text3: item.place1,
                                                text4: item.number1,
                                                text5: item.Web,
                                                text6: item.Webmap,
                                                text7: item.Map,
                                                text8: item.Map1,
                                                text9: item.Taxi,
                                                text10: item.Bus,
                                                text11: item.Tuk,
                                                text12: item.Van,
                                                text13: item.Train,
                                                text14: item.Mapform,
                                            })}>

                                            <View style={{ flexDirection: "row" }}>

                                                <View style={{ height: 45, width: 93, alignSelf: 'center' }}>
                                                    <Image source={item.form} style={{ alignSelf: 'center', width: 88, height: 45, resizeMode: 'contain' }} />
                                                </View>

                                                <View style={{ height: 35, width: 2, alignSelf: 'center', backgroundColor: '#185373' }}></View>

                                                <View style={{ height: 45, width: 240, alignSelf: 'center' }}>
                                                    <Text style={{ flexDirection: "row", fontSize: 15, color: '#185373', margin: 11 }}>
                                                        {item.name}</Text>
                                                </View>

                                                <View style={{ flexDirection: 'column', justifyContent: 'center', height: 45, width: 18 }}>
                                                    <Icon name="chevron-right" color="#00EEEE" size={15} />
                                                </View>
                                            </View>

                                        </TouchableOpacity>
                                        :
                                        null
                                    }

                                </View>
                            } />
                    </ScrollView>
                </View>

                <Modal
                    visible={this.state.showmodal}
                    transparent={true}
                    onRequestClose={() => this.setState({ showmodal: false })}
                    animationType={'fade'}
                >
                    <TouchableHighlight
                        onPress={() => this.setState({ showmodal: false })}
                        style={{ backgroundColor: '#000000', opacity: 0.5, flex: 1 }}>
                        <View></View>
                    </TouchableHighlight>

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#dedfd7', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#185373', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 320, alignSelf: 'center', margin: 20 }}>

                            <View style={{ alignSelf: 'center', width: 310 }}>

                                <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                                    <Icon name="home" color="black" size={23} />
                                    <Text style={{ color: '#000033', fontSize: 15, marginBottom: 15, margin: 1 }}>{this.state.text2}</Text>
                                </View>
                                <View style={{ flexDirection: "row", resizeMode: 'contain', margin: 5 }}>
                                    <Icon name="clock-o" color="black" size={23} />
                                    <Text style={{ color: '#000033', fontSize: 15, marginBottom: 15, margin: 1 }}>{this.state.text3}</Text>
                                </View>
                            </View>

                            <View style={styles.instructions}>
                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text9
                                    ))}>
                                    <Image source={require('./Taxi.png')} style={{ margin: 3, width: 60, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text10
                                    ))}>
                                    <Image source={require('./Bus.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text11
                                    ))}>
                                    <Image source={require('./Tuk.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text12
                                    ))}>
                                    <Image source={require('./Van.png')} style={{ margin: 3, width: 55, height: 55 }} />
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => this.setState(
                                    Alert.alert(
                                        'รายละเอียด',
                                        this.state.text13
                                    ))}>
                                    <Image source={require('./Train.png')} style={{ margin: 3, width: 41, height: 55 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{
                                height: 40, alignSelf: 'center'
                            }}>
                                <TouchableOpacity style={{ margin: 15 }} onPress={() => Linking.openURL(this.state.text6)} >
                                    <Text style={{ color: 'blue', fontSize: 17 }}>{this.state.text7}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                height: 200, width: 310, alignSelf: 'center',
                                marginBottom: 25
                            }}>
                                <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.text6)} >
                                    <Image source={this.state.text14} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                            style={{ alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'blue', margin: 10 }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'center',
        backgroundColor: '#dedfd7',
    },
    welcome: {
        height: 101,
        width: 355,
        alignSelf: 'center',
        margin: 2.5,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        borderColor: '#00EEEE',
        borderWidth: 2
    },
    instructions: {
        height: 65,
        width: 315,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'flex-start',
        flexWrap: "wrap",
        alignSelf: 'center',
        backgroundColor: '#a4d4f2',
        borderRadius: 5,
        margin: 10

    },
});
export default TabNavigator({
    ที่เที่ยว: {
        screen: Home,
        navigationOptions: {
            tabBarLabe: 'Home',
            tabBarIcon: ({ tintColor }) => <Image style={{ width: 32, height: 32 }} source={require('./1.png')} />
        },
    },
    ที่กิน: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabe: 'SettingsScreen',
            tabBarIcon: ({ tintColor }) => <Image style={{ width: 32, height: 32 }} source={require('./2.png')} />
        },
    },
    ที่ช้อปปิ้ง: {
        screen: SettingsScreen1,
        navigationOptions: {
            tabBarLabe: 'SettingsScreen1',
            tabBarIcon: ({ tintColor }) => <Image style={{ width: 32, height: 32 }} source={require('./3.png')} />
        },
    },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'blue',
            style: {
                backgroundColor: '#FFFFFF',
                height: 57
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true
        }
    });
