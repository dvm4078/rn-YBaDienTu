import React, { Component } from 'react';
import { ScrollView, View, KeyboardAvoidingView, Image } from 'react-native';
import { connect } from 'react-redux';
import { Form, Item, Input, Button, Text, Icon } from 'native-base';
import { AsYouType, parsePhoneNumber } from 'libphonenumber-js';
import every from 'lodash/every';
import { Images } from '../Themes';
import isValidEmail from '../Lib/ValidateEmail';
import showToast from '../Lib/ToastService';
import { REGISTER_SCREEN } from '../Navigation/ScreenNames';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      phone: '',
      usernameInvalid: false,
      passwordInvalid: false,
      phoneInvalid: false,
    };
    this.asYouType = new AsYouType('VN');
  }

  handleChangeUsername = username => {
    this.setState(() => ({ username, usernameInvalid: false }));
  };

  handleChangePhone = phone => {
    const phoneFormatted = this.asYouType.input(phone);
    const phoneNumber = this.asYouType.getNumber();
    if (phoneNumber && phoneNumber.isValid()) {
      this.setState(() => ({ phone: phoneFormatted, phoneInvalid: false }));
    } else {
      this.setState(() => ({ phoneInvalid: true, phone: phoneFormatted }));
      if (phoneNumber && phoneNumber.isPossible())
        showToast('Not a valid phone number');
    }
    this.asYouType.reset();
  };

  handleValidateUsername = () => {
    const { username } = this.state;
    const emailInvalid = !username || !isValidEmail(username);
    if (!emailInvalid) {
      this.setState(() => ({
        usernameInvalid: false,
        phoneInvalid: false,
      }));
    } else {
      showToast('Not a valid email');
      this.setState(() => ({ usernameInvalid: true }));
    }
  };

  handleChangePassword = password => {
    this.setState(() => ({ password, passwordInvalid: false }));
  };

  handleClearPassword = () => this.setState(() => ({ password: '' }));

  handlePressLogin = () => {
    const { phone, username, password } = this.state;
    if (phone === '' && username === '') {
      this.setState(() => ({ usernameInvalid: true, phoneInvalid: true }));
      showToast('Please enter your phone number or email');
    } else if (password === '') {
      this.setState(() => ({ passwordInvalid: true }));
      showToast('Please enter your password');
    }

    let phoneNumberValid = false;
    if (phone) {
      const phoneNumber = parsePhoneNumber(phone, 'VN');
      phoneNumberValid = phoneNumber && phoneNumber.isValid();
    }

    if (
      (phone === '' && username === '') ||
      (!isValidEmail(username) && !phoneNumberValid) ||
      !password
    ) {
      showToast('Please correct information to login');
    } else {
      console.log('login info', username, phone, password);
    }
  };

  handleValidatePhone = () => {
    const { phoneInvalid, phone } = this.state;
    if (phone && !phoneInvalid) {
      this.setState(() => ({
        usernameInvalid: false,
      }));
    }
  };

  render() {
    const {
      username,
      password,
      phone,
      usernameInvalid,
      passwordInvalid,
      phoneInvalid,
    } = this.state;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.fullScreenHeight}
        >
          <View style={styles.stickBottom}>
            <View style={styles.section}>
              <View style={styles.centered}>
                <Image source={Images.launch} style={styles.logo} />
              </View>
              <View style={styles.centered}>
                <Text>Login by either phone number or email!</Text>
              </View>
              <Form>
                <Item style={styles.authInput} rounded error={phoneInvalid}>
                  <Icon ios="ios-phone-portrait" android="md-phone-portrait" />
                  <Input
                    placeholder="Phone number"
                    ref="phone"
                    keyboardType="phone-pad"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={phone}
                    onBlur={this.handleValidatePhone}
                    onChangeText={this.handleChangePhone}
                    onSubmitEditing={() => this.password._root.focus()}
                  />
                </Item>
                <Item style={styles.authInput} rounded error={usernameInvalid}>
                  <Icon ios="ios-person" android="md-person" />
                  <Input
                    placeholder="Username"
                    ref="username"
                    keyboardType="default"
                    returnKeyType="next"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    value={username}
                    onBlur={this.handleValidateUsername}
                    onChangeText={this.handleChangeUsername}
                    onSubmitEditing={() => this.password._root.focus()}
                  />
                </Item>
                <Item style={styles.authInput} rounded error={passwordInvalid}>
                  <Icon ios="ios-unlock" android="md-unlock" />
                  <Input
                    placeholder="Password"
                    ref={ref => (this.password = ref)}
                    keyboardType="default"
                    returnKeyType="go"
                    autoCapitalize="none"
                    autoCorrect={false}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    value={password}
                    onFocus={this.handleClearPassword}
                    onChangeText={this.handleChangePassword}
                    onSubmitEditing={this.handlePressLogin}
                  />
                </Item>
              </Form>
              <View style={styles.loginButton}>
                <Button block primary onPress={this.handlePressLogin}>
                  <Text>Login</Text>
                </Button>
              </View>
            </View>
            <View style={styles.centered}>
              <Text>
                Register another account?
                <Text
                  style={styles.signup}
                  onPress={() =>
                    this.props.navigation.navigate(REGISTER_SCREEN)
                  }
                >
                  Touch here!
                </Text>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
