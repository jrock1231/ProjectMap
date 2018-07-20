import React, { Component } from 'react';
import {
    Platform,
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import HospitalScreen from './Hospital'
import AppScreen from './App'
import PlaceScreen from './Place'
import HotelScreen from './Hotel'
import AirportScreen from './Airport'
import Ho1Screen from './Hotel1'
import Ho2Screen from './Hotel2'
import Ho3Screen from './Hotel3'
import Ho4Screen from './Hotel4'
import Ho5Screen from './Hotel5'
import Ho6Screen from './Hotel6'
import Ho7Screen from './Hotel7'
import Ho8Screen from './Hotel8'
import Ho9Screen from './Hotel9'
import Ho10Screen from './Hotel10'
import jj11Screen from './JJ11'

export default createStackNavigator({
    App: {
        screen: AppScreen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Hospital: {
        screen: HospitalScreen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Place: {
        screen: PlaceScreen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Airport: {
        screen: AirportScreen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Hotel: {
        screen: HotelScreen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho1: {
        screen: Ho1Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho2: {
        screen: Ho2Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho3: {
        screen: Ho3Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho4: {
        screen: Ho4Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho5: {
        screen: Ho5Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho6: {
        screen: Ho6Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho7: {
        screen: Ho7Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho8: {
        screen: Ho8Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho9: {
        screen: Ho9Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    Ho10: {
        screen: Ho10Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
    JJ11: {
        screen: jj11Screen,
        navigationOptions: {
            headerStyle: { height: 0 }
        }
    },
}, {
        initialRouteName: 'App',
    }
);


