import { StackNavigator, SwitchNavigator } from 'react-navigation';
import ChangePasswordScreen from '../Containers/ChangePasswordScreen';
import UserProfileScreen from '../Containers/UserProfileScreen';
import ForgotPasswordScreen from '../Containers/ForgotPasswordScreen';
import HomeScreen from '../Containers/HomeScreen';
import RegisterScreen from '../Containers/RegisterScreen';
import LoginScreen from '../Containers/LoginScreen';
import LaunchScreen from '../Containers/LaunchScreen';

import styles from './Styles/NavigationStyles';
import {
  LAUNCH_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  HOME_SCREEN,
  FORGOT_PASSWORD_SCREEN,
  CHANGE_PASSWORD_SCREEN,
  USER_PROFILE_SCREEN,
} from './ScreenNames';

// Manifest of possible screens
const AuthNav = StackNavigator(
  {
    [LOGIN_SCREEN]: {
      screen: LoginScreen,
    },
    [REGISTER_SCREEN]: {
      screen: RegisterScreen,
    },
    [FORGOT_PASSWORD_SCREEN]: {
      screen: ForgotPasswordScreen,
    },
  },
  {
    // Default config for all auth screens
    headerMode: 'none',
    initialRouteName: LOGIN_SCREEN,
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
);

const AppNav = StackNavigator(
  {
    [HOME_SCREEN]: {
      screen: HomeScreen,
    },
    [USER_PROFILE_SCREEN]: {
      screen: UserProfileScreen,
    },
    [CHANGE_PASSWORD_SCREEN]: {
      screen: ChangePasswordScreen,
    },
  },
  {
    // Default config for all app screens
    headerMode: 'none',
    initialRouteName: HOME_SCREEN,
    navigationOptions: {
      headerStyle: styles.header,
    },
  }
);

const PrimaryNav = SwitchNavigator(
  {
    [LAUNCH_SCREEN]: {
      screen: LaunchScreen,
    },
    AuthNav: {
      screen: AuthNav,
    },
    AppNav: {
      screen: AppNav,
    },
  },
  {
    initialRouteName: LAUNCH_SCREEN,
  }
);

export default PrimaryNav;
