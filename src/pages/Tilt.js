import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';

import Logo from '../components/Logo';
import ItemComponent from '../components/ItemComponent';
import {db} from '../config/db';
let itemsRef = db.ref('/items');

export default class Tilt extends Component<{}> {
    state = {
      items: []
    }
  static navigationOptions = {
    headerStyle:{
      backgroundColor: "#1c313a"
    }
  };



  componentDidMount() {
    itemsRef.on('value', (snapshot) => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({items});
      console.log(items)
    });


    itemsRef.on('value', gotData, errData);

        function gotData(data) {
          console.log(data.val());
        }

        function errData(err) {
          console.log('Error');
          console.log(err);
        }
  }

  // onPress = () =>{ this.props.navigation.navigate('Home');

    render() {
        return(
             <View style={styles.container}>
                {

                    this.state.items.length > 0
                    ? <ItemComponent items={this.state.items} />
                    : <Text>No items</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
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
