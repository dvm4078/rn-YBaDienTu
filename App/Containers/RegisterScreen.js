import React, { Component } from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Text, Form, Item, Icon, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { AsYouType, parsePhoneNumber } from 'libphonenumber-js';
import every from 'lodash/every';
import isEmpty from 'lodash/isEmpty';
import showToast from '../Lib/ToastService';
import isValidEmail from '../Lib/ValidateEmail';
import {
  LOGIN_SCREEN,
  FORGOT_PASSWORD_SCREEN,
} from '../Navigation/ScreenNames';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterScreenStyle';

class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      phone: '',
      password: '',
      invalidEmail: false,
      invalidPhone: false,
      invalidPassword: false,
      invalidUsername: false,
    };
    this.asYouType = new AsYouType('VN');
  }

  handleChangeUsername = username => {
    this.setState(() => ({ username, invalidUsername: false }));
  };

  handleChangeEmail = email =>
    this.setState(() => ({ email, invalidEmail: false }));

  handleChangePhone = phone => {
    const phoneFormatted = this.asYouType.input(phone);
    const phoneNumber = this.asYouType.getNumber();
    if (phoneNumber && phoneNumber.isValid()) {
      this.setState(() => ({ phone: phoneFormatted, invalidPhone: false }));
    } else {
      this.setState(() => ({ invalidPhone: true, phone: phoneFormatted }));
      if (phoneNumber && phoneNumber.isPossible())
        showToast('Not a valid phone number');
    }
    this.asYouType.reset();
  };

  handleChangePassword = password => {
    this.setState(() => ({ password, invalidPassword: false }));
  };

  handleClearPassword = () => this.setState(() => ({ password: '' }));

  handleValidateEmail = () => {
    const { email } = this.state;
    const invalidEmail = email && !isValidEmail(email);
    if (invalidEmail) {
      showToast('Not a valid email');
    }
    this.setState(() => ({ invalidEmail }));
  };

  // handleValidateUsername = () => {
  //   const { username } = this.state;
  //   if (!username) {
  //     showToast('Please enter your name');
  //   }
  //   this.setState(() => ({ invalidUsername: !username }));
  // };

  handlePressRegister = () => {
    const { username, email, phone, password } = this.state;
    if (!username) {
      this.setState(() => ({ invalidUsername: true }));
      showToast('Please fill your name to registered form');
    }
    if (!email) {
      this.setState(() => ({ invalidEmail: true }));
      showToast('Please fill your email to registered form');
    }
    if (!phone) {
      this.setState(() => ({ invalidPhone: true }));
      showToast('Please fill your phone number to registered form');
    }
    if (!password) {
      this.setState(() => ({ invalidPassword: true }));
      showToast('Please fill your password to registered form');
    }

    let validPhoneNumber = false;
    if (phone) {
      const phoneNumber = parsePhoneNumber(phone, 'VN');
      validPhoneNumber = phoneNumber && phoneNumber.isValid();
    }

    if (every([username, isValidEmail(email), validPhoneNumber, password])) {
      // thông tin đăng kí hợp lệ
      console.log('=> registered', username, email, phone, password);
    } else {
      showToast('Your information not valid');
    }
  };

  render() {
    const {
      username,
      email,
      phone,
      password,
      invalidEmail,
      invalidPhone,
      invalidPassword,
      invalidUsername,
    } = this.state;

    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.fullScreenHeight}
        >
          <View style={styles.stickBottom}>
            <View>
              <View style={styles.section}>
                <View style={styles.centered}>
                  <Text>Register an account directly</Text>
                </View>
                <Form>
                  <Item
                    style={styles.registerInput}
                    rounded
                    error={invalidUsername}
                  >
                    <Icon ios="ios-person" android="md-person" />
                    <Input
                      placeholder="Your name"
                      keyboardType="default"
                      returnKeyType="next"
                      autoCapitalize="words"
                      autoCorrect={true}
                      underlineColorAndroid="transparent"
                      value={username}
                      onChangeText={this.handleChangeUsername}
                      // onBlur={this.handleValidateUsername}
                      onSubmitEditing={() => this.email._root.focus()}
                    />
                  </Item>
                  <Item
                    style={styles.registerInput}
                    rounded
                    error={invalidEmail}
                  >
                    <Icon ios="ios-mail" android="md-mail" />
                    <Input
                      placeholder="Email"
                      ref={ref => (this.email = ref)}
                      keyboardType="email-address"
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      value={email}
                      onChangeText={this.handleChangeEmail}
                      onBlur={this.handleValidateEmail}
                      onSubmitEditing={() => this.phone._root.focus()}
                    />
                  </Item>
                  <Item
                    style={styles.registerInput}
                    rounded
                    error={invalidPhone}
                  >
                    <Icon
                      ios="ios-phone-portrait"
                      android="md-phone-portrait"
                    />
                    <Input
                      placeholder="Phone number"
                      ref={ref => (this.phone = ref)}
                      keyboardType="phone-pad"
                      returnKeyType="next"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      value={phone}
                      onChangeText={this.handleChangePhone}
                      onSubmitEditing={() => this.password._root.focus()}
                    />
                  </Item>
                  <Item
                    style={styles.registerInput}
                    rounded
                    error={invalidPassword}
                  >
                    <Icon ios="ios-lock" android="md-lock" />
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
                      onChangeText={this.handleChangePassword}
                      onFocus={this.handleClearPassword}
                      onSubmitEditing={this.handlePressRegister}
                    />
                  </Item>
                </Form>
                <View style={[styles.centered, styles.registerButton]}>
                  <Button primary block onPress={this.handlePressRegister}>
                    <Text>Register</Text>
                  </Button>
                </View>
              </View>
              <View style={styles.section}>
                <View style={styles.centered}>
                  <Text>or register via</Text>
                </View>
                <View style={[styles.centered, styles.registerButton]}>
                  <Button primary block>
                    <Icon name="logo-facebook" />
                    <Text>Facebook</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={[styles.centered, styles.anchorBottom]}>
              <Text
                style={styles.signin}
                onPress={() => this.props.navigation.navigate(LOGIN_SCREEN)}
              >
                Already has account?
              </Text>
              <Text> or </Text>
              <Text
                style={styles.forgot}
                onPress={() =>
                  this.props.navigation.navigate(FORGOT_PASSWORD_SCREEN)
                }
              >
                Forgot your password?
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
)(RegisterScreen);
