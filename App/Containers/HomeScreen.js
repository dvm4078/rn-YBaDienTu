import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Header,
  Content,
  Text,
  Left,
  Right,
  Body,
  Footer, FooterTab, Button
} from 'native-base';
import AppHeader from '../Components/AppHeader';
import { USER_PROFILE_SCREEN } from '../Navigation/ScreenNames';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle';

class HomeScreen extends Component {

  constructor(props, context) {
    super(props, context);
    this.goToProfileScreen = this.goToProfileScreen.bind(this);
  }


  goToProfileScreen() {
    this.props.navigation.navigate(USER_PROFILE_SCREEN);
  }

  render() {
    return (
      <Container>
        <AppHeader />
        <Content padder>
          <Text onPress={this.goToProfileScreen}>This is content</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button>
              <Text>Camera</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
            <Button>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
)(HomeScreen);
