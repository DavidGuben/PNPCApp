import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  Linking
} from 'react-native';
import { Button, Card } from 'react-native-material-design';


const onButtonPress01 = () => {
  // Alert.alert('Button has been pressed!');
  Linking.openURL('https://crm.pawfinity.com/pawsnposeinc/application/').catch(err => console.error('An error occurred', err));

};
const onButtonPress02 = () => {
  // Alert.alert('Button has been pressed!');
  Linking.openURL('https://crm.pawfinity.com/pawsnposeinc/application/').catch(err => console.error('An error occurred', err));

};
const onButtonPress03 = () => {
  // Alert.alert('Button has been pressed!');
  Linking.openURL('https://www.pawsnposecuttery.com').catch(err => console.error('An error occurred', err));

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
          onPress={onButtonPress01}
          raised={true}
          text="Groom My Dog"
          color="blue"
          />

          <Button
          style={styles.button01}
          onPress={onButtonPress02}
          raised={true}
          text="Board My Dog"
          color="blue"
          />

          <Button
          style={styles.button01}
          onPress={onButtonPress03}
          text="Visit Our Website"
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
