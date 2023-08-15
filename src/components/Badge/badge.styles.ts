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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '600',
    color: 'white',
  },
  sm: {height: verticalScale(22)},
  md: {height: verticalScale(27)},
  smTxt: {fontSize: scaleFontSize(14)},
  mdTxt: {fontSize: scaleFontSize(16)},
});

export default styles;
