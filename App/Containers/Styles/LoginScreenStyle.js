import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  logo: {
    marginVertical: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  fullScreenHeight: {
    height: Metrics.screenHeight,
  },
  stickBottom: {
    justifyContent: 'space-between',
    flex: 0.9,
  },
  loginButton: {
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  authInput: {
    marginTop: Metrics.baseMargin,
    paddingHorizontal: 10,
  },
  signup: {
    textDecorationLine: 'underline',
    color: Colors.banner,
  },
});
