import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  thumbnail: {
    margin: 5,
  },
  listItemSeparator: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 40
  },
  listItemSeparatorText: {
    fontSize: 12,
  }
})
