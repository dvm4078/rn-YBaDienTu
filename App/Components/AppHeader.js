import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Header,
  Button,
  Icon,
  Input,
  Item,
} from 'native-base';
import { connect } from 'react-redux';
import styles from './Styles/AppHeaderStyle';

export class AppHeader extends Component {
  // Prop type warnings
  static propTypes = {
    camera: PropTypes.bool,
    showLeft: PropTypes.bool,
    showRight: PropTypes.bool,
  };

  // Defaults for props
  static defaultProps = {
    showLeft: true,
    showRight: true,
    camera: true,
  };

  render() {
    const { showLeft, showRight, camera } = this.props;

    return (
      <Header searchBar rounded>
        {showLeft && (
          <Button style={styles.button}>
            <Icon
              ios={camera ? 'ios-camera' : 'ios-arrow-back'}
              android={camera ? 'md-camera' : 'md-arrow-back'}
            />
          </Button>
        )}
        <Item style={styles.searchbox}>
          <Icon
            active
            ios="ios-search"
            android="md-search"
            style={styles.searchicon}
            onPress={() => this.searchInput._root.focus()}
          />
          <Input
            placeholder="Search"
            ref={ref => (this.searchInput = ref)}
            style={styles.searchinput}
            placeholderTextColor="#fff"
          />
        </Item>
        {showRight && (
          <Button style={styles.button}>
            <Icon ios="ios-person" android="md-person" />
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
