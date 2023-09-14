import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#145855',
    borderRadius: horizontalScale(100),
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(8),
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '600',
    color: 'white',
  },
  sm: {paddingVertical: verticalScale(5)},
  md: {paddingVertical: verticalScale(5)},
  smTxt: {fontSize: scaleFontSize(10)},
  mdTxt: {fontSize: scaleFontSize(14)},
});

export default styles;
