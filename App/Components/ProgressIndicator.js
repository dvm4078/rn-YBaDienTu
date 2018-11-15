import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ProgressCircleSnail from 'react-native-progress/CircleSnail';
import styles from './Styles/ProgressIndicatorStyle';

export default class ProgressIndicator extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <View style={styles.container}>
        <ProgressCircleSnail color={['#F44336', '#2196F3', '#009688']} />
      </View>
    );
  }
}
