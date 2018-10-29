import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
export default class Solar extends Component<{}> {
  static navigationOptions = {
    headerStyle:{
      backgroundColor: "#1c313a"
    }
  };

  // onPress = () =>{ this.props.navigation.navigate('Home');

    render() {
        return(
            <View style={styles.container}>
              <Logo/>
              <Text>
                Solar Statistics
              </Text>
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
    borderRadius: 15,
    marginVertical: 30,
    paddingVertical: 2
  },

  buttonText: {
    fontSize:50,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'
  }
});
