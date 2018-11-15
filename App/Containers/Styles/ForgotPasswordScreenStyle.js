import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes/';
import { Col } from 'native-base';

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
  anchorBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  register: {
    textDecorationLine: 'underline',
    color: Colors.banner,
  },
  login: {
    textDecorationLine: 'underline',
    color: Colors.banner,
  },
  instruction: {
    color: Colors.banner,
    textAlign: 'center',
    marginBottom: Metrics.baseMargin,
  },
  requestButton: {
    marginVertical: Metrics.baseMargin,
  },
});
