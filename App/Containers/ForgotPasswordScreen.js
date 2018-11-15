import React, { Component } from 'react';
import { ScrollView, View, KeyboardAvoidingView } from 'react-native';
import { Text, Form, Item, Icon, Input, Button } from 'native-base';
import showToast from '../Lib/ToastService';
import isValidEmail from '../Lib/ValidateEmail';
import { connect } from 'react-redux';
import { LOGIN_SCREEN, REGISTER_SCREEN } from '../Navigation/ScreenNames';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ForgotPasswordScreenStyle';

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      invalidEmail: false,
      sent: false,
    };
  }

  handleChangeEmail = email =>
    this.setState(() => ({ email, invalidEmail: false }));

  handleValidateEmail = () => {
    const { email } = this.state;
    const invalidEmail = email && !isValidEmail(email);
    if (invalidEmail) {
      showToast('Not a valid email');
    }
    this.setState(() => ({ invalidEmail }));
  };

  handlePressRequestPassword = () => {
    const { email } = this.state;
    const invalidEmail = !isValidEmail(email);
    if (invalidEmail) {
      this.setState(() => ({ invalidEmail }));
      showToast('Not a valid email');
    } else {
      console.log('==> request new password', email);
    }
  };

  render() {
    const { email, invalidEmail, sent } = this.state;
    return (
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.fullScreenHeight}
        >
          <View style={styles.stickBottom}>
            <View>
              <View style={styles.section}>
                <Text style={styles.instruction}>
                  {!sent
                    ? 'Enter your email, we will help you get back your password'
                    : 'Instructions to get back your password are sent to your email!'}
                </Text>
                <Form>
                  <Item rounded error={invalidEmail}>
                    <Icon ios="ios-mail" android="md-mail" />
                    <Input
                      placeholder="Email"
                      value={email}
                      keyboardType="email-address"
                      returnKeyType="go"
                      autoCapitalize="none"
                      autoCorrect={false}
                      underlineColorAndroid="transparent"
                      onChangeText={this.handleChangeEmail}
                      onBlur={this.handleValidateEmail}
                      onSubmitEditing={this.handlePressRequestPassword}
                    />
                  </Item>
                </Form>
                <View style={styles.requestButton}>
                  <Button
                    primary
                    block
                    onPress={this.handlePressRequestPassword}
                  >
                    <Text>Request new password</Text>
                  </Button>
                </View>
              </View>
            </View>
            <View style={[styles.centered, styles.anchorBottom]}>
              <Text>Go back to </Text>
              <Text
                style={styles.login}
                onPress={() => this.props.navigation.navigate(LOGIN_SCREEN)}
              >
                login
              </Text>
              <Text> or </Text>
              <Text
                style={styles.register}
                onPress={() => this.props.navigation.navigate(REGISTER_SCREEN)}
              >
                register new account
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
)(ForgotPasswordScreen);
