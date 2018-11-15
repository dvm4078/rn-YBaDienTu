import React, { Component } from 'react';
import { Image, View, AsyncStorage } from 'react-native';
import { Images } from '../Themes';
import AppConfig from '../Config/AppConfig';
import ProgressIndicator from '../Components/ProgressIndicator';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(AppConfig.userToken).catch(
      e => null
    );
    this.props.navigation.navigate(!userToken ? 'AppNav' : 'AuthNav');
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.centered}>
          <Image source={Images.launch} style={styles.logo} />
        </View>

        <View style={styles.section}>
          <Image source={Images.ready} />
        </View>

        <ProgressIndicator />
      </View>
    );
  }
}
