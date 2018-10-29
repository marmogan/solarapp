import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import * as firebase from 'firebase';
import {createStackNavigator} from 'react-navigation';

import Login from './src/pages/Login'
import Home from './src/pages/Home'
import Solar from './src/pages/Solar'
import Power from './src/pages/Power'
import Electronics from './src/pages/Electronics'
import Tilt from './src/pages/Tilt'

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

export default class App extends Component<Props> {

  // componentWillMount(){
  //   // Initialize Firebase
  //   var config= {
  //     apiKey: "AIzaSyCGbNSmLxguRgIzPCgKRTX02_xwLdLe5JE",
  //     authDomain: "seniordesignsolar-ee006.firebaseapp.com",
  //     databaseURL: "https://seniordesignsolar-ee006.firebaseio.com",
  //     projectId: "seniordesignsolar-ee006",
  //     storageBucket: "seniordesignsolar-ee006.appspot.com",
  //     messagingSenderId: "208341432008"
  //   };
  //
  //   firebase.initializeApp(config);
  //   database = firebase.database();
  //   console.log(firebase)
  //
    // var ref = database.ref('items');
    // ref.on('value', gotData, errData);
    //
    // function gotData(data) {
    //   console.log(data.val());
    // }
    //
    // function errData(err) {
    //   console.log('Error');
    //   console.log(err);
    // }
  //
  // }



  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: Login,
  Home: Home,
  Power: Power,
  Solar: Solar,
  Electronics: Electronics,
  Tilt: Tilt
  // SolarCells: SolarCells,
  // Electronics: Electronics,
  // TiltStatus: TiltStatus,


})

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
