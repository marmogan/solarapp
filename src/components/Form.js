import React, {Component} from 'react';
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class Form extends Component<{}> {
    render() {
        return(

          <View style= {styles.container}>


            <TouchableOpacity style={styles.button}>

              <Text style={styles.buttonText}>Enter</Text>


            </TouchableOpacity>


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

  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 12
  },

  buttonText: {
    fontSize:50,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
