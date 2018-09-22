import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as firebase from 'firebase';

// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyCGbNSmLxguRgIzPCgKRTX02_xwLdLe5JE",
//     authDomain: "seniordesignsolar-ee006.firebaseapp.com",
//     databaseURL: "https://seniordesignsolar-ee006.firebaseio.com",
//     projectId: "seniordesignsolar-ee006",
//     storageBucket: "seniordesignsolar-ee006.appspot.com",
//     messagingSenderId: "208341432008"
// };
//
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  componentWillMount(){
    // Initialize Firebase
    var config= {
        apiKey: "AIzaSyCGbNSmLxguRgIzPCgKRTX02_xwLdLe5JE",
        authDomain: "seniordesignsolar-ee006.firebaseapp.com",
        databaseURL: "https://seniordesignsolar-ee006.firebaseio.com",
        projectId: "seniordesignsolar-ee006",
        storageBucket: "seniordesignsolar-ee006.appspot.com",
        messagingSenderId: "208341432008"
    };

    firebase.initializeApp(config);
    console.log(firebase)

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to dReact Native Mat!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
