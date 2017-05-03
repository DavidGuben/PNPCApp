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

        <View style={styles.LogoContainer}>
            <Image
            style={styles.pnpcLogo}
            source={require('./img/PNPCLogo.png')}
            />
            <Image
            style={styles.BNBLogo}
            source={require('./img/BNBLogo.png')}
            />
        </View>

        <Image
        style={styles.PhoneNumber}
        source={require('./img/PhoneNumber.png')}
        />

        <View style={styles.buttonBox}>
          <Button
          style={styles.button01}
          onPress={onButtonPress}
          title="Groom My Dog"
          color="blue"
          />

          <Button
          style={styles.button01}
          onPress={onButtonPress}
          title="Board My Dog"
          color="blue"
          />

          <Button
          style={styles.button01}
          onPress={onButtonPress}
          title="Visit Our Website"
          color="blue"
          />
        </View>

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pnpcLogo: {
    right: 20
  },
  pnpcLogoBox: {

  },
  BNBLogo: {
    left: 20
  },
  phoneNumber: {

  },
  PawPrintTop: {
    flex: 1,
  },
  PawPrintBottom: {

  },
  button01: {
    flex: 1,
  },
  button02: {},
  buttonBox: {},
  LogoContainer: {
    flexDirection: 'row',
  }

});

AppRegistry.registerComponent('pnpcApp', () => pnpcApp);
