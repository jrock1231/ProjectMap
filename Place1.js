
import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableOpacity, TouchableHighlight, Image, Dimensions, ScrollView, TextInput, FlatList, Modal, Linking, Alert } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import p1 from './Place1.json'
import p2 from './Place2.json'
import p3 from './Place3.json'
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
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    height: 255, width: 360, alignSelf: 'center',
                    backgroundColor: '#FFFF99'
                }}>
                    <ScrollView>
                        <FlatList
                            data={p1}
                            renderItem={({ item }) =>

                                <TouchableOpacity style={styles.welcome}
                                    onPress={() => this.setState({
                                        showmodal: true,
                                        text1: item.name1,
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
                                                text1: item.name1,
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
                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 13, color: 'black', margin: 2 }}>
                                                {item.name}</Text>
                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 10, alignSelf: 'center' }}>
                                                {item.name2}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'column', justifyContent: 'center', height: 101, width: 18 }}>
                                            <Icon name="chevron-right" color="black" size={25} />
                                        </View>
                                    </View>

                                </TouchableOpacity>

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

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#FFFFCC', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#000033', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 320, alignSelf: 'center', margin: 20 }}>

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
                                <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.text7)} >
                                    <Image source={this.state.text14} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                            style={{ height: 50, width: 60, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'red', margin: 10 }}>OK</Text>
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

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#FFFFCC', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#000033', fontSize: 19 }}>
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
                            style={{ height: 50, width: 60, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'red', margin: 10 }}>OK</Text>
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
            text15: '', text16: '', text17: '', text18: '', text19: '', text20: '', text21: '', text22: ''
        };
    }

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    height: 255, width: 360, alignSelf: 'center',
                    backgroundColor: '#FFFF99'
                }}>
                    <ScrollView>
                        <FlatList
                            data={p2}
                            renderItem={({ item }) =>

                                <TouchableOpacity style={styles.welcome}
                                    onPress={() => this.setState({
                                        showmodal: true,
                                        text1: item.name1,
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
                                                text1: item.name1,
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
                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 13, color: 'black', margin: 2 }}>
                                                {item.name}</Text>
                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 10, alignSelf: 'center' }}>
                                                {item.name2}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'column', justifyContent: 'center', height: 101, width: 18 }}>
                                            <Icon name="chevron-right" color="black" size={25} />
                                        </View>
                                    </View>

                                </TouchableOpacity>

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

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#FFFFCC', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#000033', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 320, alignSelf: 'center', margin: 20 }}>

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
                                <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.text7)} >
                                    <Image source={this.state.text14} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                            style={{ height: 50, width: 60, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'red', margin: 10 }}>OK</Text>
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

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#FFFFCC', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#000033', fontSize: 19 }}>
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
                            style={{ height: 50, width: 60, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'red', margin: 10 }}>OK</Text>
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
    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    height: 255, width: 360, alignSelf: 'center',
                    backgroundColor: '#FFFF99'
                }}>
                    <ScrollView>
                        <FlatList
                            data={p3}
                            renderItem={({ item }) =>

                                <TouchableOpacity style={styles.welcome}
                                    onPress={() => this.setState({
                                        showmodal: true,
                                        text1: item.name1,
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
                                                text1: item.name1,
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
                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 13, color: 'black', margin: 2 }}>
                                                {item.name}</Text>
                                            <Text style={{ flexDirection: "row", justifyContent: 'space-between', fontSize: 10, alignSelf: 'center' }}>
                                                {item.name2}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'column', justifyContent: 'center', height: 101, width: 18 }}>
                                            <Icon name="chevron-right" color="black" size={25} />
                                        </View>
                                    </View>

                                </TouchableOpacity>

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

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#FFFFCC', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#000033', fontSize: 19 }}>
                                {this.state.text1}</Text>
                        </View>

                        <ScrollView style={{ height: 290, width: 320, alignSelf: 'center', margin: 20 }}>

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
                                <TouchableOpacity style={{}} onPress={() => Linking.openURL(this.state.text7)} >
                                    <Image source={this.state.text14} style={{ alignSelf: 'center', margin: 15, height: 180, width: 310, borderRadius: 5 }} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>

                        <TouchableOpacity onPress={() => this.setState({ showmodal: false })}
                            style={{ height: 50, width: 60, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'red', margin: 10 }}>OK</Text>
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

                    <View style={{ position: 'absolute', width: width - 30, height: 450, backgroundColor: '#FFFFCC', marginTop: height * 0.1, margin: 15, borderRadius: 10 }}>

                        <View style={{ marginBottom: 10, margin: 30, alignSelf: 'center' }}>
                            <Text style={{ color: '#000033', fontSize: 19 }}>
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
                            style={{ height: 50, width: 60, alignSelf: 'center' }}>
                            <Text style={{ fontSize: 18, color: 'red', margin: 10 }}>OK</Text>
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
        backgroundColor: '#FFFF99',
    },
    welcome: {
        height: 101,
        width: 355,
        alignSelf: 'center',
        margin: 2.5,
        backgroundColor: '#996600',
        borderRadius: 2
    },
    instructions: {
        height: 65,
        width: 315,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: 'flex-start',
        flexWrap: "wrap",
        alignSelf: 'center',
        backgroundColor: '#CCFF99',
        borderRadius: 5,
        margin: 10

    },
});
export default createBottomTabNavigator({
    ที่เที่ยว: {
        screen: Home,
        navigationOptions: {
            showIcon: true,
            tabBarLabe: 'Home',
            tabBarIcon: ({ tintColor }) => {
                <Icon name="chevron-right" color={tintColor} size={20} />
            }
        }
    },
    ที่กิน: {
        screen: SettingsScreen,
        navigationOptions: {
            tabBarLabe: 'SettingsScreen',
            tabBarIcon: ({ tintColor }) => {
                <Icon name="chevron-right" color={tintColor} size={20} />
            }
        }
    },
    ที่ช้อปปิ้ง: {
        screen: SettingsScreen1,
        navigationOptions: {
            tabBarLabe: 'SettingsScreen1',
            tabBarIcon: ({ tintColor }) => {
                <Icon name="chevron-right" color={tintColor} size={20} />
            }
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'blue',
            style: {
                backgroundColor: '#DCDCDC',
            },
            indicatorStyle: {
                height: 0
            },
            showIcon: true
        }
    });
