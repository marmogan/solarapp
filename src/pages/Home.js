import React, {Component} from 'react';
import {StyleSheet,Text, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation';

export default class Home extends Component<{}> {
    static navigationOptions = {
      headerStyle:{
        backgroundColor: "#1c313a"
      }
    };

    onPress1 = () =>{ this.props.navigation.navigate('Power');
      }
    onPress2 = () =>{ this.props.navigation.navigate('Solar');
      }
    onPress3 = () =>{ this.props.navigation.navigate('Electronics');
      }
    onPress4 = () =>{ this.props.navigation.navigate('Tilt');
      }

    render() {
        return(
            <View style={styles.container}>
              <TouchableOpacity style={styles.button}
                onPress={this.onPress1} >

                <Text style={styles.buttonText}>Power Statistics</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={this.onPress2}
                >
                <Text style={styles.buttonText}>Solar Cells</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={this.onPress3}
                >

                <Text style={styles.buttonText}>Electronics</Text>

              </TouchableOpacity>

              <TouchableOpacity style={styles.button}
                onPress={this.onPress4}
                >

                <Text style={styles.buttonText}>Tilt Status</Text>

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
    marginVertical: 25,
    paddingVertical: 12
  },

  buttonText: {
    fontSize:35,
    fontWeight:'500',
    color: '#ffffff',
    textAlign: 'center'
  }

});
