import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../utils/scalling';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9',
    borderRadius: horizontalScale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#79869F',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
  },
  disabled: {
    opacity: 0.5,
  },
  active: {
    backgroundColor: '#2979F2',
  },
  activeTxt: {
    color: 'white',
  },
  sm: {},
  md: {
    height: verticalScale(50),
  },
  lg: {
    height: verticalScale(55),
  },
  smTxt: {},
  mdTxt: {
    fontSize: scaleFontSize(14),
  },
  lgTxt: {
    fontSize: scaleFontSize(16),
  },
});

export default styles;
