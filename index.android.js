import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class pnpcApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.PawPrintTop}
        source={require('./img/PawPrintTop.png')}
        />

        <Image
        style={styles.phoneNumber}
        source={require('./img/phoneNumber.png')}
        />

        <Image
        style={styles.pnpcLogo}
        source={require('./img/PNPCLogo.png')}
        />

        <Image
        style={styles.BNBLogo}
        source={require('./img/BNBLogo.png')}
        />

        <Button
        style={styles.button01}
        onPress={onButtonPress}
        title="Visit Our Website"
        color="blue"
        />

        <Image
        style={styles.PawPrintBottom}
        source={require('./img/PawPrintBottom.png')}
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pnpcLogo: {},
  BNBLogo: {},
  phoneNumber: {},
  PawPrintTop: {},
  PawPrintBottom: {},
  button01: {},
  button02: {}

});

AppRegistry.registerComponent('pnpcApp', () => pnpcApp);
