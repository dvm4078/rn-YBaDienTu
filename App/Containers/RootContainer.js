import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Root, StyleProvider } from 'native-base';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';

// Styles
import styles from './Styles/RootContainerStyles';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

class RootContainer extends Component {
  componentDidMount() {
    this.props.startup();
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle="light-content" />
        <Root>
          <StyleProvider style={getTheme(platform)}>
            <ReduxNavigation />
          </StyleProvider>
        </Root>
      </View>
    );
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(StartupActions.startup()),
});

export default connect(
  null,
  mapDispatchToProps
)(RootContainer);
