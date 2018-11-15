import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  stickBottom: {
    justifyContent: 'space-between',
    flex: 0.9,
  },
  fullScreenHeight: {
    height: Metrics.screenHeight,
  },
  centered: {
    alignItems: 'center',
  },
  registerInput: {
    marginTop: Metrics.baseMargin,
    paddingHorizontal: Metrics.basePadding,
  },
  registerButton: {
    marginTop: Metrics.baseMargin,
  },
  signin: {
    textDecorationLine: 'underline',
    color: Colors.banner,
  },
  forgot: {
    textDecorationLine: 'underline',
    color: Colors.banner,
  },
  anchorBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
