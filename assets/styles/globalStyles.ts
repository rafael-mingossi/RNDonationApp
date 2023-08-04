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
    paddingLeft: horizontalScale(24),
    paddingRight: horizontalScale(24),
  },
});

export default globalStyles;
