import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';
export default class Login extends Component<{}> {
  static navigationOptions = {
    headerStyle:{
      backgroundColor: "#1c313a"
    }
  };

  onPress = () =>{ this.props.navigation.navigate('Home');
    }
    render() {
        return(
            <View style={styles.container}>
              <Logo/>
              <TouchableOpacity style={styles.button}
                onPress={this.onPress} >

                <Text style={styles.buttonText}>Enter</Text>

              </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 60,
    paddingVertical: 12
  },

  buttonText: {
    fontSize:50,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'
  }
});
