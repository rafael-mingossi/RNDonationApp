import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../src/utils/scalling';

const globalStyles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  paddings: {
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(20),
    paddingLeft: horizontalScale(20),
    paddingRight: horizontalScale(20),
  },
});

export default globalStyles;
