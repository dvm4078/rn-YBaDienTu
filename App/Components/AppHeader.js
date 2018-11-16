import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Header,
  Button,
  // Icon,
  Input,
  Item,
} from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import styles from './Styles/AppHeaderStyle';

import {USER_PROFILE_SCREEN} from '../Navigation/ScreenNames';

export class AppHeader extends Component {
  // Prop type warnings
  static propTypes = {
    camera: PropTypes.bool,
    showLeft: PropTypes.bool,
    showRight: PropTypes.bool,
    goToProfileScreen: PropTypes.func,
  };

  // Defaults for props
  static defaultProps = {
    showLeft: true,
    showRight: true,
    camera: true,
    goToProfileScreen: () => {},
  };


  render() {
    const { showLeft, showRight, camera } = this.props;

    return (
      <Header searchBar rounded>
        {showLeft && (
          <Button style={styles.button}>
          <Icon name="camera" size={30} color="white"/>
          </Button>
        )}
        <Item style={styles.searchbox} >
        <Icon name="magnifier" size={20} color="#aaa"/>
          <Input
            placeholder="Search"
            ref={ref => (this.searchInput = ref)}
            style={styles.searchinput}
            placeholderTextColor="#fff"
          />
        </Item>
        {showRight && (
          <Button style={styles.button} onPress={this.props.goToProfileScreen}>
            <Icon name="people" size={30} color="white"/>
          </Button>
        )}
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
