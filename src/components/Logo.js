import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar,Image} from 'react-native';

export default class Logo extends Component<{}> {
    render() {
        return(

          <View style= {styles.container}>

            <Image style={{width:150, height:200}}
            source = {require('../images/Logo.png')}/>

            <Text style={styles.logoText}>Welcome to the Solar Tracker App</Text>

          </View>


        )
    }
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  logoText: {
    marginVertical: 15,
    fontSize:25,
    color:'rgba(255,255,255,0.7)'
  }
});
